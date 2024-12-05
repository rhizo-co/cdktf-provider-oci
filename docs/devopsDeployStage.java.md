# `devopsDeployStage` Submodule <a name="`devopsDeployStage` Submodule" id="rhizo-co-terraform-provider-oci.devopsDeployStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsDeployStage <a name="DevopsDeployStage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage oci_devops_deploy_stage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStage;

DevopsDeployStage.Builder.create(Construct scope, java.lang.String id)
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
    .deployPipelineId(java.lang.String)
    .deployStagePredecessorCollection(DevopsDeployStageDeployStagePredecessorCollection)
    .deployStageType(java.lang.String)
//  .approvalPolicy(DevopsDeployStageApprovalPolicy)
//  .areHooksEnabled(java.lang.Boolean)
//  .areHooksEnabled(IResolvable)
//  .blueBackendIps(DevopsDeployStageBlueBackendIps)
//  .blueGreenStrategy(DevopsDeployStageBlueGreenStrategy)
//  .canaryStrategy(DevopsDeployStageCanaryStrategy)
//  .commandSpecDeployArtifactId(java.lang.String)
//  .computeInstanceGroupBlueGreenDeploymentDeployStageId(java.lang.String)
//  .computeInstanceGroupCanaryDeployStageId(java.lang.String)
//  .computeInstanceGroupCanaryTrafficShiftDeployStageId(java.lang.String)
//  .computeInstanceGroupDeployEnvironmentId(java.lang.String)
//  .config(java.util.Map<java.lang.String, java.lang.String>)
//  .containerConfig(DevopsDeployStageContainerConfig)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .deployArtifactId(java.lang.String)
//  .deployArtifactIds(java.util.List<java.lang.String>)
//  .deployEnvironmentIdA(java.lang.String)
//  .deployEnvironmentIdB(java.lang.String)
//  .deploymentSpecDeployArtifactId(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .dockerImageDeployArtifactId(java.lang.String)
//  .failurePolicy(DevopsDeployStageFailurePolicy)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .functionDeployEnvironmentId(java.lang.String)
//  .functionTimeoutInSeconds(java.lang.Number)
//  .greenBackendIps(DevopsDeployStageGreenBackendIps)
//  .helmChartDeployArtifactId(java.lang.String)
//  .helmCommandArtifactIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .isAsync(java.lang.Boolean)
//  .isAsync(IResolvable)
//  .isDebugEnabled(java.lang.Boolean)
//  .isDebugEnabled(IResolvable)
//  .isForceEnabled(java.lang.Boolean)
//  .isForceEnabled(IResolvable)
//  .isUninstallOnStageDelete(java.lang.Boolean)
//  .isUninstallOnStageDelete(IResolvable)
//  .isValidationEnabled(java.lang.Boolean)
//  .isValidationEnabled(IResolvable)
//  .kubernetesManifestDeployArtifactIds(java.util.List<java.lang.String>)
//  .loadBalancerConfig(DevopsDeployStageLoadBalancerConfig)
//  .maxHistory(java.lang.Number)
//  .maxMemoryInMbs(java.lang.String)
//  .namespace(java.lang.String)
//  .okeBlueGreenDeployStageId(java.lang.String)
//  .okeCanaryDeployStageId(java.lang.String)
//  .okeCanaryTrafficShiftDeployStageId(java.lang.String)
//  .okeClusterDeployEnvironmentId(java.lang.String)
//  .productionLoadBalancerConfig(DevopsDeployStageProductionLoadBalancerConfig)
//  .purpose(java.lang.String)
//  .releaseName(java.lang.String)
//  .rollbackPolicy(DevopsDeployStageRollbackPolicy)
//  .rolloutPolicy(DevopsDeployStageRolloutPolicy)
//  .setString(DevopsDeployStageSetString)
//  .setValues(DevopsDeployStageSetValues)
//  .shouldCleanupOnFail(java.lang.Boolean)
//  .shouldCleanupOnFail(IResolvable)
//  .shouldNotWait(java.lang.Boolean)
//  .shouldNotWait(IResolvable)
//  .shouldResetValues(java.lang.Boolean)
//  .shouldResetValues(IResolvable)
//  .shouldReuseValues(java.lang.Boolean)
//  .shouldReuseValues(IResolvable)
//  .shouldSkipCrds(java.lang.Boolean)
//  .shouldSkipCrds(IResolvable)
//  .shouldSkipRenderSubchartNotes(java.lang.Boolean)
//  .shouldSkipRenderSubchartNotes(IResolvable)
//  .testLoadBalancerConfig(DevopsDeployStageTestLoadBalancerConfig)
//  .timeoutInSeconds(java.lang.Number)
//  .timeouts(DevopsDeployStageTimeouts)
//  .trafficShiftTarget(java.lang.String)
//  .valuesArtifactIds(java.util.List<java.lang.String>)
//  .waitCriteria(DevopsDeployStageWaitCriteria)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployPipelineId">deployPipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_pipeline_id DevopsDeployStage#deploy_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployStagePredecessorCollection">deployStagePredecessorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a></code> | deploy_stage_predecessor_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployStageType">deployStageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_stage_type DevopsDeployStage#deploy_stage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.approvalPolicy">approvalPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a></code> | approval_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.areHooksEnabled">areHooksEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#are_hooks_enabled DevopsDeployStage#are_hooks_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.blueBackendIps">blueBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a></code> | blue_backend_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.blueGreenStrategy">blueGreenStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a></code> | blue_green_strategy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.canaryStrategy">canaryStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a></code> | canary_strategy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.commandSpecDeployArtifactId">commandSpecDeployArtifactId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#command_spec_deploy_artifact_id DevopsDeployStage#command_spec_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.computeInstanceGroupBlueGreenDeploymentDeployStageId">computeInstanceGroupBlueGreenDeploymentDeployStageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_blue_green_deployment_deploy_stage_id DevopsDeployStage#compute_instance_group_blue_green_deployment_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.computeInstanceGroupCanaryDeployStageId">computeInstanceGroupCanaryDeployStageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.computeInstanceGroupCanaryTrafficShiftDeployStageId">computeInstanceGroupCanaryTrafficShiftDeployStageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_traffic_shift_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_traffic_shift_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.computeInstanceGroupDeployEnvironmentId">computeInstanceGroupDeployEnvironmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_deploy_environment_id DevopsDeployStage#compute_instance_group_deploy_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.config">config</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#config DevopsDeployStage#config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.containerConfig">containerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a></code> | container_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#defined_tags DevopsDeployStage#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployArtifactId">deployArtifactId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_id DevopsDeployStage#deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployArtifactIds">deployArtifactIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_ids DevopsDeployStage#deploy_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployEnvironmentIdA">deployEnvironmentIdA</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_a DevopsDeployStage#deploy_environment_id_a}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployEnvironmentIdB">deployEnvironmentIdB</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_b DevopsDeployStage#deploy_environment_id_b}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deploymentSpecDeployArtifactId">deploymentSpecDeployArtifactId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deployment_spec_deploy_artifact_id DevopsDeployStage#deployment_spec_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#description DevopsDeployStage#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#display_name DevopsDeployStage#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.dockerImageDeployArtifactId">dockerImageDeployArtifactId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#docker_image_deploy_artifact_id DevopsDeployStage#docker_image_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.failurePolicy">failurePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a></code> | failure_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#freeform_tags DevopsDeployStage#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.functionDeployEnvironmentId">functionDeployEnvironmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_deploy_environment_id DevopsDeployStage#function_deploy_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.functionTimeoutInSeconds">functionTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_timeout_in_seconds DevopsDeployStage#function_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.greenBackendIps">greenBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a></code> | green_backend_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.helmChartDeployArtifactId">helmChartDeployArtifactId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_chart_deploy_artifact_id DevopsDeployStage#helm_chart_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.helmCommandArtifactIds">helmCommandArtifactIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_command_artifact_ids DevopsDeployStage#helm_command_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.isAsync">isAsync</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_async DevopsDeployStage#is_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.isDebugEnabled">isDebugEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_debug_enabled DevopsDeployStage#is_debug_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.isForceEnabled">isForceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_force_enabled DevopsDeployStage#is_force_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.isUninstallOnStageDelete">isUninstallOnStageDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_uninstall_on_stage_delete DevopsDeployStage#is_uninstall_on_stage_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.isValidationEnabled">isValidationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_validation_enabled DevopsDeployStage#is_validation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.kubernetesManifestDeployArtifactIds">kubernetesManifestDeployArtifactIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#kubernetes_manifest_deploy_artifact_ids DevopsDeployStage#kubernetes_manifest_deploy_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.loadBalancerConfig">loadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a></code> | load_balancer_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.maxHistory">maxHistory</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_history DevopsDeployStage#max_history}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.maxMemoryInMbs">maxMemoryInMbs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_memory_in_mbs DevopsDeployStage#max_memory_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.okeBlueGreenDeployStageId">okeBlueGreenDeployStageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_blue_green_deploy_stage_id DevopsDeployStage#oke_blue_green_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.okeCanaryDeployStageId">okeCanaryDeployStageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_deploy_stage_id DevopsDeployStage#oke_canary_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.okeCanaryTrafficShiftDeployStageId">okeCanaryTrafficShiftDeployStageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_traffic_shift_deploy_stage_id DevopsDeployStage#oke_canary_traffic_shift_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.okeClusterDeployEnvironmentId">okeClusterDeployEnvironmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_cluster_deploy_environment_id DevopsDeployStage#oke_cluster_deploy_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.productionLoadBalancerConfig">productionLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a></code> | production_load_balancer_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.purpose">purpose</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#purpose DevopsDeployStage#purpose}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.releaseName">releaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#release_name DevopsDeployStage#release_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.rollbackPolicy">rollbackPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a></code> | rollback_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.rolloutPolicy">rolloutPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a></code> | rollout_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.setString">setString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a></code> | set_string block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.setValues">setValues</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a></code> | set_values block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldCleanupOnFail">shouldCleanupOnFail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_cleanup_on_fail DevopsDeployStage#should_cleanup_on_fail}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldNotWait">shouldNotWait</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_not_wait DevopsDeployStage#should_not_wait}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldResetValues">shouldResetValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reset_values DevopsDeployStage#should_reset_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldReuseValues">shouldReuseValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reuse_values DevopsDeployStage#should_reuse_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldSkipCrds">shouldSkipCrds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_crds DevopsDeployStage#should_skip_crds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldSkipRenderSubchartNotes">shouldSkipRenderSubchartNotes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_render_subchart_notes DevopsDeployStage#should_skip_render_subchart_notes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.testLoadBalancerConfig">testLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a></code> | test_load_balancer_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#timeout_in_seconds DevopsDeployStage#timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.trafficShiftTarget">trafficShiftTarget</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#traffic_shift_target DevopsDeployStage#traffic_shift_target}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.valuesArtifactIds">valuesArtifactIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#values_artifact_ids DevopsDeployStage#values_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.waitCriteria">waitCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a></code> | wait_criteria block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deployPipelineId`<sup>Required</sup> <a name="deployPipelineId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployPipelineId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_pipeline_id DevopsDeployStage#deploy_pipeline_id}.

---

##### `deployStagePredecessorCollection`<sup>Required</sup> <a name="deployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployStagePredecessorCollection"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a>

deploy_stage_predecessor_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_stage_predecessor_collection DevopsDeployStage#deploy_stage_predecessor_collection}

---

##### `deployStageType`<sup>Required</sup> <a name="deployStageType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployStageType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_stage_type DevopsDeployStage#deploy_stage_type}.

---

##### `approvalPolicy`<sup>Optional</sup> <a name="approvalPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.approvalPolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a>

approval_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#approval_policy DevopsDeployStage#approval_policy}

---

##### `areHooksEnabled`<sup>Optional</sup> <a name="areHooksEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.areHooksEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#are_hooks_enabled DevopsDeployStage#are_hooks_enabled}.

---

##### `blueBackendIps`<sup>Optional</sup> <a name="blueBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.blueBackendIps"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a>

blue_backend_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#blue_backend_ips DevopsDeployStage#blue_backend_ips}

---

##### `blueGreenStrategy`<sup>Optional</sup> <a name="blueGreenStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.blueGreenStrategy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a>

blue_green_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#blue_green_strategy DevopsDeployStage#blue_green_strategy}

---

##### `canaryStrategy`<sup>Optional</sup> <a name="canaryStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.canaryStrategy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a>

canary_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#canary_strategy DevopsDeployStage#canary_strategy}

---

##### `commandSpecDeployArtifactId`<sup>Optional</sup> <a name="commandSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.commandSpecDeployArtifactId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#command_spec_deploy_artifact_id DevopsDeployStage#command_spec_deploy_artifact_id}.

---

##### `computeInstanceGroupBlueGreenDeploymentDeployStageId`<sup>Optional</sup> <a name="computeInstanceGroupBlueGreenDeploymentDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.computeInstanceGroupBlueGreenDeploymentDeployStageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_blue_green_deployment_deploy_stage_id DevopsDeployStage#compute_instance_group_blue_green_deployment_deploy_stage_id}.

---

##### `computeInstanceGroupCanaryDeployStageId`<sup>Optional</sup> <a name="computeInstanceGroupCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.computeInstanceGroupCanaryDeployStageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_deploy_stage_id}.

---

##### `computeInstanceGroupCanaryTrafficShiftDeployStageId`<sup>Optional</sup> <a name="computeInstanceGroupCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.computeInstanceGroupCanaryTrafficShiftDeployStageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_traffic_shift_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_traffic_shift_deploy_stage_id}.

---

##### `computeInstanceGroupDeployEnvironmentId`<sup>Optional</sup> <a name="computeInstanceGroupDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.computeInstanceGroupDeployEnvironmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_deploy_environment_id DevopsDeployStage#compute_instance_group_deploy_environment_id}.

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.config"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#config DevopsDeployStage#config}.

---

##### `containerConfig`<sup>Optional</sup> <a name="containerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.containerConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a>

container_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#container_config DevopsDeployStage#container_config}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#defined_tags DevopsDeployStage#defined_tags}.

---

##### `deployArtifactId`<sup>Optional</sup> <a name="deployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployArtifactId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_id DevopsDeployStage#deploy_artifact_id}.

---

##### `deployArtifactIds`<sup>Optional</sup> <a name="deployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployArtifactIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_ids DevopsDeployStage#deploy_artifact_ids}.

---

##### `deployEnvironmentIdA`<sup>Optional</sup> <a name="deployEnvironmentIdA" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployEnvironmentIdA"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_a DevopsDeployStage#deploy_environment_id_a}.

---

##### `deployEnvironmentIdB`<sup>Optional</sup> <a name="deployEnvironmentIdB" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployEnvironmentIdB"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_b DevopsDeployStage#deploy_environment_id_b}.

---

##### `deploymentSpecDeployArtifactId`<sup>Optional</sup> <a name="deploymentSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deploymentSpecDeployArtifactId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deployment_spec_deploy_artifact_id DevopsDeployStage#deployment_spec_deploy_artifact_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#description DevopsDeployStage#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#display_name DevopsDeployStage#display_name}.

---

##### `dockerImageDeployArtifactId`<sup>Optional</sup> <a name="dockerImageDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.dockerImageDeployArtifactId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#docker_image_deploy_artifact_id DevopsDeployStage#docker_image_deploy_artifact_id}.

---

##### `failurePolicy`<sup>Optional</sup> <a name="failurePolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.failurePolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a>

failure_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_policy DevopsDeployStage#failure_policy}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#freeform_tags DevopsDeployStage#freeform_tags}.

---

##### `functionDeployEnvironmentId`<sup>Optional</sup> <a name="functionDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.functionDeployEnvironmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_deploy_environment_id DevopsDeployStage#function_deploy_environment_id}.

---

##### `functionTimeoutInSeconds`<sup>Optional</sup> <a name="functionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.functionTimeoutInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_timeout_in_seconds DevopsDeployStage#function_timeout_in_seconds}.

---

##### `greenBackendIps`<sup>Optional</sup> <a name="greenBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.greenBackendIps"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a>

green_backend_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#green_backend_ips DevopsDeployStage#green_backend_ips}

---

##### `helmChartDeployArtifactId`<sup>Optional</sup> <a name="helmChartDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.helmChartDeployArtifactId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_chart_deploy_artifact_id DevopsDeployStage#helm_chart_deploy_artifact_id}.

---

##### `helmCommandArtifactIds`<sup>Optional</sup> <a name="helmCommandArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.helmCommandArtifactIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_command_artifact_ids DevopsDeployStage#helm_command_artifact_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAsync`<sup>Optional</sup> <a name="isAsync" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.isAsync"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_async DevopsDeployStage#is_async}.

---

##### `isDebugEnabled`<sup>Optional</sup> <a name="isDebugEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.isDebugEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_debug_enabled DevopsDeployStage#is_debug_enabled}.

---

##### `isForceEnabled`<sup>Optional</sup> <a name="isForceEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.isForceEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_force_enabled DevopsDeployStage#is_force_enabled}.

---

##### `isUninstallOnStageDelete`<sup>Optional</sup> <a name="isUninstallOnStageDelete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.isUninstallOnStageDelete"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_uninstall_on_stage_delete DevopsDeployStage#is_uninstall_on_stage_delete}.

---

##### `isValidationEnabled`<sup>Optional</sup> <a name="isValidationEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.isValidationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_validation_enabled DevopsDeployStage#is_validation_enabled}.

---

##### `kubernetesManifestDeployArtifactIds`<sup>Optional</sup> <a name="kubernetesManifestDeployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.kubernetesManifestDeployArtifactIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#kubernetes_manifest_deploy_artifact_ids DevopsDeployStage#kubernetes_manifest_deploy_artifact_ids}.

---

##### `loadBalancerConfig`<sup>Optional</sup> <a name="loadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.loadBalancerConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a>

load_balancer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_config DevopsDeployStage#load_balancer_config}

---

##### `maxHistory`<sup>Optional</sup> <a name="maxHistory" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.maxHistory"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_history DevopsDeployStage#max_history}.

---

##### `maxMemoryInMbs`<sup>Optional</sup> <a name="maxMemoryInMbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.maxMemoryInMbs"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_memory_in_mbs DevopsDeployStage#max_memory_in_mbs}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}.

---

##### `okeBlueGreenDeployStageId`<sup>Optional</sup> <a name="okeBlueGreenDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.okeBlueGreenDeployStageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_blue_green_deploy_stage_id DevopsDeployStage#oke_blue_green_deploy_stage_id}.

---

##### `okeCanaryDeployStageId`<sup>Optional</sup> <a name="okeCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.okeCanaryDeployStageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_deploy_stage_id DevopsDeployStage#oke_canary_deploy_stage_id}.

---

##### `okeCanaryTrafficShiftDeployStageId`<sup>Optional</sup> <a name="okeCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.okeCanaryTrafficShiftDeployStageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_traffic_shift_deploy_stage_id DevopsDeployStage#oke_canary_traffic_shift_deploy_stage_id}.

---

##### `okeClusterDeployEnvironmentId`<sup>Optional</sup> <a name="okeClusterDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.okeClusterDeployEnvironmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_cluster_deploy_environment_id DevopsDeployStage#oke_cluster_deploy_environment_id}.

---

##### `productionLoadBalancerConfig`<sup>Optional</sup> <a name="productionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.productionLoadBalancerConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a>

production_load_balancer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#production_load_balancer_config DevopsDeployStage#production_load_balancer_config}

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.purpose"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#purpose DevopsDeployStage#purpose}.

---

##### `releaseName`<sup>Optional</sup> <a name="releaseName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.releaseName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#release_name DevopsDeployStage#release_name}.

---

##### `rollbackPolicy`<sup>Optional</sup> <a name="rollbackPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.rollbackPolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a>

rollback_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#rollback_policy DevopsDeployStage#rollback_policy}

---

##### `rolloutPolicy`<sup>Optional</sup> <a name="rolloutPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.rolloutPolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a>

rollout_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#rollout_policy DevopsDeployStage#rollout_policy}

---

##### `setString`<sup>Optional</sup> <a name="setString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.setString"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a>

set_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#set_string DevopsDeployStage#set_string}

---

##### `setValues`<sup>Optional</sup> <a name="setValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.setValues"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a>

set_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#set_values DevopsDeployStage#set_values}

---

##### `shouldCleanupOnFail`<sup>Optional</sup> <a name="shouldCleanupOnFail" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldCleanupOnFail"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_cleanup_on_fail DevopsDeployStage#should_cleanup_on_fail}.

---

##### `shouldNotWait`<sup>Optional</sup> <a name="shouldNotWait" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldNotWait"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_not_wait DevopsDeployStage#should_not_wait}.

---

##### `shouldResetValues`<sup>Optional</sup> <a name="shouldResetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldResetValues"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reset_values DevopsDeployStage#should_reset_values}.

---

##### `shouldReuseValues`<sup>Optional</sup> <a name="shouldReuseValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldReuseValues"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reuse_values DevopsDeployStage#should_reuse_values}.

---

##### `shouldSkipCrds`<sup>Optional</sup> <a name="shouldSkipCrds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldSkipCrds"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_crds DevopsDeployStage#should_skip_crds}.

---

##### `shouldSkipRenderSubchartNotes`<sup>Optional</sup> <a name="shouldSkipRenderSubchartNotes" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldSkipRenderSubchartNotes"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_render_subchart_notes DevopsDeployStage#should_skip_render_subchart_notes}.

---

##### `testLoadBalancerConfig`<sup>Optional</sup> <a name="testLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.testLoadBalancerConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a>

test_load_balancer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#test_load_balancer_config DevopsDeployStage#test_load_balancer_config}

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.timeoutInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#timeout_in_seconds DevopsDeployStage#timeout_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#timeouts DevopsDeployStage#timeouts}

---

##### `trafficShiftTarget`<sup>Optional</sup> <a name="trafficShiftTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.trafficShiftTarget"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#traffic_shift_target DevopsDeployStage#traffic_shift_target}.

---

##### `valuesArtifactIds`<sup>Optional</sup> <a name="valuesArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.valuesArtifactIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#values_artifact_ids DevopsDeployStage#values_artifact_ids}.

---

##### `waitCriteria`<sup>Optional</sup> <a name="waitCriteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.waitCriteria"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a>

wait_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_criteria DevopsDeployStage#wait_criteria}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putApprovalPolicy">putApprovalPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueBackendIps">putBlueBackendIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueGreenStrategy">putBlueGreenStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putCanaryStrategy">putCanaryStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putContainerConfig">putContainerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putDeployStagePredecessorCollection">putDeployStagePredecessorCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putFailurePolicy">putFailurePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putGreenBackendIps">putGreenBackendIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putLoadBalancerConfig">putLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putProductionLoadBalancerConfig">putProductionLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRollbackPolicy">putRollbackPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRolloutPolicy">putRolloutPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetString">putSetString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetValues">putSetValues</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTestLoadBalancerConfig">putTestLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putWaitCriteria">putWaitCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetApprovalPolicy">resetApprovalPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetAreHooksEnabled">resetAreHooksEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetBlueBackendIps">resetBlueBackendIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetBlueGreenStrategy">resetBlueGreenStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetCanaryStrategy">resetCanaryStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetCommandSpecDeployArtifactId">resetCommandSpecDeployArtifactId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupBlueGreenDeploymentDeployStageId">resetComputeInstanceGroupBlueGreenDeploymentDeployStageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupCanaryDeployStageId">resetComputeInstanceGroupCanaryDeployStageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupCanaryTrafficShiftDeployStageId">resetComputeInstanceGroupCanaryTrafficShiftDeployStageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupDeployEnvironmentId">resetComputeInstanceGroupDeployEnvironmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetContainerConfig">resetContainerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployArtifactId">resetDeployArtifactId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployArtifactIds">resetDeployArtifactIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployEnvironmentIdA">resetDeployEnvironmentIdA</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployEnvironmentIdB">resetDeployEnvironmentIdB</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeploymentSpecDeployArtifactId">resetDeploymentSpecDeployArtifactId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDockerImageDeployArtifactId">resetDockerImageDeployArtifactId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFailurePolicy">resetFailurePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFunctionDeployEnvironmentId">resetFunctionDeployEnvironmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFunctionTimeoutInSeconds">resetFunctionTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetGreenBackendIps">resetGreenBackendIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetHelmChartDeployArtifactId">resetHelmChartDeployArtifactId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetHelmCommandArtifactIds">resetHelmCommandArtifactIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsAsync">resetIsAsync</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsDebugEnabled">resetIsDebugEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsForceEnabled">resetIsForceEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsUninstallOnStageDelete">resetIsUninstallOnStageDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsValidationEnabled">resetIsValidationEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetKubernetesManifestDeployArtifactIds">resetKubernetesManifestDeployArtifactIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetLoadBalancerConfig">resetLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetMaxHistory">resetMaxHistory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetMaxMemoryInMbs">resetMaxMemoryInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeBlueGreenDeployStageId">resetOkeBlueGreenDeployStageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeCanaryDeployStageId">resetOkeCanaryDeployStageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeCanaryTrafficShiftDeployStageId">resetOkeCanaryTrafficShiftDeployStageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeClusterDeployEnvironmentId">resetOkeClusterDeployEnvironmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetProductionLoadBalancerConfig">resetProductionLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetPurpose">resetPurpose</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetReleaseName">resetReleaseName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetRollbackPolicy">resetRollbackPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetRolloutPolicy">resetRolloutPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetSetString">resetSetString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetSetValues">resetSetValues</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldCleanupOnFail">resetShouldCleanupOnFail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldNotWait">resetShouldNotWait</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldResetValues">resetShouldResetValues</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldReuseValues">resetShouldReuseValues</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldSkipCrds">resetShouldSkipCrds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldSkipRenderSubchartNotes">resetShouldSkipRenderSubchartNotes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTestLoadBalancerConfig">resetTestLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTrafficShiftTarget">resetTrafficShiftTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetValuesArtifactIds">resetValuesArtifactIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetWaitCriteria">resetWaitCriteria</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApprovalPolicy` <a name="putApprovalPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putApprovalPolicy"></a>

```java
public void putApprovalPolicy(DevopsDeployStageApprovalPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putApprovalPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a>

---

##### `putBlueBackendIps` <a name="putBlueBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueBackendIps"></a>

```java
public void putBlueBackendIps(DevopsDeployStageBlueBackendIps value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueBackendIps.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a>

---

##### `putBlueGreenStrategy` <a name="putBlueGreenStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueGreenStrategy"></a>

```java
public void putBlueGreenStrategy(DevopsDeployStageBlueGreenStrategy value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueGreenStrategy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a>

---

##### `putCanaryStrategy` <a name="putCanaryStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putCanaryStrategy"></a>

```java
public void putCanaryStrategy(DevopsDeployStageCanaryStrategy value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putCanaryStrategy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a>

---

##### `putContainerConfig` <a name="putContainerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putContainerConfig"></a>

```java
public void putContainerConfig(DevopsDeployStageContainerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putContainerConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a>

---

##### `putDeployStagePredecessorCollection` <a name="putDeployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putDeployStagePredecessorCollection"></a>

```java
public void putDeployStagePredecessorCollection(DevopsDeployStageDeployStagePredecessorCollection value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putDeployStagePredecessorCollection.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a>

---

##### `putFailurePolicy` <a name="putFailurePolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putFailurePolicy"></a>

```java
public void putFailurePolicy(DevopsDeployStageFailurePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putFailurePolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a>

---

##### `putGreenBackendIps` <a name="putGreenBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putGreenBackendIps"></a>

```java
public void putGreenBackendIps(DevopsDeployStageGreenBackendIps value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putGreenBackendIps.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a>

---

##### `putLoadBalancerConfig` <a name="putLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putLoadBalancerConfig"></a>

```java
public void putLoadBalancerConfig(DevopsDeployStageLoadBalancerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putLoadBalancerConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a>

---

##### `putProductionLoadBalancerConfig` <a name="putProductionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putProductionLoadBalancerConfig"></a>

```java
public void putProductionLoadBalancerConfig(DevopsDeployStageProductionLoadBalancerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putProductionLoadBalancerConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a>

---

##### `putRollbackPolicy` <a name="putRollbackPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRollbackPolicy"></a>

```java
public void putRollbackPolicy(DevopsDeployStageRollbackPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRollbackPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a>

---

##### `putRolloutPolicy` <a name="putRolloutPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRolloutPolicy"></a>

```java
public void putRolloutPolicy(DevopsDeployStageRolloutPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRolloutPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a>

---

##### `putSetString` <a name="putSetString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetString"></a>

```java
public void putSetString(DevopsDeployStageSetString value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetString.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a>

---

##### `putSetValues` <a name="putSetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetValues"></a>

```java
public void putSetValues(DevopsDeployStageSetValues value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetValues.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a>

---

##### `putTestLoadBalancerConfig` <a name="putTestLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTestLoadBalancerConfig"></a>

```java
public void putTestLoadBalancerConfig(DevopsDeployStageTestLoadBalancerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTestLoadBalancerConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTimeouts"></a>

```java
public void putTimeouts(DevopsDeployStageTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a>

---

##### `putWaitCriteria` <a name="putWaitCriteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putWaitCriteria"></a>

```java
public void putWaitCriteria(DevopsDeployStageWaitCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putWaitCriteria.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a>

---

##### `resetApprovalPolicy` <a name="resetApprovalPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetApprovalPolicy"></a>

```java
public void resetApprovalPolicy()
```

##### `resetAreHooksEnabled` <a name="resetAreHooksEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetAreHooksEnabled"></a>

```java
public void resetAreHooksEnabled()
```

##### `resetBlueBackendIps` <a name="resetBlueBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetBlueBackendIps"></a>

```java
public void resetBlueBackendIps()
```

##### `resetBlueGreenStrategy` <a name="resetBlueGreenStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetBlueGreenStrategy"></a>

```java
public void resetBlueGreenStrategy()
```

##### `resetCanaryStrategy` <a name="resetCanaryStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetCanaryStrategy"></a>

```java
public void resetCanaryStrategy()
```

##### `resetCommandSpecDeployArtifactId` <a name="resetCommandSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetCommandSpecDeployArtifactId"></a>

```java
public void resetCommandSpecDeployArtifactId()
```

##### `resetComputeInstanceGroupBlueGreenDeploymentDeployStageId` <a name="resetComputeInstanceGroupBlueGreenDeploymentDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupBlueGreenDeploymentDeployStageId"></a>

```java
public void resetComputeInstanceGroupBlueGreenDeploymentDeployStageId()
```

##### `resetComputeInstanceGroupCanaryDeployStageId` <a name="resetComputeInstanceGroupCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupCanaryDeployStageId"></a>

```java
public void resetComputeInstanceGroupCanaryDeployStageId()
```

##### `resetComputeInstanceGroupCanaryTrafficShiftDeployStageId` <a name="resetComputeInstanceGroupCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupCanaryTrafficShiftDeployStageId"></a>

```java
public void resetComputeInstanceGroupCanaryTrafficShiftDeployStageId()
```

##### `resetComputeInstanceGroupDeployEnvironmentId` <a name="resetComputeInstanceGroupDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupDeployEnvironmentId"></a>

```java
public void resetComputeInstanceGroupDeployEnvironmentId()
```

##### `resetConfig` <a name="resetConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetContainerConfig` <a name="resetContainerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetContainerConfig"></a>

```java
public void resetContainerConfig()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDeployArtifactId` <a name="resetDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployArtifactId"></a>

```java
public void resetDeployArtifactId()
```

##### `resetDeployArtifactIds` <a name="resetDeployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployArtifactIds"></a>

```java
public void resetDeployArtifactIds()
```

##### `resetDeployEnvironmentIdA` <a name="resetDeployEnvironmentIdA" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployEnvironmentIdA"></a>

```java
public void resetDeployEnvironmentIdA()
```

##### `resetDeployEnvironmentIdB` <a name="resetDeployEnvironmentIdB" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployEnvironmentIdB"></a>

```java
public void resetDeployEnvironmentIdB()
```

##### `resetDeploymentSpecDeployArtifactId` <a name="resetDeploymentSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeploymentSpecDeployArtifactId"></a>

```java
public void resetDeploymentSpecDeployArtifactId()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDockerImageDeployArtifactId` <a name="resetDockerImageDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDockerImageDeployArtifactId"></a>

```java
public void resetDockerImageDeployArtifactId()
```

##### `resetFailurePolicy` <a name="resetFailurePolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFailurePolicy"></a>

```java
public void resetFailurePolicy()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetFunctionDeployEnvironmentId` <a name="resetFunctionDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFunctionDeployEnvironmentId"></a>

```java
public void resetFunctionDeployEnvironmentId()
```

##### `resetFunctionTimeoutInSeconds` <a name="resetFunctionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFunctionTimeoutInSeconds"></a>

```java
public void resetFunctionTimeoutInSeconds()
```

##### `resetGreenBackendIps` <a name="resetGreenBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetGreenBackendIps"></a>

```java
public void resetGreenBackendIps()
```

##### `resetHelmChartDeployArtifactId` <a name="resetHelmChartDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetHelmChartDeployArtifactId"></a>

```java
public void resetHelmChartDeployArtifactId()
```

##### `resetHelmCommandArtifactIds` <a name="resetHelmCommandArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetHelmCommandArtifactIds"></a>

```java
public void resetHelmCommandArtifactIds()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetId"></a>

```java
public void resetId()
```

##### `resetIsAsync` <a name="resetIsAsync" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsAsync"></a>

```java
public void resetIsAsync()
```

##### `resetIsDebugEnabled` <a name="resetIsDebugEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsDebugEnabled"></a>

```java
public void resetIsDebugEnabled()
```

##### `resetIsForceEnabled` <a name="resetIsForceEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsForceEnabled"></a>

```java
public void resetIsForceEnabled()
```

##### `resetIsUninstallOnStageDelete` <a name="resetIsUninstallOnStageDelete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsUninstallOnStageDelete"></a>

```java
public void resetIsUninstallOnStageDelete()
```

##### `resetIsValidationEnabled` <a name="resetIsValidationEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsValidationEnabled"></a>

```java
public void resetIsValidationEnabled()
```

##### `resetKubernetesManifestDeployArtifactIds` <a name="resetKubernetesManifestDeployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetKubernetesManifestDeployArtifactIds"></a>

```java
public void resetKubernetesManifestDeployArtifactIds()
```

##### `resetLoadBalancerConfig` <a name="resetLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetLoadBalancerConfig"></a>

```java
public void resetLoadBalancerConfig()
```

##### `resetMaxHistory` <a name="resetMaxHistory" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetMaxHistory"></a>

```java
public void resetMaxHistory()
```

##### `resetMaxMemoryInMbs` <a name="resetMaxMemoryInMbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetMaxMemoryInMbs"></a>

```java
public void resetMaxMemoryInMbs()
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOkeBlueGreenDeployStageId` <a name="resetOkeBlueGreenDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeBlueGreenDeployStageId"></a>

```java
public void resetOkeBlueGreenDeployStageId()
```

##### `resetOkeCanaryDeployStageId` <a name="resetOkeCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeCanaryDeployStageId"></a>

```java
public void resetOkeCanaryDeployStageId()
```

##### `resetOkeCanaryTrafficShiftDeployStageId` <a name="resetOkeCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeCanaryTrafficShiftDeployStageId"></a>

```java
public void resetOkeCanaryTrafficShiftDeployStageId()
```

##### `resetOkeClusterDeployEnvironmentId` <a name="resetOkeClusterDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeClusterDeployEnvironmentId"></a>

```java
public void resetOkeClusterDeployEnvironmentId()
```

##### `resetProductionLoadBalancerConfig` <a name="resetProductionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetProductionLoadBalancerConfig"></a>

```java
public void resetProductionLoadBalancerConfig()
```

##### `resetPurpose` <a name="resetPurpose" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetPurpose"></a>

```java
public void resetPurpose()
```

##### `resetReleaseName` <a name="resetReleaseName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetReleaseName"></a>

```java
public void resetReleaseName()
```

##### `resetRollbackPolicy` <a name="resetRollbackPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetRollbackPolicy"></a>

```java
public void resetRollbackPolicy()
```

##### `resetRolloutPolicy` <a name="resetRolloutPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetRolloutPolicy"></a>

```java
public void resetRolloutPolicy()
```

##### `resetSetString` <a name="resetSetString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetSetString"></a>

```java
public void resetSetString()
```

##### `resetSetValues` <a name="resetSetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetSetValues"></a>

```java
public void resetSetValues()
```

##### `resetShouldCleanupOnFail` <a name="resetShouldCleanupOnFail" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldCleanupOnFail"></a>

```java
public void resetShouldCleanupOnFail()
```

##### `resetShouldNotWait` <a name="resetShouldNotWait" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldNotWait"></a>

```java
public void resetShouldNotWait()
```

##### `resetShouldResetValues` <a name="resetShouldResetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldResetValues"></a>

```java
public void resetShouldResetValues()
```

##### `resetShouldReuseValues` <a name="resetShouldReuseValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldReuseValues"></a>

```java
public void resetShouldReuseValues()
```

##### `resetShouldSkipCrds` <a name="resetShouldSkipCrds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldSkipCrds"></a>

```java
public void resetShouldSkipCrds()
```

##### `resetShouldSkipRenderSubchartNotes` <a name="resetShouldSkipRenderSubchartNotes" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldSkipRenderSubchartNotes"></a>

```java
public void resetShouldSkipRenderSubchartNotes()
```

##### `resetTestLoadBalancerConfig` <a name="resetTestLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTestLoadBalancerConfig"></a>

```java
public void resetTestLoadBalancerConfig()
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTimeoutInSeconds"></a>

```java
public void resetTimeoutInSeconds()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTrafficShiftTarget` <a name="resetTrafficShiftTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTrafficShiftTarget"></a>

```java
public void resetTrafficShiftTarget()
```

##### `resetValuesArtifactIds` <a name="resetValuesArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetValuesArtifactIds"></a>

```java
public void resetValuesArtifactIds()
```

##### `resetWaitCriteria` <a name="resetWaitCriteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetWaitCriteria"></a>

```java
public void resetWaitCriteria()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsDeployStage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStage;

DevopsDeployStage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStage;

DevopsDeployStage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStage;

DevopsDeployStage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStage;

DevopsDeployStage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DevopsDeployStage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DevopsDeployStage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DevopsDeployStage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DevopsDeployStage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DevopsDeployStage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.approvalPolicy">approvalPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference">DevopsDeployStageApprovalPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueBackendIps">blueBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference">DevopsDeployStageBlueBackendIpsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueGreenStrategy">blueGreenStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference">DevopsDeployStageBlueGreenStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.canaryStrategy">canaryStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference">DevopsDeployStageCanaryStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.containerConfig">containerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference">DevopsDeployStageContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStagePredecessorCollection">deployStagePredecessorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference">DevopsDeployStageDeployStagePredecessorCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.failurePolicy">failurePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference">DevopsDeployStageFailurePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.greenBackendIps">greenBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference">DevopsDeployStageGreenBackendIpsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.loadBalancerConfig">loadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference">DevopsDeployStageLoadBalancerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.productionLoadBalancerConfig">productionLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference">DevopsDeployStageProductionLoadBalancerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rollbackPolicy">rollbackPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference">DevopsDeployStageRollbackPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rolloutPolicy">rolloutPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference">DevopsDeployStageRolloutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setString">setString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference">DevopsDeployStageSetStringOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setValues">setValues</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference">DevopsDeployStageSetValuesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.testLoadBalancerConfig">testLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference">DevopsDeployStageTestLoadBalancerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference">DevopsDeployStageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.waitCriteria">waitCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference">DevopsDeployStageWaitCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.approvalPolicyInput">approvalPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.areHooksEnabledInput">areHooksEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueBackendIpsInput">blueBackendIpsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueGreenStrategyInput">blueGreenStrategyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.canaryStrategyInput">canaryStrategyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.commandSpecDeployArtifactIdInput">commandSpecDeployArtifactIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupBlueGreenDeploymentDeployStageIdInput">computeInstanceGroupBlueGreenDeploymentDeployStageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryDeployStageIdInput">computeInstanceGroupCanaryDeployStageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryTrafficShiftDeployStageIdInput">computeInstanceGroupCanaryTrafficShiftDeployStageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupDeployEnvironmentIdInput">computeInstanceGroupDeployEnvironmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.configInput">configInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.containerConfigInput">containerConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIdInput">deployArtifactIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIdsInput">deployArtifactIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdAInput">deployEnvironmentIdAInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdBInput">deployEnvironmentIdBInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deploymentSpecDeployArtifactIdInput">deploymentSpecDeployArtifactIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployPipelineIdInput">deployPipelineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStagePredecessorCollectionInput">deployStagePredecessorCollectionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStageTypeInput">deployStageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dockerImageDeployArtifactIdInput">dockerImageDeployArtifactIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.failurePolicyInput">failurePolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionDeployEnvironmentIdInput">functionDeployEnvironmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionTimeoutInSecondsInput">functionTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.greenBackendIpsInput">greenBackendIpsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmChartDeployArtifactIdInput">helmChartDeployArtifactIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmCommandArtifactIdsInput">helmCommandArtifactIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isAsyncInput">isAsyncInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isDebugEnabledInput">isDebugEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isForceEnabledInput">isForceEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isUninstallOnStageDeleteInput">isUninstallOnStageDeleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isValidationEnabledInput">isValidationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.kubernetesManifestDeployArtifactIdsInput">kubernetesManifestDeployArtifactIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.loadBalancerConfigInput">loadBalancerConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxHistoryInput">maxHistoryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxMemoryInMbsInput">maxMemoryInMbsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeBlueGreenDeployStageIdInput">okeBlueGreenDeployStageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryDeployStageIdInput">okeCanaryDeployStageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryTrafficShiftDeployStageIdInput">okeCanaryTrafficShiftDeployStageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeClusterDeployEnvironmentIdInput">okeClusterDeployEnvironmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.productionLoadBalancerConfigInput">productionLoadBalancerConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.purposeInput">purposeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.releaseNameInput">releaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rollbackPolicyInput">rollbackPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rolloutPolicyInput">rolloutPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setStringInput">setStringInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setValuesInput">setValuesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldCleanupOnFailInput">shouldCleanupOnFailInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldNotWaitInput">shouldNotWaitInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldResetValuesInput">shouldResetValuesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldReuseValuesInput">shouldReuseValuesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipCrdsInput">shouldSkipCrdsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipRenderSubchartNotesInput">shouldSkipRenderSubchartNotesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.testLoadBalancerConfigInput">testLoadBalancerConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.trafficShiftTargetInput">trafficShiftTargetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.valuesArtifactIdsInput">valuesArtifactIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.waitCriteriaInput">waitCriteriaInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.areHooksEnabled">areHooksEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.commandSpecDeployArtifactId">commandSpecDeployArtifactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupBlueGreenDeploymentDeployStageId">computeInstanceGroupBlueGreenDeploymentDeployStageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryDeployStageId">computeInstanceGroupCanaryDeployStageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryTrafficShiftDeployStageId">computeInstanceGroupCanaryTrafficShiftDeployStageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupDeployEnvironmentId">computeInstanceGroupDeployEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.config">config</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactId">deployArtifactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIds">deployArtifactIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdA">deployEnvironmentIdA</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdB">deployEnvironmentIdB</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deploymentSpecDeployArtifactId">deploymentSpecDeployArtifactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployPipelineId">deployPipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStageType">deployStageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dockerImageDeployArtifactId">dockerImageDeployArtifactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionDeployEnvironmentId">functionDeployEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionTimeoutInSeconds">functionTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmChartDeployArtifactId">helmChartDeployArtifactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmCommandArtifactIds">helmCommandArtifactIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isAsync">isAsync</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isDebugEnabled">isDebugEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isForceEnabled">isForceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isUninstallOnStageDelete">isUninstallOnStageDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isValidationEnabled">isValidationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.kubernetesManifestDeployArtifactIds">kubernetesManifestDeployArtifactIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxHistory">maxHistory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxMemoryInMbs">maxMemoryInMbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeBlueGreenDeployStageId">okeBlueGreenDeployStageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryDeployStageId">okeCanaryDeployStageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryTrafficShiftDeployStageId">okeCanaryTrafficShiftDeployStageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeClusterDeployEnvironmentId">okeClusterDeployEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.purpose">purpose</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.releaseName">releaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldCleanupOnFail">shouldCleanupOnFail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldNotWait">shouldNotWait</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldResetValues">shouldResetValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldReuseValues">shouldReuseValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipCrds">shouldSkipCrds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipRenderSubchartNotes">shouldSkipRenderSubchartNotes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.trafficShiftTarget">trafficShiftTarget</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.valuesArtifactIds">valuesArtifactIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `approvalPolicy`<sup>Required</sup> <a name="approvalPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.approvalPolicy"></a>

```java
public DevopsDeployStageApprovalPolicyOutputReference getApprovalPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference">DevopsDeployStageApprovalPolicyOutputReference</a>

---

##### `blueBackendIps`<sup>Required</sup> <a name="blueBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueBackendIps"></a>

```java
public DevopsDeployStageBlueBackendIpsOutputReference getBlueBackendIps();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference">DevopsDeployStageBlueBackendIpsOutputReference</a>

---

##### `blueGreenStrategy`<sup>Required</sup> <a name="blueGreenStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueGreenStrategy"></a>

```java
public DevopsDeployStageBlueGreenStrategyOutputReference getBlueGreenStrategy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference">DevopsDeployStageBlueGreenStrategyOutputReference</a>

---

##### `canaryStrategy`<sup>Required</sup> <a name="canaryStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.canaryStrategy"></a>

```java
public DevopsDeployStageCanaryStrategyOutputReference getCanaryStrategy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference">DevopsDeployStageCanaryStrategyOutputReference</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `containerConfig`<sup>Required</sup> <a name="containerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.containerConfig"></a>

```java
public DevopsDeployStageContainerConfigOutputReference getContainerConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference">DevopsDeployStageContainerConfigOutputReference</a>

---

##### `deployStagePredecessorCollection`<sup>Required</sup> <a name="deployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStagePredecessorCollection"></a>

```java
public DevopsDeployStageDeployStagePredecessorCollectionOutputReference getDeployStagePredecessorCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference">DevopsDeployStageDeployStagePredecessorCollectionOutputReference</a>

---

##### `failurePolicy`<sup>Required</sup> <a name="failurePolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.failurePolicy"></a>

```java
public DevopsDeployStageFailurePolicyOutputReference getFailurePolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference">DevopsDeployStageFailurePolicyOutputReference</a>

---

##### `greenBackendIps`<sup>Required</sup> <a name="greenBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.greenBackendIps"></a>

```java
public DevopsDeployStageGreenBackendIpsOutputReference getGreenBackendIps();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference">DevopsDeployStageGreenBackendIpsOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `loadBalancerConfig`<sup>Required</sup> <a name="loadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.loadBalancerConfig"></a>

```java
public DevopsDeployStageLoadBalancerConfigOutputReference getLoadBalancerConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference">DevopsDeployStageLoadBalancerConfigOutputReference</a>

---

##### `productionLoadBalancerConfig`<sup>Required</sup> <a name="productionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.productionLoadBalancerConfig"></a>

```java
public DevopsDeployStageProductionLoadBalancerConfigOutputReference getProductionLoadBalancerConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference">DevopsDeployStageProductionLoadBalancerConfigOutputReference</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `rollbackPolicy`<sup>Required</sup> <a name="rollbackPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rollbackPolicy"></a>

```java
public DevopsDeployStageRollbackPolicyOutputReference getRollbackPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference">DevopsDeployStageRollbackPolicyOutputReference</a>

---

##### `rolloutPolicy`<sup>Required</sup> <a name="rolloutPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rolloutPolicy"></a>

```java
public DevopsDeployStageRolloutPolicyOutputReference getRolloutPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference">DevopsDeployStageRolloutPolicyOutputReference</a>

---

##### `setString`<sup>Required</sup> <a name="setString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setString"></a>

```java
public DevopsDeployStageSetStringOutputReference getSetString();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference">DevopsDeployStageSetStringOutputReference</a>

---

##### `setValues`<sup>Required</sup> <a name="setValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setValues"></a>

```java
public DevopsDeployStageSetValuesOutputReference getSetValues();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference">DevopsDeployStageSetValuesOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `testLoadBalancerConfig`<sup>Required</sup> <a name="testLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.testLoadBalancerConfig"></a>

```java
public DevopsDeployStageTestLoadBalancerConfigOutputReference getTestLoadBalancerConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference">DevopsDeployStageTestLoadBalancerConfigOutputReference</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeouts"></a>

```java
public DevopsDeployStageTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference">DevopsDeployStageTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `waitCriteria`<sup>Required</sup> <a name="waitCriteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.waitCriteria"></a>

```java
public DevopsDeployStageWaitCriteriaOutputReference getWaitCriteria();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference">DevopsDeployStageWaitCriteriaOutputReference</a>

---

##### `approvalPolicyInput`<sup>Optional</sup> <a name="approvalPolicyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.approvalPolicyInput"></a>

```java
public DevopsDeployStageApprovalPolicy getApprovalPolicyInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a>

---

##### `areHooksEnabledInput`<sup>Optional</sup> <a name="areHooksEnabledInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.areHooksEnabledInput"></a>

```java
public java.lang.Object getAreHooksEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blueBackendIpsInput`<sup>Optional</sup> <a name="blueBackendIpsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueBackendIpsInput"></a>

```java
public DevopsDeployStageBlueBackendIps getBlueBackendIpsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a>

---

##### `blueGreenStrategyInput`<sup>Optional</sup> <a name="blueGreenStrategyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueGreenStrategyInput"></a>

```java
public DevopsDeployStageBlueGreenStrategy getBlueGreenStrategyInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a>

---

##### `canaryStrategyInput`<sup>Optional</sup> <a name="canaryStrategyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.canaryStrategyInput"></a>

```java
public DevopsDeployStageCanaryStrategy getCanaryStrategyInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a>

---

##### `commandSpecDeployArtifactIdInput`<sup>Optional</sup> <a name="commandSpecDeployArtifactIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.commandSpecDeployArtifactIdInput"></a>

```java
public java.lang.String getCommandSpecDeployArtifactIdInput();
```

- *Type:* java.lang.String

---

##### `computeInstanceGroupBlueGreenDeploymentDeployStageIdInput`<sup>Optional</sup> <a name="computeInstanceGroupBlueGreenDeploymentDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupBlueGreenDeploymentDeployStageIdInput"></a>

```java
public java.lang.String getComputeInstanceGroupBlueGreenDeploymentDeployStageIdInput();
```

- *Type:* java.lang.String

---

##### `computeInstanceGroupCanaryDeployStageIdInput`<sup>Optional</sup> <a name="computeInstanceGroupCanaryDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryDeployStageIdInput"></a>

```java
public java.lang.String getComputeInstanceGroupCanaryDeployStageIdInput();
```

- *Type:* java.lang.String

---

##### `computeInstanceGroupCanaryTrafficShiftDeployStageIdInput`<sup>Optional</sup> <a name="computeInstanceGroupCanaryTrafficShiftDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryTrafficShiftDeployStageIdInput"></a>

```java
public java.lang.String getComputeInstanceGroupCanaryTrafficShiftDeployStageIdInput();
```

- *Type:* java.lang.String

---

##### `computeInstanceGroupDeployEnvironmentIdInput`<sup>Optional</sup> <a name="computeInstanceGroupDeployEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupDeployEnvironmentIdInput"></a>

```java
public java.lang.String getComputeInstanceGroupDeployEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.configInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `containerConfigInput`<sup>Optional</sup> <a name="containerConfigInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.containerConfigInput"></a>

```java
public DevopsDeployStageContainerConfig getContainerConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deployArtifactIdInput`<sup>Optional</sup> <a name="deployArtifactIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIdInput"></a>

```java
public java.lang.String getDeployArtifactIdInput();
```

- *Type:* java.lang.String

---

##### `deployArtifactIdsInput`<sup>Optional</sup> <a name="deployArtifactIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIdsInput"></a>

```java
public java.util.List<java.lang.String> getDeployArtifactIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deployEnvironmentIdAInput`<sup>Optional</sup> <a name="deployEnvironmentIdAInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdAInput"></a>

```java
public java.lang.String getDeployEnvironmentIdAInput();
```

- *Type:* java.lang.String

---

##### `deployEnvironmentIdBInput`<sup>Optional</sup> <a name="deployEnvironmentIdBInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdBInput"></a>

```java
public java.lang.String getDeployEnvironmentIdBInput();
```

- *Type:* java.lang.String

---

##### `deploymentSpecDeployArtifactIdInput`<sup>Optional</sup> <a name="deploymentSpecDeployArtifactIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deploymentSpecDeployArtifactIdInput"></a>

```java
public java.lang.String getDeploymentSpecDeployArtifactIdInput();
```

- *Type:* java.lang.String

---

##### `deployPipelineIdInput`<sup>Optional</sup> <a name="deployPipelineIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployPipelineIdInput"></a>

```java
public java.lang.String getDeployPipelineIdInput();
```

- *Type:* java.lang.String

---

##### `deployStagePredecessorCollectionInput`<sup>Optional</sup> <a name="deployStagePredecessorCollectionInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStagePredecessorCollectionInput"></a>

```java
public DevopsDeployStageDeployStagePredecessorCollection getDeployStagePredecessorCollectionInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a>

---

##### `deployStageTypeInput`<sup>Optional</sup> <a name="deployStageTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStageTypeInput"></a>

```java
public java.lang.String getDeployStageTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `dockerImageDeployArtifactIdInput`<sup>Optional</sup> <a name="dockerImageDeployArtifactIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dockerImageDeployArtifactIdInput"></a>

```java
public java.lang.String getDockerImageDeployArtifactIdInput();
```

- *Type:* java.lang.String

---

##### `failurePolicyInput`<sup>Optional</sup> <a name="failurePolicyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.failurePolicyInput"></a>

```java
public DevopsDeployStageFailurePolicy getFailurePolicyInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `functionDeployEnvironmentIdInput`<sup>Optional</sup> <a name="functionDeployEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionDeployEnvironmentIdInput"></a>

```java
public java.lang.String getFunctionDeployEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `functionTimeoutInSecondsInput`<sup>Optional</sup> <a name="functionTimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionTimeoutInSecondsInput"></a>

```java
public java.lang.Number getFunctionTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `greenBackendIpsInput`<sup>Optional</sup> <a name="greenBackendIpsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.greenBackendIpsInput"></a>

```java
public DevopsDeployStageGreenBackendIps getGreenBackendIpsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a>

---

##### `helmChartDeployArtifactIdInput`<sup>Optional</sup> <a name="helmChartDeployArtifactIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmChartDeployArtifactIdInput"></a>

```java
public java.lang.String getHelmChartDeployArtifactIdInput();
```

- *Type:* java.lang.String

---

##### `helmCommandArtifactIdsInput`<sup>Optional</sup> <a name="helmCommandArtifactIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmCommandArtifactIdsInput"></a>

```java
public java.util.List<java.lang.String> getHelmCommandArtifactIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isAsyncInput`<sup>Optional</sup> <a name="isAsyncInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isAsyncInput"></a>

```java
public java.lang.Object getIsAsyncInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDebugEnabledInput`<sup>Optional</sup> <a name="isDebugEnabledInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isDebugEnabledInput"></a>

```java
public java.lang.Object getIsDebugEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isForceEnabledInput`<sup>Optional</sup> <a name="isForceEnabledInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isForceEnabledInput"></a>

```java
public java.lang.Object getIsForceEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isUninstallOnStageDeleteInput`<sup>Optional</sup> <a name="isUninstallOnStageDeleteInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isUninstallOnStageDeleteInput"></a>

```java
public java.lang.Object getIsUninstallOnStageDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isValidationEnabledInput`<sup>Optional</sup> <a name="isValidationEnabledInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isValidationEnabledInput"></a>

```java
public java.lang.Object getIsValidationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kubernetesManifestDeployArtifactIdsInput`<sup>Optional</sup> <a name="kubernetesManifestDeployArtifactIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.kubernetesManifestDeployArtifactIdsInput"></a>

```java
public java.util.List<java.lang.String> getKubernetesManifestDeployArtifactIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loadBalancerConfigInput`<sup>Optional</sup> <a name="loadBalancerConfigInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.loadBalancerConfigInput"></a>

```java
public DevopsDeployStageLoadBalancerConfig getLoadBalancerConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a>

---

##### `maxHistoryInput`<sup>Optional</sup> <a name="maxHistoryInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxHistoryInput"></a>

```java
public java.lang.Number getMaxHistoryInput();
```

- *Type:* java.lang.Number

---

##### `maxMemoryInMbsInput`<sup>Optional</sup> <a name="maxMemoryInMbsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxMemoryInMbsInput"></a>

```java
public java.lang.String getMaxMemoryInMbsInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `okeBlueGreenDeployStageIdInput`<sup>Optional</sup> <a name="okeBlueGreenDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeBlueGreenDeployStageIdInput"></a>

```java
public java.lang.String getOkeBlueGreenDeployStageIdInput();
```

- *Type:* java.lang.String

---

##### `okeCanaryDeployStageIdInput`<sup>Optional</sup> <a name="okeCanaryDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryDeployStageIdInput"></a>

```java
public java.lang.String getOkeCanaryDeployStageIdInput();
```

- *Type:* java.lang.String

---

##### `okeCanaryTrafficShiftDeployStageIdInput`<sup>Optional</sup> <a name="okeCanaryTrafficShiftDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryTrafficShiftDeployStageIdInput"></a>

```java
public java.lang.String getOkeCanaryTrafficShiftDeployStageIdInput();
```

- *Type:* java.lang.String

---

##### `okeClusterDeployEnvironmentIdInput`<sup>Optional</sup> <a name="okeClusterDeployEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeClusterDeployEnvironmentIdInput"></a>

```java
public java.lang.String getOkeClusterDeployEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `productionLoadBalancerConfigInput`<sup>Optional</sup> <a name="productionLoadBalancerConfigInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.productionLoadBalancerConfigInput"></a>

```java
public DevopsDeployStageProductionLoadBalancerConfig getProductionLoadBalancerConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a>

---

##### `purposeInput`<sup>Optional</sup> <a name="purposeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.purposeInput"></a>

```java
public java.lang.String getPurposeInput();
```

- *Type:* java.lang.String

---

##### `releaseNameInput`<sup>Optional</sup> <a name="releaseNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.releaseNameInput"></a>

```java
public java.lang.String getReleaseNameInput();
```

- *Type:* java.lang.String

---

##### `rollbackPolicyInput`<sup>Optional</sup> <a name="rollbackPolicyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rollbackPolicyInput"></a>

```java
public DevopsDeployStageRollbackPolicy getRollbackPolicyInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a>

---

##### `rolloutPolicyInput`<sup>Optional</sup> <a name="rolloutPolicyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rolloutPolicyInput"></a>

```java
public DevopsDeployStageRolloutPolicy getRolloutPolicyInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a>

---

##### `setStringInput`<sup>Optional</sup> <a name="setStringInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setStringInput"></a>

```java
public DevopsDeployStageSetString getSetStringInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a>

---

##### `setValuesInput`<sup>Optional</sup> <a name="setValuesInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setValuesInput"></a>

```java
public DevopsDeployStageSetValues getSetValuesInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a>

---

##### `shouldCleanupOnFailInput`<sup>Optional</sup> <a name="shouldCleanupOnFailInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldCleanupOnFailInput"></a>

```java
public java.lang.Object getShouldCleanupOnFailInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shouldNotWaitInput`<sup>Optional</sup> <a name="shouldNotWaitInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldNotWaitInput"></a>

```java
public java.lang.Object getShouldNotWaitInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shouldResetValuesInput`<sup>Optional</sup> <a name="shouldResetValuesInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldResetValuesInput"></a>

```java
public java.lang.Object getShouldResetValuesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shouldReuseValuesInput`<sup>Optional</sup> <a name="shouldReuseValuesInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldReuseValuesInput"></a>

```java
public java.lang.Object getShouldReuseValuesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shouldSkipCrdsInput`<sup>Optional</sup> <a name="shouldSkipCrdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipCrdsInput"></a>

```java
public java.lang.Object getShouldSkipCrdsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shouldSkipRenderSubchartNotesInput`<sup>Optional</sup> <a name="shouldSkipRenderSubchartNotesInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipRenderSubchartNotesInput"></a>

```java
public java.lang.Object getShouldSkipRenderSubchartNotesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `testLoadBalancerConfigInput`<sup>Optional</sup> <a name="testLoadBalancerConfigInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.testLoadBalancerConfigInput"></a>

```java
public DevopsDeployStageTestLoadBalancerConfig getTestLoadBalancerConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a>

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutInSecondsInput"></a>

```java
public java.lang.Number getTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a>

---

##### `trafficShiftTargetInput`<sup>Optional</sup> <a name="trafficShiftTargetInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.trafficShiftTargetInput"></a>

```java
public java.lang.String getTrafficShiftTargetInput();
```

- *Type:* java.lang.String

---

##### `valuesArtifactIdsInput`<sup>Optional</sup> <a name="valuesArtifactIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.valuesArtifactIdsInput"></a>

```java
public java.util.List<java.lang.String> getValuesArtifactIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `waitCriteriaInput`<sup>Optional</sup> <a name="waitCriteriaInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.waitCriteriaInput"></a>

```java
public DevopsDeployStageWaitCriteria getWaitCriteriaInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a>

---

##### `areHooksEnabled`<sup>Required</sup> <a name="areHooksEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.areHooksEnabled"></a>

```java
public java.lang.Object getAreHooksEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commandSpecDeployArtifactId`<sup>Required</sup> <a name="commandSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.commandSpecDeployArtifactId"></a>

```java
public java.lang.String getCommandSpecDeployArtifactId();
```

- *Type:* java.lang.String

---

##### `computeInstanceGroupBlueGreenDeploymentDeployStageId`<sup>Required</sup> <a name="computeInstanceGroupBlueGreenDeploymentDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupBlueGreenDeploymentDeployStageId"></a>

```java
public java.lang.String getComputeInstanceGroupBlueGreenDeploymentDeployStageId();
```

- *Type:* java.lang.String

---

##### `computeInstanceGroupCanaryDeployStageId`<sup>Required</sup> <a name="computeInstanceGroupCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryDeployStageId"></a>

```java
public java.lang.String getComputeInstanceGroupCanaryDeployStageId();
```

- *Type:* java.lang.String

---

##### `computeInstanceGroupCanaryTrafficShiftDeployStageId`<sup>Required</sup> <a name="computeInstanceGroupCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryTrafficShiftDeployStageId"></a>

```java
public java.lang.String getComputeInstanceGroupCanaryTrafficShiftDeployStageId();
```

- *Type:* java.lang.String

---

##### `computeInstanceGroupDeployEnvironmentId`<sup>Required</sup> <a name="computeInstanceGroupDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupDeployEnvironmentId"></a>

```java
public java.lang.String getComputeInstanceGroupDeployEnvironmentId();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.config"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deployArtifactId`<sup>Required</sup> <a name="deployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactId"></a>

```java
public java.lang.String getDeployArtifactId();
```

- *Type:* java.lang.String

---

##### `deployArtifactIds`<sup>Required</sup> <a name="deployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIds"></a>

```java
public java.util.List<java.lang.String> getDeployArtifactIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deployEnvironmentIdA`<sup>Required</sup> <a name="deployEnvironmentIdA" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdA"></a>

```java
public java.lang.String getDeployEnvironmentIdA();
```

- *Type:* java.lang.String

---

##### `deployEnvironmentIdB`<sup>Required</sup> <a name="deployEnvironmentIdB" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdB"></a>

```java
public java.lang.String getDeployEnvironmentIdB();
```

- *Type:* java.lang.String

---

##### `deploymentSpecDeployArtifactId`<sup>Required</sup> <a name="deploymentSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deploymentSpecDeployArtifactId"></a>

```java
public java.lang.String getDeploymentSpecDeployArtifactId();
```

- *Type:* java.lang.String

---

##### `deployPipelineId`<sup>Required</sup> <a name="deployPipelineId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployPipelineId"></a>

```java
public java.lang.String getDeployPipelineId();
```

- *Type:* java.lang.String

---

##### `deployStageType`<sup>Required</sup> <a name="deployStageType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStageType"></a>

```java
public java.lang.String getDeployStageType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `dockerImageDeployArtifactId`<sup>Required</sup> <a name="dockerImageDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dockerImageDeployArtifactId"></a>

```java
public java.lang.String getDockerImageDeployArtifactId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `functionDeployEnvironmentId`<sup>Required</sup> <a name="functionDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionDeployEnvironmentId"></a>

```java
public java.lang.String getFunctionDeployEnvironmentId();
```

- *Type:* java.lang.String

---

##### `functionTimeoutInSeconds`<sup>Required</sup> <a name="functionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionTimeoutInSeconds"></a>

```java
public java.lang.Number getFunctionTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `helmChartDeployArtifactId`<sup>Required</sup> <a name="helmChartDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmChartDeployArtifactId"></a>

```java
public java.lang.String getHelmChartDeployArtifactId();
```

- *Type:* java.lang.String

---

##### `helmCommandArtifactIds`<sup>Required</sup> <a name="helmCommandArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmCommandArtifactIds"></a>

```java
public java.util.List<java.lang.String> getHelmCommandArtifactIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isAsync`<sup>Required</sup> <a name="isAsync" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isAsync"></a>

```java
public java.lang.Object getIsAsync();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDebugEnabled`<sup>Required</sup> <a name="isDebugEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isDebugEnabled"></a>

```java
public java.lang.Object getIsDebugEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isForceEnabled`<sup>Required</sup> <a name="isForceEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isForceEnabled"></a>

```java
public java.lang.Object getIsForceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isUninstallOnStageDelete`<sup>Required</sup> <a name="isUninstallOnStageDelete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isUninstallOnStageDelete"></a>

```java
public java.lang.Object getIsUninstallOnStageDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isValidationEnabled`<sup>Required</sup> <a name="isValidationEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isValidationEnabled"></a>

```java
public java.lang.Object getIsValidationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kubernetesManifestDeployArtifactIds`<sup>Required</sup> <a name="kubernetesManifestDeployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.kubernetesManifestDeployArtifactIds"></a>

```java
public java.util.List<java.lang.String> getKubernetesManifestDeployArtifactIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxHistory`<sup>Required</sup> <a name="maxHistory" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxHistory"></a>

```java
public java.lang.Number getMaxHistory();
```

- *Type:* java.lang.Number

---

##### `maxMemoryInMbs`<sup>Required</sup> <a name="maxMemoryInMbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxMemoryInMbs"></a>

```java
public java.lang.String getMaxMemoryInMbs();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `okeBlueGreenDeployStageId`<sup>Required</sup> <a name="okeBlueGreenDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeBlueGreenDeployStageId"></a>

```java
public java.lang.String getOkeBlueGreenDeployStageId();
```

- *Type:* java.lang.String

---

##### `okeCanaryDeployStageId`<sup>Required</sup> <a name="okeCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryDeployStageId"></a>

```java
public java.lang.String getOkeCanaryDeployStageId();
```

- *Type:* java.lang.String

---

##### `okeCanaryTrafficShiftDeployStageId`<sup>Required</sup> <a name="okeCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryTrafficShiftDeployStageId"></a>

```java
public java.lang.String getOkeCanaryTrafficShiftDeployStageId();
```

- *Type:* java.lang.String

---

##### `okeClusterDeployEnvironmentId`<sup>Required</sup> <a name="okeClusterDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeClusterDeployEnvironmentId"></a>

```java
public java.lang.String getOkeClusterDeployEnvironmentId();
```

- *Type:* java.lang.String

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.purpose"></a>

```java
public java.lang.String getPurpose();
```

- *Type:* java.lang.String

---

##### `releaseName`<sup>Required</sup> <a name="releaseName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.releaseName"></a>

```java
public java.lang.String getReleaseName();
```

- *Type:* java.lang.String

---

##### `shouldCleanupOnFail`<sup>Required</sup> <a name="shouldCleanupOnFail" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldCleanupOnFail"></a>

```java
public java.lang.Object getShouldCleanupOnFail();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shouldNotWait`<sup>Required</sup> <a name="shouldNotWait" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldNotWait"></a>

```java
public java.lang.Object getShouldNotWait();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shouldResetValues`<sup>Required</sup> <a name="shouldResetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldResetValues"></a>

```java
public java.lang.Object getShouldResetValues();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shouldReuseValues`<sup>Required</sup> <a name="shouldReuseValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldReuseValues"></a>

```java
public java.lang.Object getShouldReuseValues();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shouldSkipCrds`<sup>Required</sup> <a name="shouldSkipCrds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipCrds"></a>

```java
public java.lang.Object getShouldSkipCrds();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shouldSkipRenderSubchartNotes`<sup>Required</sup> <a name="shouldSkipRenderSubchartNotes" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipRenderSubchartNotes"></a>

```java
public java.lang.Object getShouldSkipRenderSubchartNotes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `trafficShiftTarget`<sup>Required</sup> <a name="trafficShiftTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.trafficShiftTarget"></a>

```java
public java.lang.String getTrafficShiftTarget();
```

- *Type:* java.lang.String

---

##### `valuesArtifactIds`<sup>Required</sup> <a name="valuesArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.valuesArtifactIds"></a>

```java
public java.util.List<java.lang.String> getValuesArtifactIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsDeployStageApprovalPolicy <a name="DevopsDeployStageApprovalPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageApprovalPolicy;

DevopsDeployStageApprovalPolicy.builder()
    .approvalPolicyType(java.lang.String)
    .numberOfApprovalsRequired(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.property.approvalPolicyType">approvalPolicyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#approval_policy_type DevopsDeployStage#approval_policy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.property.numberOfApprovalsRequired">numberOfApprovalsRequired</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#number_of_approvals_required DevopsDeployStage#number_of_approvals_required}. |

---

##### `approvalPolicyType`<sup>Required</sup> <a name="approvalPolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.property.approvalPolicyType"></a>

```java
public java.lang.String getApprovalPolicyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#approval_policy_type DevopsDeployStage#approval_policy_type}.

---

##### `numberOfApprovalsRequired`<sup>Required</sup> <a name="numberOfApprovalsRequired" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.property.numberOfApprovalsRequired"></a>

```java
public java.lang.Number getNumberOfApprovalsRequired();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#number_of_approvals_required DevopsDeployStage#number_of_approvals_required}.

---

### DevopsDeployStageBlueBackendIps <a name="DevopsDeployStageBlueBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageBlueBackendIps;

DevopsDeployStageBlueBackendIps.builder()
//  .items(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps.property.items">items</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}. |

---

##### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps.property.items"></a>

```java
public java.util.List<java.lang.String> getItems();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}.

---

### DevopsDeployStageBlueGreenStrategy <a name="DevopsDeployStageBlueGreenStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageBlueGreenStrategy;

DevopsDeployStageBlueGreenStrategy.builder()
    .ingressName(java.lang.String)
    .namespaceA(java.lang.String)
    .namespaceB(java.lang.String)
    .strategyType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.ingressName">ingressName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.namespaceA">namespaceA</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace_a DevopsDeployStage#namespace_a}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.namespaceB">namespaceB</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace_b DevopsDeployStage#namespace_b}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.strategyType">strategyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}. |

---

##### `ingressName`<sup>Required</sup> <a name="ingressName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.ingressName"></a>

```java
public java.lang.String getIngressName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}.

---

##### `namespaceA`<sup>Required</sup> <a name="namespaceA" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.namespaceA"></a>

```java
public java.lang.String getNamespaceA();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace_a DevopsDeployStage#namespace_a}.

---

##### `namespaceB`<sup>Required</sup> <a name="namespaceB" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.namespaceB"></a>

```java
public java.lang.String getNamespaceB();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace_b DevopsDeployStage#namespace_b}.

---

##### `strategyType`<sup>Required</sup> <a name="strategyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.strategyType"></a>

```java
public java.lang.String getStrategyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}.

---

### DevopsDeployStageCanaryStrategy <a name="DevopsDeployStageCanaryStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageCanaryStrategy;

DevopsDeployStageCanaryStrategy.builder()
    .ingressName(java.lang.String)
    .namespace(java.lang.String)
    .strategyType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.ingressName">ingressName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.strategyType">strategyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}. |

---

##### `ingressName`<sup>Required</sup> <a name="ingressName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.ingressName"></a>

```java
public java.lang.String getIngressName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}.

---

##### `strategyType`<sup>Required</sup> <a name="strategyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.strategyType"></a>

```java
public java.lang.String getStrategyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}.

---

### DevopsDeployStageConfig <a name="DevopsDeployStageConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageConfig;

DevopsDeployStageConfig.builder()
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
    .deployPipelineId(java.lang.String)
    .deployStagePredecessorCollection(DevopsDeployStageDeployStagePredecessorCollection)
    .deployStageType(java.lang.String)
//  .approvalPolicy(DevopsDeployStageApprovalPolicy)
//  .areHooksEnabled(java.lang.Boolean)
//  .areHooksEnabled(IResolvable)
//  .blueBackendIps(DevopsDeployStageBlueBackendIps)
//  .blueGreenStrategy(DevopsDeployStageBlueGreenStrategy)
//  .canaryStrategy(DevopsDeployStageCanaryStrategy)
//  .commandSpecDeployArtifactId(java.lang.String)
//  .computeInstanceGroupBlueGreenDeploymentDeployStageId(java.lang.String)
//  .computeInstanceGroupCanaryDeployStageId(java.lang.String)
//  .computeInstanceGroupCanaryTrafficShiftDeployStageId(java.lang.String)
//  .computeInstanceGroupDeployEnvironmentId(java.lang.String)
//  .config(java.util.Map<java.lang.String, java.lang.String>)
//  .containerConfig(DevopsDeployStageContainerConfig)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .deployArtifactId(java.lang.String)
//  .deployArtifactIds(java.util.List<java.lang.String>)
//  .deployEnvironmentIdA(java.lang.String)
//  .deployEnvironmentIdB(java.lang.String)
//  .deploymentSpecDeployArtifactId(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .dockerImageDeployArtifactId(java.lang.String)
//  .failurePolicy(DevopsDeployStageFailurePolicy)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .functionDeployEnvironmentId(java.lang.String)
//  .functionTimeoutInSeconds(java.lang.Number)
//  .greenBackendIps(DevopsDeployStageGreenBackendIps)
//  .helmChartDeployArtifactId(java.lang.String)
//  .helmCommandArtifactIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .isAsync(java.lang.Boolean)
//  .isAsync(IResolvable)
//  .isDebugEnabled(java.lang.Boolean)
//  .isDebugEnabled(IResolvable)
//  .isForceEnabled(java.lang.Boolean)
//  .isForceEnabled(IResolvable)
//  .isUninstallOnStageDelete(java.lang.Boolean)
//  .isUninstallOnStageDelete(IResolvable)
//  .isValidationEnabled(java.lang.Boolean)
//  .isValidationEnabled(IResolvable)
//  .kubernetesManifestDeployArtifactIds(java.util.List<java.lang.String>)
//  .loadBalancerConfig(DevopsDeployStageLoadBalancerConfig)
//  .maxHistory(java.lang.Number)
//  .maxMemoryInMbs(java.lang.String)
//  .namespace(java.lang.String)
//  .okeBlueGreenDeployStageId(java.lang.String)
//  .okeCanaryDeployStageId(java.lang.String)
//  .okeCanaryTrafficShiftDeployStageId(java.lang.String)
//  .okeClusterDeployEnvironmentId(java.lang.String)
//  .productionLoadBalancerConfig(DevopsDeployStageProductionLoadBalancerConfig)
//  .purpose(java.lang.String)
//  .releaseName(java.lang.String)
//  .rollbackPolicy(DevopsDeployStageRollbackPolicy)
//  .rolloutPolicy(DevopsDeployStageRolloutPolicy)
//  .setString(DevopsDeployStageSetString)
//  .setValues(DevopsDeployStageSetValues)
//  .shouldCleanupOnFail(java.lang.Boolean)
//  .shouldCleanupOnFail(IResolvable)
//  .shouldNotWait(java.lang.Boolean)
//  .shouldNotWait(IResolvable)
//  .shouldResetValues(java.lang.Boolean)
//  .shouldResetValues(IResolvable)
//  .shouldReuseValues(java.lang.Boolean)
//  .shouldReuseValues(IResolvable)
//  .shouldSkipCrds(java.lang.Boolean)
//  .shouldSkipCrds(IResolvable)
//  .shouldSkipRenderSubchartNotes(java.lang.Boolean)
//  .shouldSkipRenderSubchartNotes(IResolvable)
//  .testLoadBalancerConfig(DevopsDeployStageTestLoadBalancerConfig)
//  .timeoutInSeconds(java.lang.Number)
//  .timeouts(DevopsDeployStageTimeouts)
//  .trafficShiftTarget(java.lang.String)
//  .valuesArtifactIds(java.util.List<java.lang.String>)
//  .waitCriteria(DevopsDeployStageWaitCriteria)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployPipelineId">deployPipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_pipeline_id DevopsDeployStage#deploy_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployStagePredecessorCollection">deployStagePredecessorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a></code> | deploy_stage_predecessor_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployStageType">deployStageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_stage_type DevopsDeployStage#deploy_stage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.approvalPolicy">approvalPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a></code> | approval_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.areHooksEnabled">areHooksEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#are_hooks_enabled DevopsDeployStage#are_hooks_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.blueBackendIps">blueBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a></code> | blue_backend_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.blueGreenStrategy">blueGreenStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a></code> | blue_green_strategy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.canaryStrategy">canaryStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a></code> | canary_strategy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.commandSpecDeployArtifactId">commandSpecDeployArtifactId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#command_spec_deploy_artifact_id DevopsDeployStage#command_spec_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupBlueGreenDeploymentDeployStageId">computeInstanceGroupBlueGreenDeploymentDeployStageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_blue_green_deployment_deploy_stage_id DevopsDeployStage#compute_instance_group_blue_green_deployment_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupCanaryDeployStageId">computeInstanceGroupCanaryDeployStageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupCanaryTrafficShiftDeployStageId">computeInstanceGroupCanaryTrafficShiftDeployStageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_traffic_shift_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_traffic_shift_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupDeployEnvironmentId">computeInstanceGroupDeployEnvironmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_deploy_environment_id DevopsDeployStage#compute_instance_group_deploy_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.config">config</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#config DevopsDeployStage#config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.containerConfig">containerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a></code> | container_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#defined_tags DevopsDeployStage#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployArtifactId">deployArtifactId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_id DevopsDeployStage#deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployArtifactIds">deployArtifactIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_ids DevopsDeployStage#deploy_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployEnvironmentIdA">deployEnvironmentIdA</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_a DevopsDeployStage#deploy_environment_id_a}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployEnvironmentIdB">deployEnvironmentIdB</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_b DevopsDeployStage#deploy_environment_id_b}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deploymentSpecDeployArtifactId">deploymentSpecDeployArtifactId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deployment_spec_deploy_artifact_id DevopsDeployStage#deployment_spec_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#description DevopsDeployStage#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#display_name DevopsDeployStage#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.dockerImageDeployArtifactId">dockerImageDeployArtifactId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#docker_image_deploy_artifact_id DevopsDeployStage#docker_image_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.failurePolicy">failurePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a></code> | failure_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#freeform_tags DevopsDeployStage#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.functionDeployEnvironmentId">functionDeployEnvironmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_deploy_environment_id DevopsDeployStage#function_deploy_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.functionTimeoutInSeconds">functionTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_timeout_in_seconds DevopsDeployStage#function_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.greenBackendIps">greenBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a></code> | green_backend_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.helmChartDeployArtifactId">helmChartDeployArtifactId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_chart_deploy_artifact_id DevopsDeployStage#helm_chart_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.helmCommandArtifactIds">helmCommandArtifactIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_command_artifact_ids DevopsDeployStage#helm_command_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isAsync">isAsync</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_async DevopsDeployStage#is_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isDebugEnabled">isDebugEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_debug_enabled DevopsDeployStage#is_debug_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isForceEnabled">isForceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_force_enabled DevopsDeployStage#is_force_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isUninstallOnStageDelete">isUninstallOnStageDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_uninstall_on_stage_delete DevopsDeployStage#is_uninstall_on_stage_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isValidationEnabled">isValidationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_validation_enabled DevopsDeployStage#is_validation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.kubernetesManifestDeployArtifactIds">kubernetesManifestDeployArtifactIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#kubernetes_manifest_deploy_artifact_ids DevopsDeployStage#kubernetes_manifest_deploy_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.loadBalancerConfig">loadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a></code> | load_balancer_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.maxHistory">maxHistory</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_history DevopsDeployStage#max_history}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.maxMemoryInMbs">maxMemoryInMbs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_memory_in_mbs DevopsDeployStage#max_memory_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeBlueGreenDeployStageId">okeBlueGreenDeployStageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_blue_green_deploy_stage_id DevopsDeployStage#oke_blue_green_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeCanaryDeployStageId">okeCanaryDeployStageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_deploy_stage_id DevopsDeployStage#oke_canary_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeCanaryTrafficShiftDeployStageId">okeCanaryTrafficShiftDeployStageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_traffic_shift_deploy_stage_id DevopsDeployStage#oke_canary_traffic_shift_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeClusterDeployEnvironmentId">okeClusterDeployEnvironmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_cluster_deploy_environment_id DevopsDeployStage#oke_cluster_deploy_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.productionLoadBalancerConfig">productionLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a></code> | production_load_balancer_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.purpose">purpose</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#purpose DevopsDeployStage#purpose}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.releaseName">releaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#release_name DevopsDeployStage#release_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.rollbackPolicy">rollbackPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a></code> | rollback_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.rolloutPolicy">rolloutPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a></code> | rollout_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.setString">setString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a></code> | set_string block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.setValues">setValues</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a></code> | set_values block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldCleanupOnFail">shouldCleanupOnFail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_cleanup_on_fail DevopsDeployStage#should_cleanup_on_fail}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldNotWait">shouldNotWait</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_not_wait DevopsDeployStage#should_not_wait}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldResetValues">shouldResetValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reset_values DevopsDeployStage#should_reset_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldReuseValues">shouldReuseValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reuse_values DevopsDeployStage#should_reuse_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldSkipCrds">shouldSkipCrds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_crds DevopsDeployStage#should_skip_crds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldSkipRenderSubchartNotes">shouldSkipRenderSubchartNotes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_render_subchart_notes DevopsDeployStage#should_skip_render_subchart_notes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.testLoadBalancerConfig">testLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a></code> | test_load_balancer_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#timeout_in_seconds DevopsDeployStage#timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.trafficShiftTarget">trafficShiftTarget</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#traffic_shift_target DevopsDeployStage#traffic_shift_target}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.valuesArtifactIds">valuesArtifactIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#values_artifact_ids DevopsDeployStage#values_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.waitCriteria">waitCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a></code> | wait_criteria block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deployPipelineId`<sup>Required</sup> <a name="deployPipelineId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployPipelineId"></a>

```java
public java.lang.String getDeployPipelineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_pipeline_id DevopsDeployStage#deploy_pipeline_id}.

---

##### `deployStagePredecessorCollection`<sup>Required</sup> <a name="deployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployStagePredecessorCollection"></a>

```java
public DevopsDeployStageDeployStagePredecessorCollection getDeployStagePredecessorCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a>

deploy_stage_predecessor_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_stage_predecessor_collection DevopsDeployStage#deploy_stage_predecessor_collection}

---

##### `deployStageType`<sup>Required</sup> <a name="deployStageType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployStageType"></a>

```java
public java.lang.String getDeployStageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_stage_type DevopsDeployStage#deploy_stage_type}.

---

##### `approvalPolicy`<sup>Optional</sup> <a name="approvalPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.approvalPolicy"></a>

```java
public DevopsDeployStageApprovalPolicy getApprovalPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a>

approval_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#approval_policy DevopsDeployStage#approval_policy}

---

##### `areHooksEnabled`<sup>Optional</sup> <a name="areHooksEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.areHooksEnabled"></a>

```java
public java.lang.Object getAreHooksEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#are_hooks_enabled DevopsDeployStage#are_hooks_enabled}.

---

##### `blueBackendIps`<sup>Optional</sup> <a name="blueBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.blueBackendIps"></a>

```java
public DevopsDeployStageBlueBackendIps getBlueBackendIps();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a>

blue_backend_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#blue_backend_ips DevopsDeployStage#blue_backend_ips}

---

##### `blueGreenStrategy`<sup>Optional</sup> <a name="blueGreenStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.blueGreenStrategy"></a>

```java
public DevopsDeployStageBlueGreenStrategy getBlueGreenStrategy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a>

blue_green_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#blue_green_strategy DevopsDeployStage#blue_green_strategy}

---

##### `canaryStrategy`<sup>Optional</sup> <a name="canaryStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.canaryStrategy"></a>

```java
public DevopsDeployStageCanaryStrategy getCanaryStrategy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a>

canary_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#canary_strategy DevopsDeployStage#canary_strategy}

---

##### `commandSpecDeployArtifactId`<sup>Optional</sup> <a name="commandSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.commandSpecDeployArtifactId"></a>

```java
public java.lang.String getCommandSpecDeployArtifactId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#command_spec_deploy_artifact_id DevopsDeployStage#command_spec_deploy_artifact_id}.

---

##### `computeInstanceGroupBlueGreenDeploymentDeployStageId`<sup>Optional</sup> <a name="computeInstanceGroupBlueGreenDeploymentDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupBlueGreenDeploymentDeployStageId"></a>

```java
public java.lang.String getComputeInstanceGroupBlueGreenDeploymentDeployStageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_blue_green_deployment_deploy_stage_id DevopsDeployStage#compute_instance_group_blue_green_deployment_deploy_stage_id}.

---

##### `computeInstanceGroupCanaryDeployStageId`<sup>Optional</sup> <a name="computeInstanceGroupCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupCanaryDeployStageId"></a>

```java
public java.lang.String getComputeInstanceGroupCanaryDeployStageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_deploy_stage_id}.

---

##### `computeInstanceGroupCanaryTrafficShiftDeployStageId`<sup>Optional</sup> <a name="computeInstanceGroupCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupCanaryTrafficShiftDeployStageId"></a>

```java
public java.lang.String getComputeInstanceGroupCanaryTrafficShiftDeployStageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_traffic_shift_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_traffic_shift_deploy_stage_id}.

---

##### `computeInstanceGroupDeployEnvironmentId`<sup>Optional</sup> <a name="computeInstanceGroupDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupDeployEnvironmentId"></a>

```java
public java.lang.String getComputeInstanceGroupDeployEnvironmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_deploy_environment_id DevopsDeployStage#compute_instance_group_deploy_environment_id}.

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.config"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#config DevopsDeployStage#config}.

---

##### `containerConfig`<sup>Optional</sup> <a name="containerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.containerConfig"></a>

```java
public DevopsDeployStageContainerConfig getContainerConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a>

container_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#container_config DevopsDeployStage#container_config}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#defined_tags DevopsDeployStage#defined_tags}.

---

##### `deployArtifactId`<sup>Optional</sup> <a name="deployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployArtifactId"></a>

```java
public java.lang.String getDeployArtifactId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_id DevopsDeployStage#deploy_artifact_id}.

---

##### `deployArtifactIds`<sup>Optional</sup> <a name="deployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployArtifactIds"></a>

```java
public java.util.List<java.lang.String> getDeployArtifactIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_ids DevopsDeployStage#deploy_artifact_ids}.

---

##### `deployEnvironmentIdA`<sup>Optional</sup> <a name="deployEnvironmentIdA" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployEnvironmentIdA"></a>

```java
public java.lang.String getDeployEnvironmentIdA();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_a DevopsDeployStage#deploy_environment_id_a}.

---

##### `deployEnvironmentIdB`<sup>Optional</sup> <a name="deployEnvironmentIdB" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployEnvironmentIdB"></a>

```java
public java.lang.String getDeployEnvironmentIdB();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_b DevopsDeployStage#deploy_environment_id_b}.

---

##### `deploymentSpecDeployArtifactId`<sup>Optional</sup> <a name="deploymentSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deploymentSpecDeployArtifactId"></a>

```java
public java.lang.String getDeploymentSpecDeployArtifactId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deployment_spec_deploy_artifact_id DevopsDeployStage#deployment_spec_deploy_artifact_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#description DevopsDeployStage#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#display_name DevopsDeployStage#display_name}.

---

##### `dockerImageDeployArtifactId`<sup>Optional</sup> <a name="dockerImageDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.dockerImageDeployArtifactId"></a>

```java
public java.lang.String getDockerImageDeployArtifactId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#docker_image_deploy_artifact_id DevopsDeployStage#docker_image_deploy_artifact_id}.

---

##### `failurePolicy`<sup>Optional</sup> <a name="failurePolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.failurePolicy"></a>

```java
public DevopsDeployStageFailurePolicy getFailurePolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a>

failure_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_policy DevopsDeployStage#failure_policy}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#freeform_tags DevopsDeployStage#freeform_tags}.

---

##### `functionDeployEnvironmentId`<sup>Optional</sup> <a name="functionDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.functionDeployEnvironmentId"></a>

```java
public java.lang.String getFunctionDeployEnvironmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_deploy_environment_id DevopsDeployStage#function_deploy_environment_id}.

---

##### `functionTimeoutInSeconds`<sup>Optional</sup> <a name="functionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.functionTimeoutInSeconds"></a>

```java
public java.lang.Number getFunctionTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_timeout_in_seconds DevopsDeployStage#function_timeout_in_seconds}.

---

##### `greenBackendIps`<sup>Optional</sup> <a name="greenBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.greenBackendIps"></a>

```java
public DevopsDeployStageGreenBackendIps getGreenBackendIps();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a>

green_backend_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#green_backend_ips DevopsDeployStage#green_backend_ips}

---

##### `helmChartDeployArtifactId`<sup>Optional</sup> <a name="helmChartDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.helmChartDeployArtifactId"></a>

```java
public java.lang.String getHelmChartDeployArtifactId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_chart_deploy_artifact_id DevopsDeployStage#helm_chart_deploy_artifact_id}.

---

##### `helmCommandArtifactIds`<sup>Optional</sup> <a name="helmCommandArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.helmCommandArtifactIds"></a>

```java
public java.util.List<java.lang.String> getHelmCommandArtifactIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_command_artifact_ids DevopsDeployStage#helm_command_artifact_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAsync`<sup>Optional</sup> <a name="isAsync" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isAsync"></a>

```java
public java.lang.Object getIsAsync();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_async DevopsDeployStage#is_async}.

---

##### `isDebugEnabled`<sup>Optional</sup> <a name="isDebugEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isDebugEnabled"></a>

```java
public java.lang.Object getIsDebugEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_debug_enabled DevopsDeployStage#is_debug_enabled}.

---

##### `isForceEnabled`<sup>Optional</sup> <a name="isForceEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isForceEnabled"></a>

```java
public java.lang.Object getIsForceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_force_enabled DevopsDeployStage#is_force_enabled}.

---

##### `isUninstallOnStageDelete`<sup>Optional</sup> <a name="isUninstallOnStageDelete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isUninstallOnStageDelete"></a>

```java
public java.lang.Object getIsUninstallOnStageDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_uninstall_on_stage_delete DevopsDeployStage#is_uninstall_on_stage_delete}.

---

##### `isValidationEnabled`<sup>Optional</sup> <a name="isValidationEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isValidationEnabled"></a>

```java
public java.lang.Object getIsValidationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_validation_enabled DevopsDeployStage#is_validation_enabled}.

---

##### `kubernetesManifestDeployArtifactIds`<sup>Optional</sup> <a name="kubernetesManifestDeployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.kubernetesManifestDeployArtifactIds"></a>

```java
public java.util.List<java.lang.String> getKubernetesManifestDeployArtifactIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#kubernetes_manifest_deploy_artifact_ids DevopsDeployStage#kubernetes_manifest_deploy_artifact_ids}.

---

##### `loadBalancerConfig`<sup>Optional</sup> <a name="loadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.loadBalancerConfig"></a>

```java
public DevopsDeployStageLoadBalancerConfig getLoadBalancerConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a>

load_balancer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_config DevopsDeployStage#load_balancer_config}

---

##### `maxHistory`<sup>Optional</sup> <a name="maxHistory" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.maxHistory"></a>

```java
public java.lang.Number getMaxHistory();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_history DevopsDeployStage#max_history}.

---

##### `maxMemoryInMbs`<sup>Optional</sup> <a name="maxMemoryInMbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.maxMemoryInMbs"></a>

```java
public java.lang.String getMaxMemoryInMbs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_memory_in_mbs DevopsDeployStage#max_memory_in_mbs}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}.

---

##### `okeBlueGreenDeployStageId`<sup>Optional</sup> <a name="okeBlueGreenDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeBlueGreenDeployStageId"></a>

```java
public java.lang.String getOkeBlueGreenDeployStageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_blue_green_deploy_stage_id DevopsDeployStage#oke_blue_green_deploy_stage_id}.

---

##### `okeCanaryDeployStageId`<sup>Optional</sup> <a name="okeCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeCanaryDeployStageId"></a>

```java
public java.lang.String getOkeCanaryDeployStageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_deploy_stage_id DevopsDeployStage#oke_canary_deploy_stage_id}.

---

##### `okeCanaryTrafficShiftDeployStageId`<sup>Optional</sup> <a name="okeCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeCanaryTrafficShiftDeployStageId"></a>

```java
public java.lang.String getOkeCanaryTrafficShiftDeployStageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_traffic_shift_deploy_stage_id DevopsDeployStage#oke_canary_traffic_shift_deploy_stage_id}.

---

##### `okeClusterDeployEnvironmentId`<sup>Optional</sup> <a name="okeClusterDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeClusterDeployEnvironmentId"></a>

```java
public java.lang.String getOkeClusterDeployEnvironmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_cluster_deploy_environment_id DevopsDeployStage#oke_cluster_deploy_environment_id}.

---

##### `productionLoadBalancerConfig`<sup>Optional</sup> <a name="productionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.productionLoadBalancerConfig"></a>

```java
public DevopsDeployStageProductionLoadBalancerConfig getProductionLoadBalancerConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a>

production_load_balancer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#production_load_balancer_config DevopsDeployStage#production_load_balancer_config}

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.purpose"></a>

```java
public java.lang.String getPurpose();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#purpose DevopsDeployStage#purpose}.

---

##### `releaseName`<sup>Optional</sup> <a name="releaseName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.releaseName"></a>

```java
public java.lang.String getReleaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#release_name DevopsDeployStage#release_name}.

---

##### `rollbackPolicy`<sup>Optional</sup> <a name="rollbackPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.rollbackPolicy"></a>

```java
public DevopsDeployStageRollbackPolicy getRollbackPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a>

rollback_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#rollback_policy DevopsDeployStage#rollback_policy}

---

##### `rolloutPolicy`<sup>Optional</sup> <a name="rolloutPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.rolloutPolicy"></a>

```java
public DevopsDeployStageRolloutPolicy getRolloutPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a>

rollout_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#rollout_policy DevopsDeployStage#rollout_policy}

---

##### `setString`<sup>Optional</sup> <a name="setString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.setString"></a>

```java
public DevopsDeployStageSetString getSetString();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a>

set_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#set_string DevopsDeployStage#set_string}

---

##### `setValues`<sup>Optional</sup> <a name="setValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.setValues"></a>

```java
public DevopsDeployStageSetValues getSetValues();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a>

set_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#set_values DevopsDeployStage#set_values}

---

##### `shouldCleanupOnFail`<sup>Optional</sup> <a name="shouldCleanupOnFail" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldCleanupOnFail"></a>

```java
public java.lang.Object getShouldCleanupOnFail();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_cleanup_on_fail DevopsDeployStage#should_cleanup_on_fail}.

---

##### `shouldNotWait`<sup>Optional</sup> <a name="shouldNotWait" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldNotWait"></a>

```java
public java.lang.Object getShouldNotWait();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_not_wait DevopsDeployStage#should_not_wait}.

---

##### `shouldResetValues`<sup>Optional</sup> <a name="shouldResetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldResetValues"></a>

```java
public java.lang.Object getShouldResetValues();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reset_values DevopsDeployStage#should_reset_values}.

---

##### `shouldReuseValues`<sup>Optional</sup> <a name="shouldReuseValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldReuseValues"></a>

```java
public java.lang.Object getShouldReuseValues();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reuse_values DevopsDeployStage#should_reuse_values}.

---

##### `shouldSkipCrds`<sup>Optional</sup> <a name="shouldSkipCrds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldSkipCrds"></a>

```java
public java.lang.Object getShouldSkipCrds();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_crds DevopsDeployStage#should_skip_crds}.

---

##### `shouldSkipRenderSubchartNotes`<sup>Optional</sup> <a name="shouldSkipRenderSubchartNotes" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldSkipRenderSubchartNotes"></a>

```java
public java.lang.Object getShouldSkipRenderSubchartNotes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_render_subchart_notes DevopsDeployStage#should_skip_render_subchart_notes}.

---

##### `testLoadBalancerConfig`<sup>Optional</sup> <a name="testLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.testLoadBalancerConfig"></a>

```java
public DevopsDeployStageTestLoadBalancerConfig getTestLoadBalancerConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a>

test_load_balancer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#test_load_balancer_config DevopsDeployStage#test_load_balancer_config}

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#timeout_in_seconds DevopsDeployStage#timeout_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.timeouts"></a>

```java
public DevopsDeployStageTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#timeouts DevopsDeployStage#timeouts}

---

##### `trafficShiftTarget`<sup>Optional</sup> <a name="trafficShiftTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.trafficShiftTarget"></a>

```java
public java.lang.String getTrafficShiftTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#traffic_shift_target DevopsDeployStage#traffic_shift_target}.

---

##### `valuesArtifactIds`<sup>Optional</sup> <a name="valuesArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.valuesArtifactIds"></a>

```java
public java.util.List<java.lang.String> getValuesArtifactIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#values_artifact_ids DevopsDeployStage#values_artifact_ids}.

---

##### `waitCriteria`<sup>Optional</sup> <a name="waitCriteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.waitCriteria"></a>

```java
public DevopsDeployStageWaitCriteria getWaitCriteria();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a>

wait_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_criteria DevopsDeployStage#wait_criteria}

---

### DevopsDeployStageContainerConfig <a name="DevopsDeployStageContainerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageContainerConfig;

DevopsDeployStageContainerConfig.builder()
    .containerConfigType(java.lang.String)
    .networkChannel(DevopsDeployStageContainerConfigNetworkChannel)
    .shapeConfig(DevopsDeployStageContainerConfigShapeConfig)
    .shapeName(java.lang.String)
//  .availabilityDomain(java.lang.String)
//  .compartmentId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.containerConfigType">containerConfigType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#container_config_type DevopsDeployStage#container_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.networkChannel">networkChannel</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a></code> | network_channel block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#shape_name DevopsDeployStage#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#availability_domain DevopsDeployStage#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compartment_id DevopsDeployStage#compartment_id}. |

---

##### `containerConfigType`<sup>Required</sup> <a name="containerConfigType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.containerConfigType"></a>

```java
public java.lang.String getContainerConfigType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#container_config_type DevopsDeployStage#container_config_type}.

---

##### `networkChannel`<sup>Required</sup> <a name="networkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.networkChannel"></a>

```java
public DevopsDeployStageContainerConfigNetworkChannel getNetworkChannel();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a>

network_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#network_channel DevopsDeployStage#network_channel}

---

##### `shapeConfig`<sup>Required</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.shapeConfig"></a>

```java
public DevopsDeployStageContainerConfigShapeConfig getShapeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#shape_config DevopsDeployStage#shape_config}

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#shape_name DevopsDeployStage#shape_name}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#availability_domain DevopsDeployStage#availability_domain}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compartment_id DevopsDeployStage#compartment_id}.

---

### DevopsDeployStageContainerConfigNetworkChannel <a name="DevopsDeployStageContainerConfigNetworkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageContainerConfigNetworkChannel;

DevopsDeployStageContainerConfigNetworkChannel.builder()
    .networkChannelType(java.lang.String)
    .subnetId(java.lang.String)
//  .nsgIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.networkChannelType">networkChannelType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#network_channel_type DevopsDeployStage#network_channel_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#subnet_id DevopsDeployStage#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#nsg_ids DevopsDeployStage#nsg_ids}. |

---

##### `networkChannelType`<sup>Required</sup> <a name="networkChannelType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.networkChannelType"></a>

```java
public java.lang.String getNetworkChannelType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#network_channel_type DevopsDeployStage#network_channel_type}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#subnet_id DevopsDeployStage#subnet_id}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#nsg_ids DevopsDeployStage#nsg_ids}.

---

### DevopsDeployStageContainerConfigShapeConfig <a name="DevopsDeployStageContainerConfigShapeConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageContainerConfigShapeConfig;

DevopsDeployStageContainerConfigShapeConfig.builder()
    .ocpus(java.lang.Number)
//  .memoryInGbs(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ocpus DevopsDeployStage#ocpus}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#memory_in_gbs DevopsDeployStage#memory_in_gbs}. |

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ocpus DevopsDeployStage#ocpus}.

---

##### `memoryInGbs`<sup>Optional</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#memory_in_gbs DevopsDeployStage#memory_in_gbs}.

---

### DevopsDeployStageDeployStagePredecessorCollection <a name="DevopsDeployStageDeployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageDeployStagePredecessorCollection;

DevopsDeployStageDeployStagePredecessorCollection.builder()
    .items(IResolvable)
    .items(java.util.List<DevopsDeployStageDeployStagePredecessorCollectionItems>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection.property.items">items</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>></code> | items block. |

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection.property.items"></a>

```java
public java.lang.Object getItems();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>>

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}

---

### DevopsDeployStageDeployStagePredecessorCollectionItems <a name="DevopsDeployStageDeployStagePredecessorCollectionItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageDeployStagePredecessorCollectionItems;

DevopsDeployStageDeployStagePredecessorCollectionItems.builder()
    .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DevopsDeployStageFailurePolicy <a name="DevopsDeployStageFailurePolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageFailurePolicy;

DevopsDeployStageFailurePolicy.builder()
    .policyType(java.lang.String)
//  .failureCount(java.lang.Number)
//  .failurePercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.policyType">policyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.failureCount">failureCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_count DevopsDeployStage#failure_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.failurePercentage">failurePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_percentage DevopsDeployStage#failure_percentage}. |

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}.

---

##### `failureCount`<sup>Optional</sup> <a name="failureCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.failureCount"></a>

```java
public java.lang.Number getFailureCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_count DevopsDeployStage#failure_count}.

---

##### `failurePercentage`<sup>Optional</sup> <a name="failurePercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.failurePercentage"></a>

```java
public java.lang.Number getFailurePercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_percentage DevopsDeployStage#failure_percentage}.

---

### DevopsDeployStageGreenBackendIps <a name="DevopsDeployStageGreenBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageGreenBackendIps;

DevopsDeployStageGreenBackendIps.builder()
//  .items(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps.property.items">items</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}. |

---

##### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps.property.items"></a>

```java
public java.util.List<java.lang.String> getItems();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}.

---

### DevopsDeployStageLoadBalancerConfig <a name="DevopsDeployStageLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageLoadBalancerConfig;

DevopsDeployStageLoadBalancerConfig.builder()
//  .backendPort(java.lang.Number)
//  .listenerName(java.lang.String)
//  .loadBalancerId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.backendPort">backendPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.listenerName">listenerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}. |

---

##### `backendPort`<sup>Optional</sup> <a name="backendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.backendPort"></a>

```java
public java.lang.Number getBackendPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}.

---

##### `listenerName`<sup>Optional</sup> <a name="listenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.listenerName"></a>

```java
public java.lang.String getListenerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}.

---

##### `loadBalancerId`<sup>Optional</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}.

---

### DevopsDeployStageProductionLoadBalancerConfig <a name="DevopsDeployStageProductionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageProductionLoadBalancerConfig;

DevopsDeployStageProductionLoadBalancerConfig.builder()
//  .backendPort(java.lang.Number)
//  .listenerName(java.lang.String)
//  .loadBalancerId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.backendPort">backendPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.listenerName">listenerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}. |

---

##### `backendPort`<sup>Optional</sup> <a name="backendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.backendPort"></a>

```java
public java.lang.Number getBackendPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}.

---

##### `listenerName`<sup>Optional</sup> <a name="listenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.listenerName"></a>

```java
public java.lang.String getListenerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}.

---

##### `loadBalancerId`<sup>Optional</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}.

---

### DevopsDeployStageRollbackPolicy <a name="DevopsDeployStageRollbackPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageRollbackPolicy;

DevopsDeployStageRollbackPolicy.builder()
//  .policyType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy.property.policyType">policyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}. |

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}.

---

### DevopsDeployStageRolloutPolicy <a name="DevopsDeployStageRolloutPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageRolloutPolicy;

DevopsDeployStageRolloutPolicy.builder()
//  .batchCount(java.lang.Number)
//  .batchDelayInSeconds(java.lang.Number)
//  .batchPercentage(java.lang.Number)
//  .policyType(java.lang.String)
//  .rampLimitPercent(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchCount">batchCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_count DevopsDeployStage#batch_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchDelayInSeconds">batchDelayInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_delay_in_seconds DevopsDeployStage#batch_delay_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchPercentage">batchPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_percentage DevopsDeployStage#batch_percentage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.policyType">policyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.rampLimitPercent">rampLimitPercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ramp_limit_percent DevopsDeployStage#ramp_limit_percent}. |

---

##### `batchCount`<sup>Optional</sup> <a name="batchCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchCount"></a>

```java
public java.lang.Number getBatchCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_count DevopsDeployStage#batch_count}.

---

##### `batchDelayInSeconds`<sup>Optional</sup> <a name="batchDelayInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchDelayInSeconds"></a>

```java
public java.lang.Number getBatchDelayInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_delay_in_seconds DevopsDeployStage#batch_delay_in_seconds}.

---

##### `batchPercentage`<sup>Optional</sup> <a name="batchPercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchPercentage"></a>

```java
public java.lang.Number getBatchPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_percentage DevopsDeployStage#batch_percentage}.

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}.

---

##### `rampLimitPercent`<sup>Optional</sup> <a name="rampLimitPercent" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.rampLimitPercent"></a>

```java
public java.lang.Number getRampLimitPercent();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ramp_limit_percent DevopsDeployStage#ramp_limit_percent}.

---

### DevopsDeployStageSetString <a name="DevopsDeployStageSetString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageSetString;

DevopsDeployStageSetString.builder()
//  .items(IResolvable)
//  .items(java.util.List<DevopsDeployStageSetStringItems>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString.property.items">items</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>></code> | items block. |

---

##### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString.property.items"></a>

```java
public java.lang.Object getItems();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>>

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}

---

### DevopsDeployStageSetStringItems <a name="DevopsDeployStageSetStringItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageSetStringItems;

DevopsDeployStageSetStringItems.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#name DevopsDeployStage#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#value DevopsDeployStage#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#name DevopsDeployStage#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#value DevopsDeployStage#value}.

---

### DevopsDeployStageSetValues <a name="DevopsDeployStageSetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageSetValues;

DevopsDeployStageSetValues.builder()
//  .items(IResolvable)
//  .items(java.util.List<DevopsDeployStageSetValuesItems>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues.property.items">items</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>></code> | items block. |

---

##### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues.property.items"></a>

```java
public java.lang.Object getItems();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>>

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}

---

### DevopsDeployStageSetValuesItems <a name="DevopsDeployStageSetValuesItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageSetValuesItems;

DevopsDeployStageSetValuesItems.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#name DevopsDeployStage#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#value DevopsDeployStage#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#name DevopsDeployStage#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#value DevopsDeployStage#value}.

---

### DevopsDeployStageTestLoadBalancerConfig <a name="DevopsDeployStageTestLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageTestLoadBalancerConfig;

DevopsDeployStageTestLoadBalancerConfig.builder()
//  .backendPort(java.lang.Number)
//  .listenerName(java.lang.String)
//  .loadBalancerId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.backendPort">backendPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.listenerName">listenerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}. |

---

##### `backendPort`<sup>Optional</sup> <a name="backendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.backendPort"></a>

```java
public java.lang.Number getBackendPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}.

---

##### `listenerName`<sup>Optional</sup> <a name="listenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.listenerName"></a>

```java
public java.lang.String getListenerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}.

---

##### `loadBalancerId`<sup>Optional</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}.

---

### DevopsDeployStageTimeouts <a name="DevopsDeployStageTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageTimeouts;

DevopsDeployStageTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#create DevopsDeployStage#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#delete DevopsDeployStage#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#update DevopsDeployStage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#create DevopsDeployStage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#delete DevopsDeployStage#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#update DevopsDeployStage#update}.

---

### DevopsDeployStageWaitCriteria <a name="DevopsDeployStageWaitCriteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageWaitCriteria;

DevopsDeployStageWaitCriteria.builder()
    .waitDuration(java.lang.String)
    .waitType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.property.waitDuration">waitDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_duration DevopsDeployStage#wait_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.property.waitType">waitType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_type DevopsDeployStage#wait_type}. |

---

##### `waitDuration`<sup>Required</sup> <a name="waitDuration" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.property.waitDuration"></a>

```java
public java.lang.String getWaitDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_duration DevopsDeployStage#wait_duration}.

---

##### `waitType`<sup>Required</sup> <a name="waitType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.property.waitType"></a>

```java
public java.lang.String getWaitType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_type DevopsDeployStage#wait_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsDeployStageApprovalPolicyOutputReference <a name="DevopsDeployStageApprovalPolicyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageApprovalPolicyOutputReference;

new DevopsDeployStageApprovalPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.approvalPolicyTypeInput">approvalPolicyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.numberOfApprovalsRequiredInput">numberOfApprovalsRequiredInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.approvalPolicyType">approvalPolicyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.numberOfApprovalsRequired">numberOfApprovalsRequired</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `approvalPolicyTypeInput`<sup>Optional</sup> <a name="approvalPolicyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.approvalPolicyTypeInput"></a>

```java
public java.lang.String getApprovalPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `numberOfApprovalsRequiredInput`<sup>Optional</sup> <a name="numberOfApprovalsRequiredInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.numberOfApprovalsRequiredInput"></a>

```java
public java.lang.Number getNumberOfApprovalsRequiredInput();
```

- *Type:* java.lang.Number

---

##### `approvalPolicyType`<sup>Required</sup> <a name="approvalPolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.approvalPolicyType"></a>

```java
public java.lang.String getApprovalPolicyType();
```

- *Type:* java.lang.String

---

##### `numberOfApprovalsRequired`<sup>Required</sup> <a name="numberOfApprovalsRequired" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.numberOfApprovalsRequired"></a>

```java
public java.lang.Number getNumberOfApprovalsRequired();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.internalValue"></a>

```java
public DevopsDeployStageApprovalPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a>

---


### DevopsDeployStageBlueBackendIpsOutputReference <a name="DevopsDeployStageBlueBackendIpsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageBlueBackendIpsOutputReference;

new DevopsDeployStageBlueBackendIpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.resetItems">resetItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetItems` <a name="resetItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.resetItems"></a>

```java
public void resetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.itemsInput">itemsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.items">items</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.itemsInput"></a>

```java
public java.util.List<java.lang.String> getItemsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.items"></a>

```java
public java.util.List<java.lang.String> getItems();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.internalValue"></a>

```java
public DevopsDeployStageBlueBackendIps getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a>

---


### DevopsDeployStageBlueGreenStrategyOutputReference <a name="DevopsDeployStageBlueGreenStrategyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageBlueGreenStrategyOutputReference;

new DevopsDeployStageBlueGreenStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.ingressNameInput">ingressNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceAInput">namespaceAInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceBInput">namespaceBInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.strategyTypeInput">strategyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.ingressName">ingressName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceA">namespaceA</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceB">namespaceB</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.strategyType">strategyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingressNameInput`<sup>Optional</sup> <a name="ingressNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.ingressNameInput"></a>

```java
public java.lang.String getIngressNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceAInput`<sup>Optional</sup> <a name="namespaceAInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceAInput"></a>

```java
public java.lang.String getNamespaceAInput();
```

- *Type:* java.lang.String

---

##### `namespaceBInput`<sup>Optional</sup> <a name="namespaceBInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceBInput"></a>

```java
public java.lang.String getNamespaceBInput();
```

- *Type:* java.lang.String

---

##### `strategyTypeInput`<sup>Optional</sup> <a name="strategyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.strategyTypeInput"></a>

```java
public java.lang.String getStrategyTypeInput();
```

- *Type:* java.lang.String

---

##### `ingressName`<sup>Required</sup> <a name="ingressName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.ingressName"></a>

```java
public java.lang.String getIngressName();
```

- *Type:* java.lang.String

---

##### `namespaceA`<sup>Required</sup> <a name="namespaceA" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceA"></a>

```java
public java.lang.String getNamespaceA();
```

- *Type:* java.lang.String

---

##### `namespaceB`<sup>Required</sup> <a name="namespaceB" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceB"></a>

```java
public java.lang.String getNamespaceB();
```

- *Type:* java.lang.String

---

##### `strategyType`<sup>Required</sup> <a name="strategyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.strategyType"></a>

```java
public java.lang.String getStrategyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.internalValue"></a>

```java
public DevopsDeployStageBlueGreenStrategy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a>

---


### DevopsDeployStageCanaryStrategyOutputReference <a name="DevopsDeployStageCanaryStrategyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageCanaryStrategyOutputReference;

new DevopsDeployStageCanaryStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.ingressNameInput">ingressNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.strategyTypeInput">strategyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.ingressName">ingressName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.strategyType">strategyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingressNameInput`<sup>Optional</sup> <a name="ingressNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.ingressNameInput"></a>

```java
public java.lang.String getIngressNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `strategyTypeInput`<sup>Optional</sup> <a name="strategyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.strategyTypeInput"></a>

```java
public java.lang.String getStrategyTypeInput();
```

- *Type:* java.lang.String

---

##### `ingressName`<sup>Required</sup> <a name="ingressName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.ingressName"></a>

```java
public java.lang.String getIngressName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `strategyType`<sup>Required</sup> <a name="strategyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.strategyType"></a>

```java
public java.lang.String getStrategyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.internalValue"></a>

```java
public DevopsDeployStageCanaryStrategy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a>

---


### DevopsDeployStageContainerConfigNetworkChannelOutputReference <a name="DevopsDeployStageContainerConfigNetworkChannelOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageContainerConfigNetworkChannelOutputReference;

new DevopsDeployStageContainerConfigNetworkChannelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.resetNsgIds">resetNsgIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.resetNsgIds"></a>

```java
public void resetNsgIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.networkChannelTypeInput">networkChannelTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.networkChannelType">networkChannelType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkChannelTypeInput`<sup>Optional</sup> <a name="networkChannelTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.networkChannelTypeInput"></a>

```java
public java.lang.String getNetworkChannelTypeInput();
```

- *Type:* java.lang.String

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `networkChannelType`<sup>Required</sup> <a name="networkChannelType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.networkChannelType"></a>

```java
public java.lang.String getNetworkChannelType();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.internalValue"></a>

```java
public DevopsDeployStageContainerConfigNetworkChannel getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a>

---


### DevopsDeployStageContainerConfigOutputReference <a name="DevopsDeployStageContainerConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageContainerConfigOutputReference;

new DevopsDeployStageContainerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putNetworkChannel">putNetworkChannel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putShapeConfig">putShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkChannel` <a name="putNetworkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putNetworkChannel"></a>

```java
public void putNetworkChannel(DevopsDeployStageContainerConfigNetworkChannel value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putNetworkChannel.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a>

---

##### `putShapeConfig` <a name="putShapeConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putShapeConfig"></a>

```java
public void putShapeConfig(DevopsDeployStageContainerConfigShapeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a>

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.networkChannel">networkChannel</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference">DevopsDeployStageContainerConfigNetworkChannelOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference">DevopsDeployStageContainerConfigShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.containerConfigTypeInput">containerConfigTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.networkChannelInput">networkChannelInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeConfigInput">shapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeNameInput">shapeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.containerConfigType">containerConfigType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkChannel`<sup>Required</sup> <a name="networkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.networkChannel"></a>

```java
public DevopsDeployStageContainerConfigNetworkChannelOutputReference getNetworkChannel();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference">DevopsDeployStageContainerConfigNetworkChannelOutputReference</a>

---

##### `shapeConfig`<sup>Required</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeConfig"></a>

```java
public DevopsDeployStageContainerConfigShapeConfigOutputReference getShapeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference">DevopsDeployStageContainerConfigShapeConfigOutputReference</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `containerConfigTypeInput`<sup>Optional</sup> <a name="containerConfigTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.containerConfigTypeInput"></a>

```java
public java.lang.String getContainerConfigTypeInput();
```

- *Type:* java.lang.String

---

##### `networkChannelInput`<sup>Optional</sup> <a name="networkChannelInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.networkChannelInput"></a>

```java
public DevopsDeployStageContainerConfigNetworkChannel getNetworkChannelInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a>

---

##### `shapeConfigInput`<sup>Optional</sup> <a name="shapeConfigInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeConfigInput"></a>

```java
public DevopsDeployStageContainerConfigShapeConfig getShapeConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a>

---

##### `shapeNameInput`<sup>Optional</sup> <a name="shapeNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeNameInput"></a>

```java
public java.lang.String getShapeNameInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `containerConfigType`<sup>Required</sup> <a name="containerConfigType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.containerConfigType"></a>

```java
public java.lang.String getContainerConfigType();
```

- *Type:* java.lang.String

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.internalValue"></a>

```java
public DevopsDeployStageContainerConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a>

---


### DevopsDeployStageContainerConfigShapeConfigOutputReference <a name="DevopsDeployStageContainerConfigShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageContainerConfigShapeConfigOutputReference;

new DevopsDeployStageContainerConfigShapeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.resetMemoryInGbs">resetMemoryInGbs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemoryInGbs` <a name="resetMemoryInGbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.resetMemoryInGbs"></a>

```java
public void resetMemoryInGbs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.memoryInGbsInput">memoryInGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.ocpusInput">ocpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `memoryInGbsInput`<sup>Optional</sup> <a name="memoryInGbsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.memoryInGbsInput"></a>

```java
public java.lang.Number getMemoryInGbsInput();
```

- *Type:* java.lang.Number

---

##### `ocpusInput`<sup>Optional</sup> <a name="ocpusInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.ocpusInput"></a>

```java
public java.lang.Number getOcpusInput();
```

- *Type:* java.lang.Number

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.internalValue"></a>

```java
public DevopsDeployStageContainerConfigShapeConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a>

---


### DevopsDeployStageDeployStagePredecessorCollectionItemsList <a name="DevopsDeployStageDeployStagePredecessorCollectionItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageDeployStagePredecessorCollectionItemsList;

new DevopsDeployStageDeployStagePredecessorCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.get"></a>

```java
public DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>>

---


### DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference <a name="DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference;

new DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>

---


### DevopsDeployStageDeployStagePredecessorCollectionOutputReference <a name="DevopsDeployStageDeployStagePredecessorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference;

new DevopsDeployStageDeployStagePredecessorCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.putItems">putItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.putItems"></a>

```java
public void putItems(IResolvable OR java.util.List<DevopsDeployStageDeployStagePredecessorCollectionItems> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.putItems.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList">DevopsDeployStageDeployStagePredecessorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.itemsInput">itemsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.items"></a>

```java
public DevopsDeployStageDeployStagePredecessorCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList">DevopsDeployStageDeployStagePredecessorCollectionItemsList</a>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.itemsInput"></a>

```java
public java.lang.Object getItemsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.internalValue"></a>

```java
public DevopsDeployStageDeployStagePredecessorCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a>

---


### DevopsDeployStageFailurePolicyOutputReference <a name="DevopsDeployStageFailurePolicyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageFailurePolicyOutputReference;

new DevopsDeployStageFailurePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resetFailureCount">resetFailureCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resetFailurePercentage">resetFailurePercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailureCount` <a name="resetFailureCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resetFailureCount"></a>

```java
public void resetFailureCount()
```

##### `resetFailurePercentage` <a name="resetFailurePercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resetFailurePercentage"></a>

```java
public void resetFailurePercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failureCountInput">failureCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failurePercentageInput">failurePercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.policyTypeInput">policyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failureCount">failureCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failurePercentage">failurePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failureCountInput`<sup>Optional</sup> <a name="failureCountInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failureCountInput"></a>

```java
public java.lang.Number getFailureCountInput();
```

- *Type:* java.lang.Number

---

##### `failurePercentageInput`<sup>Optional</sup> <a name="failurePercentageInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failurePercentageInput"></a>

```java
public java.lang.Number getFailurePercentageInput();
```

- *Type:* java.lang.Number

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.policyTypeInput"></a>

```java
public java.lang.String getPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `failureCount`<sup>Required</sup> <a name="failureCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failureCount"></a>

```java
public java.lang.Number getFailureCount();
```

- *Type:* java.lang.Number

---

##### `failurePercentage`<sup>Required</sup> <a name="failurePercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failurePercentage"></a>

```java
public java.lang.Number getFailurePercentage();
```

- *Type:* java.lang.Number

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.internalValue"></a>

```java
public DevopsDeployStageFailurePolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a>

---


### DevopsDeployStageGreenBackendIpsOutputReference <a name="DevopsDeployStageGreenBackendIpsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageGreenBackendIpsOutputReference;

new DevopsDeployStageGreenBackendIpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.resetItems">resetItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetItems` <a name="resetItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.resetItems"></a>

```java
public void resetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.itemsInput">itemsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.items">items</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.itemsInput"></a>

```java
public java.util.List<java.lang.String> getItemsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.items"></a>

```java
public java.util.List<java.lang.String> getItems();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.internalValue"></a>

```java
public DevopsDeployStageGreenBackendIps getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a>

---


### DevopsDeployStageLoadBalancerConfigOutputReference <a name="DevopsDeployStageLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageLoadBalancerConfigOutputReference;

new DevopsDeployStageLoadBalancerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetBackendPort">resetBackendPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetListenerName">resetListenerName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetLoadBalancerId">resetLoadBalancerId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackendPort` <a name="resetBackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetBackendPort"></a>

```java
public void resetBackendPort()
```

##### `resetListenerName` <a name="resetListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetListenerName"></a>

```java
public void resetListenerName()
```

##### `resetLoadBalancerId` <a name="resetLoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetLoadBalancerId"></a>

```java
public void resetLoadBalancerId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.backendPortInput">backendPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.listenerNameInput">listenerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.loadBalancerIdInput">loadBalancerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.backendPort">backendPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.listenerName">listenerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `backendPortInput`<sup>Optional</sup> <a name="backendPortInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.backendPortInput"></a>

```java
public java.lang.Number getBackendPortInput();
```

- *Type:* java.lang.Number

---

##### `listenerNameInput`<sup>Optional</sup> <a name="listenerNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.listenerNameInput"></a>

```java
public java.lang.String getListenerNameInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerIdInput`<sup>Optional</sup> <a name="loadBalancerIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.loadBalancerIdInput"></a>

```java
public java.lang.String getLoadBalancerIdInput();
```

- *Type:* java.lang.String

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.backendPort"></a>

```java
public java.lang.Number getBackendPort();
```

- *Type:* java.lang.Number

---

##### `listenerName`<sup>Required</sup> <a name="listenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.listenerName"></a>

```java
public java.lang.String getListenerName();
```

- *Type:* java.lang.String

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.internalValue"></a>

```java
public DevopsDeployStageLoadBalancerConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a>

---


### DevopsDeployStageProductionLoadBalancerConfigOutputReference <a name="DevopsDeployStageProductionLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageProductionLoadBalancerConfigOutputReference;

new DevopsDeployStageProductionLoadBalancerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetBackendPort">resetBackendPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetListenerName">resetListenerName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetLoadBalancerId">resetLoadBalancerId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackendPort` <a name="resetBackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetBackendPort"></a>

```java
public void resetBackendPort()
```

##### `resetListenerName` <a name="resetListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetListenerName"></a>

```java
public void resetListenerName()
```

##### `resetLoadBalancerId` <a name="resetLoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetLoadBalancerId"></a>

```java
public void resetLoadBalancerId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.backendPortInput">backendPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.listenerNameInput">listenerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.loadBalancerIdInput">loadBalancerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.backendPort">backendPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.listenerName">listenerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `backendPortInput`<sup>Optional</sup> <a name="backendPortInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.backendPortInput"></a>

```java
public java.lang.Number getBackendPortInput();
```

- *Type:* java.lang.Number

---

##### `listenerNameInput`<sup>Optional</sup> <a name="listenerNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.listenerNameInput"></a>

```java
public java.lang.String getListenerNameInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerIdInput`<sup>Optional</sup> <a name="loadBalancerIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.loadBalancerIdInput"></a>

```java
public java.lang.String getLoadBalancerIdInput();
```

- *Type:* java.lang.String

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.backendPort"></a>

```java
public java.lang.Number getBackendPort();
```

- *Type:* java.lang.Number

---

##### `listenerName`<sup>Required</sup> <a name="listenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.listenerName"></a>

```java
public java.lang.String getListenerName();
```

- *Type:* java.lang.String

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.internalValue"></a>

```java
public DevopsDeployStageProductionLoadBalancerConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a>

---


### DevopsDeployStageRollbackPolicyOutputReference <a name="DevopsDeployStageRollbackPolicyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageRollbackPolicyOutputReference;

new DevopsDeployStageRollbackPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.resetPolicyType">resetPolicyType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicyType` <a name="resetPolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.resetPolicyType"></a>

```java
public void resetPolicyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.policyTypeInput">policyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.policyTypeInput"></a>

```java
public java.lang.String getPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.internalValue"></a>

```java
public DevopsDeployStageRollbackPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a>

---


### DevopsDeployStageRolloutPolicyOutputReference <a name="DevopsDeployStageRolloutPolicyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageRolloutPolicyOutputReference;

new DevopsDeployStageRolloutPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchCount">resetBatchCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchDelayInSeconds">resetBatchDelayInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchPercentage">resetBatchPercentage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetPolicyType">resetPolicyType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetRampLimitPercent">resetRampLimitPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchCount` <a name="resetBatchCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchCount"></a>

```java
public void resetBatchCount()
```

##### `resetBatchDelayInSeconds` <a name="resetBatchDelayInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchDelayInSeconds"></a>

```java
public void resetBatchDelayInSeconds()
```

##### `resetBatchPercentage` <a name="resetBatchPercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchPercentage"></a>

```java
public void resetBatchPercentage()
```

##### `resetPolicyType` <a name="resetPolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetPolicyType"></a>

```java
public void resetPolicyType()
```

##### `resetRampLimitPercent` <a name="resetRampLimitPercent" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetRampLimitPercent"></a>

```java
public void resetRampLimitPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchCountInput">batchCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchDelayInSecondsInput">batchDelayInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchPercentageInput">batchPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.policyTypeInput">policyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.rampLimitPercentInput">rampLimitPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchCount">batchCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchDelayInSeconds">batchDelayInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchPercentage">batchPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.rampLimitPercent">rampLimitPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `batchCountInput`<sup>Optional</sup> <a name="batchCountInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchCountInput"></a>

```java
public java.lang.Number getBatchCountInput();
```

- *Type:* java.lang.Number

---

##### `batchDelayInSecondsInput`<sup>Optional</sup> <a name="batchDelayInSecondsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchDelayInSecondsInput"></a>

```java
public java.lang.Number getBatchDelayInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `batchPercentageInput`<sup>Optional</sup> <a name="batchPercentageInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchPercentageInput"></a>

```java
public java.lang.Number getBatchPercentageInput();
```

- *Type:* java.lang.Number

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.policyTypeInput"></a>

```java
public java.lang.String getPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `rampLimitPercentInput`<sup>Optional</sup> <a name="rampLimitPercentInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.rampLimitPercentInput"></a>

```java
public java.lang.Number getRampLimitPercentInput();
```

- *Type:* java.lang.Number

---

##### `batchCount`<sup>Required</sup> <a name="batchCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchCount"></a>

```java
public java.lang.Number getBatchCount();
```

- *Type:* java.lang.Number

---

##### `batchDelayInSeconds`<sup>Required</sup> <a name="batchDelayInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchDelayInSeconds"></a>

```java
public java.lang.Number getBatchDelayInSeconds();
```

- *Type:* java.lang.Number

---

##### `batchPercentage`<sup>Required</sup> <a name="batchPercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchPercentage"></a>

```java
public java.lang.Number getBatchPercentage();
```

- *Type:* java.lang.Number

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

##### `rampLimitPercent`<sup>Required</sup> <a name="rampLimitPercent" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.rampLimitPercent"></a>

```java
public java.lang.Number getRampLimitPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.internalValue"></a>

```java
public DevopsDeployStageRolloutPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a>

---


### DevopsDeployStageSetStringItemsList <a name="DevopsDeployStageSetStringItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageSetStringItemsList;

new DevopsDeployStageSetStringItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.get"></a>

```java
public DevopsDeployStageSetStringItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>>

---


### DevopsDeployStageSetStringItemsOutputReference <a name="DevopsDeployStageSetStringItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageSetStringItemsOutputReference;

new DevopsDeployStageSetStringItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>

---


### DevopsDeployStageSetStringOutputReference <a name="DevopsDeployStageSetStringOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageSetStringOutputReference;

new DevopsDeployStageSetStringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.putItems">putItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.resetItems">resetItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.putItems"></a>

```java
public void putItems(IResolvable OR java.util.List<DevopsDeployStageSetStringItems> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.putItems.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>>

---

##### `resetItems` <a name="resetItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.resetItems"></a>

```java
public void resetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList">DevopsDeployStageSetStringItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.itemsInput">itemsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.items"></a>

```java
public DevopsDeployStageSetStringItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList">DevopsDeployStageSetStringItemsList</a>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.itemsInput"></a>

```java
public java.lang.Object getItemsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.internalValue"></a>

```java
public DevopsDeployStageSetString getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a>

---


### DevopsDeployStageSetValuesItemsList <a name="DevopsDeployStageSetValuesItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageSetValuesItemsList;

new DevopsDeployStageSetValuesItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.get"></a>

```java
public DevopsDeployStageSetValuesItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>>

---


### DevopsDeployStageSetValuesItemsOutputReference <a name="DevopsDeployStageSetValuesItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageSetValuesItemsOutputReference;

new DevopsDeployStageSetValuesItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>

---


### DevopsDeployStageSetValuesOutputReference <a name="DevopsDeployStageSetValuesOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageSetValuesOutputReference;

new DevopsDeployStageSetValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.putItems">putItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.resetItems">resetItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.putItems"></a>

```java
public void putItems(IResolvable OR java.util.List<DevopsDeployStageSetValuesItems> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.putItems.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>>

---

##### `resetItems` <a name="resetItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.resetItems"></a>

```java
public void resetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList">DevopsDeployStageSetValuesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.itemsInput">itemsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.items"></a>

```java
public DevopsDeployStageSetValuesItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList">DevopsDeployStageSetValuesItemsList</a>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.itemsInput"></a>

```java
public java.lang.Object getItemsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.internalValue"></a>

```java
public DevopsDeployStageSetValues getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a>

---


### DevopsDeployStageTestLoadBalancerConfigOutputReference <a name="DevopsDeployStageTestLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageTestLoadBalancerConfigOutputReference;

new DevopsDeployStageTestLoadBalancerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetBackendPort">resetBackendPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetListenerName">resetListenerName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetLoadBalancerId">resetLoadBalancerId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackendPort` <a name="resetBackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetBackendPort"></a>

```java
public void resetBackendPort()
```

##### `resetListenerName` <a name="resetListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetListenerName"></a>

```java
public void resetListenerName()
```

##### `resetLoadBalancerId` <a name="resetLoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetLoadBalancerId"></a>

```java
public void resetLoadBalancerId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.backendPortInput">backendPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.listenerNameInput">listenerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.loadBalancerIdInput">loadBalancerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.backendPort">backendPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.listenerName">listenerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `backendPortInput`<sup>Optional</sup> <a name="backendPortInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.backendPortInput"></a>

```java
public java.lang.Number getBackendPortInput();
```

- *Type:* java.lang.Number

---

##### `listenerNameInput`<sup>Optional</sup> <a name="listenerNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.listenerNameInput"></a>

```java
public java.lang.String getListenerNameInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerIdInput`<sup>Optional</sup> <a name="loadBalancerIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.loadBalancerIdInput"></a>

```java
public java.lang.String getLoadBalancerIdInput();
```

- *Type:* java.lang.String

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.backendPort"></a>

```java
public java.lang.Number getBackendPort();
```

- *Type:* java.lang.Number

---

##### `listenerName`<sup>Required</sup> <a name="listenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.listenerName"></a>

```java
public java.lang.String getListenerName();
```

- *Type:* java.lang.String

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.internalValue"></a>

```java
public DevopsDeployStageTestLoadBalancerConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a>

---


### DevopsDeployStageTimeoutsOutputReference <a name="DevopsDeployStageTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageTimeoutsOutputReference;

new DevopsDeployStageTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a>

---


### DevopsDeployStageWaitCriteriaOutputReference <a name="DevopsDeployStageWaitCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.devops_deploy_stage.DevopsDeployStageWaitCriteriaOutputReference;

new DevopsDeployStageWaitCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitDurationInput">waitDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitTypeInput">waitTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitDuration">waitDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitType">waitType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `waitDurationInput`<sup>Optional</sup> <a name="waitDurationInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitDurationInput"></a>

```java
public java.lang.String getWaitDurationInput();
```

- *Type:* java.lang.String

---

##### `waitTypeInput`<sup>Optional</sup> <a name="waitTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitTypeInput"></a>

```java
public java.lang.String getWaitTypeInput();
```

- *Type:* java.lang.String

---

##### `waitDuration`<sup>Required</sup> <a name="waitDuration" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitDuration"></a>

```java
public java.lang.String getWaitDuration();
```

- *Type:* java.lang.String

---

##### `waitType`<sup>Required</sup> <a name="waitType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitType"></a>

```java
public java.lang.String getWaitType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.internalValue"></a>

```java
public DevopsDeployStageWaitCriteria getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a>

---



