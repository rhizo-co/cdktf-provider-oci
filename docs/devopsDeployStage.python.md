# `devopsDeployStage` Submodule <a name="`devopsDeployStage` Submodule" id="rhizo-co-terraform-provider-oci.devopsDeployStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsDeployStage <a name="DevopsDeployStage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage oci_devops_deploy_stage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStage(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  deploy_pipeline_id: str,
  deploy_stage_predecessor_collection: DevopsDeployStageDeployStagePredecessorCollection,
  deploy_stage_type: str,
  approval_policy: DevopsDeployStageApprovalPolicy = None,
  are_hooks_enabled: typing.Union[bool, IResolvable] = None,
  blue_backend_ips: DevopsDeployStageBlueBackendIps = None,
  blue_green_strategy: DevopsDeployStageBlueGreenStrategy = None,
  canary_strategy: DevopsDeployStageCanaryStrategy = None,
  command_spec_deploy_artifact_id: str = None,
  compute_instance_group_blue_green_deployment_deploy_stage_id: str = None,
  compute_instance_group_canary_deploy_stage_id: str = None,
  compute_instance_group_canary_traffic_shift_deploy_stage_id: str = None,
  compute_instance_group_deploy_environment_id: str = None,
  config: typing.Mapping[str] = None,
  container_config: DevopsDeployStageContainerConfig = None,
  defined_tags: typing.Mapping[str] = None,
  deploy_artifact_id: str = None,
  deploy_artifact_ids: typing.List[str] = None,
  deploy_environment_id_a: str = None,
  deploy_environment_id_b: str = None,
  deployment_spec_deploy_artifact_id: str = None,
  description: str = None,
  display_name: str = None,
  docker_image_deploy_artifact_id: str = None,
  failure_policy: DevopsDeployStageFailurePolicy = None,
  freeform_tags: typing.Mapping[str] = None,
  function_deploy_environment_id: str = None,
  function_timeout_in_seconds: typing.Union[int, float] = None,
  green_backend_ips: DevopsDeployStageGreenBackendIps = None,
  helm_chart_deploy_artifact_id: str = None,
  helm_command_artifact_ids: typing.List[str] = None,
  id: str = None,
  is_async: typing.Union[bool, IResolvable] = None,
  is_debug_enabled: typing.Union[bool, IResolvable] = None,
  is_force_enabled: typing.Union[bool, IResolvable] = None,
  is_uninstall_on_stage_delete: typing.Union[bool, IResolvable] = None,
  is_validation_enabled: typing.Union[bool, IResolvable] = None,
  kubernetes_manifest_deploy_artifact_ids: typing.List[str] = None,
  load_balancer_config: DevopsDeployStageLoadBalancerConfig = None,
  max_history: typing.Union[int, float] = None,
  max_memory_in_mbs: str = None,
  namespace: str = None,
  oke_blue_green_deploy_stage_id: str = None,
  oke_canary_deploy_stage_id: str = None,
  oke_canary_traffic_shift_deploy_stage_id: str = None,
  oke_cluster_deploy_environment_id: str = None,
  production_load_balancer_config: DevopsDeployStageProductionLoadBalancerConfig = None,
  purpose: str = None,
  release_name: str = None,
  rollback_policy: DevopsDeployStageRollbackPolicy = None,
  rollout_policy: DevopsDeployStageRolloutPolicy = None,
  set_string: DevopsDeployStageSetString = None,
  set_values: DevopsDeployStageSetValues = None,
  should_cleanup_on_fail: typing.Union[bool, IResolvable] = None,
  should_not_wait: typing.Union[bool, IResolvable] = None,
  should_reset_values: typing.Union[bool, IResolvable] = None,
  should_reuse_values: typing.Union[bool, IResolvable] = None,
  should_skip_crds: typing.Union[bool, IResolvable] = None,
  should_skip_render_subchart_notes: typing.Union[bool, IResolvable] = None,
  test_load_balancer_config: DevopsDeployStageTestLoadBalancerConfig = None,
  timeout_in_seconds: typing.Union[int, float] = None,
  timeouts: DevopsDeployStageTimeouts = None,
  traffic_shift_target: str = None,
  values_artifact_ids: typing.List[str] = None,
  wait_criteria: DevopsDeployStageWaitCriteria = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployPipelineId">deploy_pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_pipeline_id DevopsDeployStage#deploy_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployStagePredecessorCollection">deploy_stage_predecessor_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a></code> | deploy_stage_predecessor_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployStageType">deploy_stage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_stage_type DevopsDeployStage#deploy_stage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.approvalPolicy">approval_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a></code> | approval_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.areHooksEnabled">are_hooks_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#are_hooks_enabled DevopsDeployStage#are_hooks_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.blueBackendIps">blue_backend_ips</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a></code> | blue_backend_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.blueGreenStrategy">blue_green_strategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a></code> | blue_green_strategy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.canaryStrategy">canary_strategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a></code> | canary_strategy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.commandSpecDeployArtifactId">command_spec_deploy_artifact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#command_spec_deploy_artifact_id DevopsDeployStage#command_spec_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.computeInstanceGroupBlueGreenDeploymentDeployStageId">compute_instance_group_blue_green_deployment_deploy_stage_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_blue_green_deployment_deploy_stage_id DevopsDeployStage#compute_instance_group_blue_green_deployment_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.computeInstanceGroupCanaryDeployStageId">compute_instance_group_canary_deploy_stage_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.computeInstanceGroupCanaryTrafficShiftDeployStageId">compute_instance_group_canary_traffic_shift_deploy_stage_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_traffic_shift_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_traffic_shift_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.computeInstanceGroupDeployEnvironmentId">compute_instance_group_deploy_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_deploy_environment_id DevopsDeployStage#compute_instance_group_deploy_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.config">config</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#config DevopsDeployStage#config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.containerConfig">container_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a></code> | container_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#defined_tags DevopsDeployStage#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployArtifactId">deploy_artifact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_id DevopsDeployStage#deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployArtifactIds">deploy_artifact_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_ids DevopsDeployStage#deploy_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployEnvironmentIdA">deploy_environment_id_a</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_a DevopsDeployStage#deploy_environment_id_a}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployEnvironmentIdB">deploy_environment_id_b</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_b DevopsDeployStage#deploy_environment_id_b}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deploymentSpecDeployArtifactId">deployment_spec_deploy_artifact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deployment_spec_deploy_artifact_id DevopsDeployStage#deployment_spec_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#description DevopsDeployStage#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#display_name DevopsDeployStage#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.dockerImageDeployArtifactId">docker_image_deploy_artifact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#docker_image_deploy_artifact_id DevopsDeployStage#docker_image_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.failurePolicy">failure_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a></code> | failure_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#freeform_tags DevopsDeployStage#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.functionDeployEnvironmentId">function_deploy_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_deploy_environment_id DevopsDeployStage#function_deploy_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.functionTimeoutInSeconds">function_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_timeout_in_seconds DevopsDeployStage#function_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.greenBackendIps">green_backend_ips</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a></code> | green_backend_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.helmChartDeployArtifactId">helm_chart_deploy_artifact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_chart_deploy_artifact_id DevopsDeployStage#helm_chart_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.helmCommandArtifactIds">helm_command_artifact_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_command_artifact_ids DevopsDeployStage#helm_command_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.isAsync">is_async</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_async DevopsDeployStage#is_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.isDebugEnabled">is_debug_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_debug_enabled DevopsDeployStage#is_debug_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.isForceEnabled">is_force_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_force_enabled DevopsDeployStage#is_force_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.isUninstallOnStageDelete">is_uninstall_on_stage_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_uninstall_on_stage_delete DevopsDeployStage#is_uninstall_on_stage_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.isValidationEnabled">is_validation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_validation_enabled DevopsDeployStage#is_validation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.kubernetesManifestDeployArtifactIds">kubernetes_manifest_deploy_artifact_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#kubernetes_manifest_deploy_artifact_ids DevopsDeployStage#kubernetes_manifest_deploy_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.loadBalancerConfig">load_balancer_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a></code> | load_balancer_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.maxHistory">max_history</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_history DevopsDeployStage#max_history}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.maxMemoryInMbs">max_memory_in_mbs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_memory_in_mbs DevopsDeployStage#max_memory_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.okeBlueGreenDeployStageId">oke_blue_green_deploy_stage_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_blue_green_deploy_stage_id DevopsDeployStage#oke_blue_green_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.okeCanaryDeployStageId">oke_canary_deploy_stage_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_deploy_stage_id DevopsDeployStage#oke_canary_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.okeCanaryTrafficShiftDeployStageId">oke_canary_traffic_shift_deploy_stage_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_traffic_shift_deploy_stage_id DevopsDeployStage#oke_canary_traffic_shift_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.okeClusterDeployEnvironmentId">oke_cluster_deploy_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_cluster_deploy_environment_id DevopsDeployStage#oke_cluster_deploy_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.productionLoadBalancerConfig">production_load_balancer_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a></code> | production_load_balancer_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.purpose">purpose</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#purpose DevopsDeployStage#purpose}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.releaseName">release_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#release_name DevopsDeployStage#release_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.rollbackPolicy">rollback_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a></code> | rollback_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.rolloutPolicy">rollout_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a></code> | rollout_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.setString">set_string</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a></code> | set_string block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.setValues">set_values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a></code> | set_values block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldCleanupOnFail">should_cleanup_on_fail</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_cleanup_on_fail DevopsDeployStage#should_cleanup_on_fail}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldNotWait">should_not_wait</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_not_wait DevopsDeployStage#should_not_wait}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldResetValues">should_reset_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reset_values DevopsDeployStage#should_reset_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldReuseValues">should_reuse_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reuse_values DevopsDeployStage#should_reuse_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldSkipCrds">should_skip_crds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_crds DevopsDeployStage#should_skip_crds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldSkipRenderSubchartNotes">should_skip_render_subchart_notes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_render_subchart_notes DevopsDeployStage#should_skip_render_subchart_notes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.testLoadBalancerConfig">test_load_balancer_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a></code> | test_load_balancer_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#timeout_in_seconds DevopsDeployStage#timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.trafficShiftTarget">traffic_shift_target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#traffic_shift_target DevopsDeployStage#traffic_shift_target}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.valuesArtifactIds">values_artifact_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#values_artifact_ids DevopsDeployStage#values_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.waitCriteria">wait_criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a></code> | wait_criteria block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `deploy_pipeline_id`<sup>Required</sup> <a name="deploy_pipeline_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployPipelineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_pipeline_id DevopsDeployStage#deploy_pipeline_id}.

---

##### `deploy_stage_predecessor_collection`<sup>Required</sup> <a name="deploy_stage_predecessor_collection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployStagePredecessorCollection"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a>

deploy_stage_predecessor_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_stage_predecessor_collection DevopsDeployStage#deploy_stage_predecessor_collection}

---

##### `deploy_stage_type`<sup>Required</sup> <a name="deploy_stage_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployStageType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_stage_type DevopsDeployStage#deploy_stage_type}.

---

##### `approval_policy`<sup>Optional</sup> <a name="approval_policy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.approvalPolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a>

approval_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#approval_policy DevopsDeployStage#approval_policy}

---

##### `are_hooks_enabled`<sup>Optional</sup> <a name="are_hooks_enabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.areHooksEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#are_hooks_enabled DevopsDeployStage#are_hooks_enabled}.

---

##### `blue_backend_ips`<sup>Optional</sup> <a name="blue_backend_ips" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.blueBackendIps"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a>

blue_backend_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#blue_backend_ips DevopsDeployStage#blue_backend_ips}

---

##### `blue_green_strategy`<sup>Optional</sup> <a name="blue_green_strategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.blueGreenStrategy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a>

blue_green_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#blue_green_strategy DevopsDeployStage#blue_green_strategy}

---

##### `canary_strategy`<sup>Optional</sup> <a name="canary_strategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.canaryStrategy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a>

canary_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#canary_strategy DevopsDeployStage#canary_strategy}

---

##### `command_spec_deploy_artifact_id`<sup>Optional</sup> <a name="command_spec_deploy_artifact_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.commandSpecDeployArtifactId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#command_spec_deploy_artifact_id DevopsDeployStage#command_spec_deploy_artifact_id}.

---

##### `compute_instance_group_blue_green_deployment_deploy_stage_id`<sup>Optional</sup> <a name="compute_instance_group_blue_green_deployment_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.computeInstanceGroupBlueGreenDeploymentDeployStageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_blue_green_deployment_deploy_stage_id DevopsDeployStage#compute_instance_group_blue_green_deployment_deploy_stage_id}.

---

##### `compute_instance_group_canary_deploy_stage_id`<sup>Optional</sup> <a name="compute_instance_group_canary_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.computeInstanceGroupCanaryDeployStageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_deploy_stage_id}.

---

##### `compute_instance_group_canary_traffic_shift_deploy_stage_id`<sup>Optional</sup> <a name="compute_instance_group_canary_traffic_shift_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.computeInstanceGroupCanaryTrafficShiftDeployStageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_traffic_shift_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_traffic_shift_deploy_stage_id}.

---

##### `compute_instance_group_deploy_environment_id`<sup>Optional</sup> <a name="compute_instance_group_deploy_environment_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.computeInstanceGroupDeployEnvironmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_deploy_environment_id DevopsDeployStage#compute_instance_group_deploy_environment_id}.

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.config"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#config DevopsDeployStage#config}.

---

##### `container_config`<sup>Optional</sup> <a name="container_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.containerConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a>

container_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#container_config DevopsDeployStage#container_config}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#defined_tags DevopsDeployStage#defined_tags}.

---

##### `deploy_artifact_id`<sup>Optional</sup> <a name="deploy_artifact_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployArtifactId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_id DevopsDeployStage#deploy_artifact_id}.

---

##### `deploy_artifact_ids`<sup>Optional</sup> <a name="deploy_artifact_ids" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployArtifactIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_ids DevopsDeployStage#deploy_artifact_ids}.

---

##### `deploy_environment_id_a`<sup>Optional</sup> <a name="deploy_environment_id_a" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployEnvironmentIdA"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_a DevopsDeployStage#deploy_environment_id_a}.

---

##### `deploy_environment_id_b`<sup>Optional</sup> <a name="deploy_environment_id_b" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deployEnvironmentIdB"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_b DevopsDeployStage#deploy_environment_id_b}.

---

##### `deployment_spec_deploy_artifact_id`<sup>Optional</sup> <a name="deployment_spec_deploy_artifact_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.deploymentSpecDeployArtifactId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deployment_spec_deploy_artifact_id DevopsDeployStage#deployment_spec_deploy_artifact_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#description DevopsDeployStage#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#display_name DevopsDeployStage#display_name}.

---

##### `docker_image_deploy_artifact_id`<sup>Optional</sup> <a name="docker_image_deploy_artifact_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.dockerImageDeployArtifactId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#docker_image_deploy_artifact_id DevopsDeployStage#docker_image_deploy_artifact_id}.

---

##### `failure_policy`<sup>Optional</sup> <a name="failure_policy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.failurePolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a>

failure_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_policy DevopsDeployStage#failure_policy}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#freeform_tags DevopsDeployStage#freeform_tags}.

---

##### `function_deploy_environment_id`<sup>Optional</sup> <a name="function_deploy_environment_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.functionDeployEnvironmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_deploy_environment_id DevopsDeployStage#function_deploy_environment_id}.

---

##### `function_timeout_in_seconds`<sup>Optional</sup> <a name="function_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.functionTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_timeout_in_seconds DevopsDeployStage#function_timeout_in_seconds}.

---

##### `green_backend_ips`<sup>Optional</sup> <a name="green_backend_ips" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.greenBackendIps"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a>

green_backend_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#green_backend_ips DevopsDeployStage#green_backend_ips}

---

##### `helm_chart_deploy_artifact_id`<sup>Optional</sup> <a name="helm_chart_deploy_artifact_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.helmChartDeployArtifactId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_chart_deploy_artifact_id DevopsDeployStage#helm_chart_deploy_artifact_id}.

---

##### `helm_command_artifact_ids`<sup>Optional</sup> <a name="helm_command_artifact_ids" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.helmCommandArtifactIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_command_artifact_ids DevopsDeployStage#helm_command_artifact_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_async`<sup>Optional</sup> <a name="is_async" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.isAsync"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_async DevopsDeployStage#is_async}.

---

##### `is_debug_enabled`<sup>Optional</sup> <a name="is_debug_enabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.isDebugEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_debug_enabled DevopsDeployStage#is_debug_enabled}.

---

##### `is_force_enabled`<sup>Optional</sup> <a name="is_force_enabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.isForceEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_force_enabled DevopsDeployStage#is_force_enabled}.

---

##### `is_uninstall_on_stage_delete`<sup>Optional</sup> <a name="is_uninstall_on_stage_delete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.isUninstallOnStageDelete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_uninstall_on_stage_delete DevopsDeployStage#is_uninstall_on_stage_delete}.

---

##### `is_validation_enabled`<sup>Optional</sup> <a name="is_validation_enabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.isValidationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_validation_enabled DevopsDeployStage#is_validation_enabled}.

---

##### `kubernetes_manifest_deploy_artifact_ids`<sup>Optional</sup> <a name="kubernetes_manifest_deploy_artifact_ids" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.kubernetesManifestDeployArtifactIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#kubernetes_manifest_deploy_artifact_ids DevopsDeployStage#kubernetes_manifest_deploy_artifact_ids}.

---

##### `load_balancer_config`<sup>Optional</sup> <a name="load_balancer_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.loadBalancerConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a>

load_balancer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_config DevopsDeployStage#load_balancer_config}

---

##### `max_history`<sup>Optional</sup> <a name="max_history" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.maxHistory"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_history DevopsDeployStage#max_history}.

---

##### `max_memory_in_mbs`<sup>Optional</sup> <a name="max_memory_in_mbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.maxMemoryInMbs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_memory_in_mbs DevopsDeployStage#max_memory_in_mbs}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}.

---

##### `oke_blue_green_deploy_stage_id`<sup>Optional</sup> <a name="oke_blue_green_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.okeBlueGreenDeployStageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_blue_green_deploy_stage_id DevopsDeployStage#oke_blue_green_deploy_stage_id}.

---

##### `oke_canary_deploy_stage_id`<sup>Optional</sup> <a name="oke_canary_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.okeCanaryDeployStageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_deploy_stage_id DevopsDeployStage#oke_canary_deploy_stage_id}.

---

##### `oke_canary_traffic_shift_deploy_stage_id`<sup>Optional</sup> <a name="oke_canary_traffic_shift_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.okeCanaryTrafficShiftDeployStageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_traffic_shift_deploy_stage_id DevopsDeployStage#oke_canary_traffic_shift_deploy_stage_id}.

---

##### `oke_cluster_deploy_environment_id`<sup>Optional</sup> <a name="oke_cluster_deploy_environment_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.okeClusterDeployEnvironmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_cluster_deploy_environment_id DevopsDeployStage#oke_cluster_deploy_environment_id}.

---

##### `production_load_balancer_config`<sup>Optional</sup> <a name="production_load_balancer_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.productionLoadBalancerConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a>

production_load_balancer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#production_load_balancer_config DevopsDeployStage#production_load_balancer_config}

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.purpose"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#purpose DevopsDeployStage#purpose}.

---

##### `release_name`<sup>Optional</sup> <a name="release_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.releaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#release_name DevopsDeployStage#release_name}.

---

##### `rollback_policy`<sup>Optional</sup> <a name="rollback_policy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.rollbackPolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a>

rollback_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#rollback_policy DevopsDeployStage#rollback_policy}

---

##### `rollout_policy`<sup>Optional</sup> <a name="rollout_policy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.rolloutPolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a>

rollout_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#rollout_policy DevopsDeployStage#rollout_policy}

---

##### `set_string`<sup>Optional</sup> <a name="set_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.setString"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a>

set_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#set_string DevopsDeployStage#set_string}

---

##### `set_values`<sup>Optional</sup> <a name="set_values" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.setValues"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a>

set_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#set_values DevopsDeployStage#set_values}

---

##### `should_cleanup_on_fail`<sup>Optional</sup> <a name="should_cleanup_on_fail" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldCleanupOnFail"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_cleanup_on_fail DevopsDeployStage#should_cleanup_on_fail}.

---

##### `should_not_wait`<sup>Optional</sup> <a name="should_not_wait" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldNotWait"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_not_wait DevopsDeployStage#should_not_wait}.

---

##### `should_reset_values`<sup>Optional</sup> <a name="should_reset_values" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldResetValues"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reset_values DevopsDeployStage#should_reset_values}.

---

##### `should_reuse_values`<sup>Optional</sup> <a name="should_reuse_values" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldReuseValues"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reuse_values DevopsDeployStage#should_reuse_values}.

---

##### `should_skip_crds`<sup>Optional</sup> <a name="should_skip_crds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldSkipCrds"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_crds DevopsDeployStage#should_skip_crds}.

---

##### `should_skip_render_subchart_notes`<sup>Optional</sup> <a name="should_skip_render_subchart_notes" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.shouldSkipRenderSubchartNotes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_render_subchart_notes DevopsDeployStage#should_skip_render_subchart_notes}.

---

##### `test_load_balancer_config`<sup>Optional</sup> <a name="test_load_balancer_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.testLoadBalancerConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a>

test_load_balancer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#test_load_balancer_config DevopsDeployStage#test_load_balancer_config}

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.timeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#timeout_in_seconds DevopsDeployStage#timeout_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#timeouts DevopsDeployStage#timeouts}

---

##### `traffic_shift_target`<sup>Optional</sup> <a name="traffic_shift_target" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.trafficShiftTarget"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#traffic_shift_target DevopsDeployStage#traffic_shift_target}.

---

##### `values_artifact_ids`<sup>Optional</sup> <a name="values_artifact_ids" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.valuesArtifactIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#values_artifact_ids DevopsDeployStage#values_artifact_ids}.

---

##### `wait_criteria`<sup>Optional</sup> <a name="wait_criteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.waitCriteria"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a>

wait_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_criteria DevopsDeployStage#wait_criteria}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putApprovalPolicy">put_approval_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueBackendIps">put_blue_backend_ips</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueGreenStrategy">put_blue_green_strategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putCanaryStrategy">put_canary_strategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putContainerConfig">put_container_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putDeployStagePredecessorCollection">put_deploy_stage_predecessor_collection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putFailurePolicy">put_failure_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putGreenBackendIps">put_green_backend_ips</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putLoadBalancerConfig">put_load_balancer_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putProductionLoadBalancerConfig">put_production_load_balancer_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRollbackPolicy">put_rollback_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRolloutPolicy">put_rollout_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetString">put_set_string</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetValues">put_set_values</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTestLoadBalancerConfig">put_test_load_balancer_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putWaitCriteria">put_wait_criteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetApprovalPolicy">reset_approval_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetAreHooksEnabled">reset_are_hooks_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetBlueBackendIps">reset_blue_backend_ips</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetBlueGreenStrategy">reset_blue_green_strategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetCanaryStrategy">reset_canary_strategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetCommandSpecDeployArtifactId">reset_command_spec_deploy_artifact_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupBlueGreenDeploymentDeployStageId">reset_compute_instance_group_blue_green_deployment_deploy_stage_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupCanaryDeployStageId">reset_compute_instance_group_canary_deploy_stage_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupCanaryTrafficShiftDeployStageId">reset_compute_instance_group_canary_traffic_shift_deploy_stage_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupDeployEnvironmentId">reset_compute_instance_group_deploy_environment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetContainerConfig">reset_container_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployArtifactId">reset_deploy_artifact_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployArtifactIds">reset_deploy_artifact_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployEnvironmentIdA">reset_deploy_environment_id_a</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployEnvironmentIdB">reset_deploy_environment_id_b</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeploymentSpecDeployArtifactId">reset_deployment_spec_deploy_artifact_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDockerImageDeployArtifactId">reset_docker_image_deploy_artifact_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFailurePolicy">reset_failure_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFunctionDeployEnvironmentId">reset_function_deploy_environment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFunctionTimeoutInSeconds">reset_function_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetGreenBackendIps">reset_green_backend_ips</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetHelmChartDeployArtifactId">reset_helm_chart_deploy_artifact_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetHelmCommandArtifactIds">reset_helm_command_artifact_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsAsync">reset_is_async</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsDebugEnabled">reset_is_debug_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsForceEnabled">reset_is_force_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsUninstallOnStageDelete">reset_is_uninstall_on_stage_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsValidationEnabled">reset_is_validation_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetKubernetesManifestDeployArtifactIds">reset_kubernetes_manifest_deploy_artifact_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetLoadBalancerConfig">reset_load_balancer_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetMaxHistory">reset_max_history</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetMaxMemoryInMbs">reset_max_memory_in_mbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeBlueGreenDeployStageId">reset_oke_blue_green_deploy_stage_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeCanaryDeployStageId">reset_oke_canary_deploy_stage_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeCanaryTrafficShiftDeployStageId">reset_oke_canary_traffic_shift_deploy_stage_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeClusterDeployEnvironmentId">reset_oke_cluster_deploy_environment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetProductionLoadBalancerConfig">reset_production_load_balancer_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetPurpose">reset_purpose</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetReleaseName">reset_release_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetRollbackPolicy">reset_rollback_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetRolloutPolicy">reset_rollout_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetSetString">reset_set_string</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetSetValues">reset_set_values</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldCleanupOnFail">reset_should_cleanup_on_fail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldNotWait">reset_should_not_wait</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldResetValues">reset_should_reset_values</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldReuseValues">reset_should_reuse_values</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldSkipCrds">reset_should_skip_crds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldSkipRenderSubchartNotes">reset_should_skip_render_subchart_notes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTestLoadBalancerConfig">reset_test_load_balancer_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTimeoutInSeconds">reset_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTrafficShiftTarget">reset_traffic_shift_target</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetValuesArtifactIds">reset_values_artifact_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetWaitCriteria">reset_wait_criteria</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_approval_policy` <a name="put_approval_policy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putApprovalPolicy"></a>

```python
def put_approval_policy(
  approval_policy_type: str,
  number_of_approvals_required: typing.Union[int, float]
) -> None
```

###### `approval_policy_type`<sup>Required</sup> <a name="approval_policy_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putApprovalPolicy.parameter.approvalPolicyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#approval_policy_type DevopsDeployStage#approval_policy_type}.

---

###### `number_of_approvals_required`<sup>Required</sup> <a name="number_of_approvals_required" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putApprovalPolicy.parameter.numberOfApprovalsRequired"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#number_of_approvals_required DevopsDeployStage#number_of_approvals_required}.

---

##### `put_blue_backend_ips` <a name="put_blue_backend_ips" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueBackendIps"></a>

```python
def put_blue_backend_ips(
  items: typing.List[str] = None
) -> None
```

###### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueBackendIps.parameter.items"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}.

---

##### `put_blue_green_strategy` <a name="put_blue_green_strategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueGreenStrategy"></a>

```python
def put_blue_green_strategy(
  ingress_name: str,
  namespace_a: str,
  namespace_b: str,
  strategy_type: str
) -> None
```

###### `ingress_name`<sup>Required</sup> <a name="ingress_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueGreenStrategy.parameter.ingressName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}.

---

###### `namespace_a`<sup>Required</sup> <a name="namespace_a" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueGreenStrategy.parameter.namespaceA"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace_a DevopsDeployStage#namespace_a}.

---

###### `namespace_b`<sup>Required</sup> <a name="namespace_b" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueGreenStrategy.parameter.namespaceB"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace_b DevopsDeployStage#namespace_b}.

---

###### `strategy_type`<sup>Required</sup> <a name="strategy_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueGreenStrategy.parameter.strategyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}.

---

##### `put_canary_strategy` <a name="put_canary_strategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putCanaryStrategy"></a>

```python
def put_canary_strategy(
  ingress_name: str,
  namespace: str,
  strategy_type: str
) -> None
```

###### `ingress_name`<sup>Required</sup> <a name="ingress_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putCanaryStrategy.parameter.ingressName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}.

---

###### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putCanaryStrategy.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}.

---

###### `strategy_type`<sup>Required</sup> <a name="strategy_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putCanaryStrategy.parameter.strategyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}.

---

##### `put_container_config` <a name="put_container_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putContainerConfig"></a>

```python
def put_container_config(
  container_config_type: str,
  network_channel: DevopsDeployStageContainerConfigNetworkChannel,
  shape_config: DevopsDeployStageContainerConfigShapeConfig,
  shape_name: str,
  availability_domain: str = None,
  compartment_id: str = None
) -> None
```

###### `container_config_type`<sup>Required</sup> <a name="container_config_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putContainerConfig.parameter.containerConfigType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#container_config_type DevopsDeployStage#container_config_type}.

---

###### `network_channel`<sup>Required</sup> <a name="network_channel" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putContainerConfig.parameter.networkChannel"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a>

network_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#network_channel DevopsDeployStage#network_channel}

---

###### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putContainerConfig.parameter.shapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#shape_config DevopsDeployStage#shape_config}

---

###### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putContainerConfig.parameter.shapeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#shape_name DevopsDeployStage#shape_name}.

---

###### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putContainerConfig.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#availability_domain DevopsDeployStage#availability_domain}.

---

###### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putContainerConfig.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compartment_id DevopsDeployStage#compartment_id}.

---

##### `put_deploy_stage_predecessor_collection` <a name="put_deploy_stage_predecessor_collection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putDeployStagePredecessorCollection"></a>

```python
def put_deploy_stage_predecessor_collection(
  items: typing.Union[IResolvable, typing.List[DevopsDeployStageDeployStagePredecessorCollectionItems]]
) -> None
```

###### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putDeployStagePredecessorCollection.parameter.items"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}

---

##### `put_failure_policy` <a name="put_failure_policy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putFailurePolicy"></a>

```python
def put_failure_policy(
  policy_type: str,
  failure_count: typing.Union[int, float] = None,
  failure_percentage: typing.Union[int, float] = None
) -> None
```

###### `policy_type`<sup>Required</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putFailurePolicy.parameter.policyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}.

---

###### `failure_count`<sup>Optional</sup> <a name="failure_count" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putFailurePolicy.parameter.failureCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_count DevopsDeployStage#failure_count}.

---

###### `failure_percentage`<sup>Optional</sup> <a name="failure_percentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putFailurePolicy.parameter.failurePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_percentage DevopsDeployStage#failure_percentage}.

---

##### `put_green_backend_ips` <a name="put_green_backend_ips" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putGreenBackendIps"></a>

```python
def put_green_backend_ips(
  items: typing.List[str] = None
) -> None
```

###### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putGreenBackendIps.parameter.items"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}.

---

##### `put_load_balancer_config` <a name="put_load_balancer_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putLoadBalancerConfig"></a>

```python
def put_load_balancer_config(
  backend_port: typing.Union[int, float] = None,
  listener_name: str = None,
  load_balancer_id: str = None
) -> None
```

###### `backend_port`<sup>Optional</sup> <a name="backend_port" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putLoadBalancerConfig.parameter.backendPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}.

---

###### `listener_name`<sup>Optional</sup> <a name="listener_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putLoadBalancerConfig.parameter.listenerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}.

---

###### `load_balancer_id`<sup>Optional</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putLoadBalancerConfig.parameter.loadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}.

---

##### `put_production_load_balancer_config` <a name="put_production_load_balancer_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putProductionLoadBalancerConfig"></a>

```python
def put_production_load_balancer_config(
  backend_port: typing.Union[int, float] = None,
  listener_name: str = None,
  load_balancer_id: str = None
) -> None
```

###### `backend_port`<sup>Optional</sup> <a name="backend_port" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putProductionLoadBalancerConfig.parameter.backendPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}.

---

###### `listener_name`<sup>Optional</sup> <a name="listener_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putProductionLoadBalancerConfig.parameter.listenerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}.

---

###### `load_balancer_id`<sup>Optional</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putProductionLoadBalancerConfig.parameter.loadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}.

---

##### `put_rollback_policy` <a name="put_rollback_policy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRollbackPolicy"></a>

```python
def put_rollback_policy(
  policy_type: str = None
) -> None
```

###### `policy_type`<sup>Optional</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRollbackPolicy.parameter.policyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}.

---

##### `put_rollout_policy` <a name="put_rollout_policy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRolloutPolicy"></a>

```python
def put_rollout_policy(
  batch_count: typing.Union[int, float] = None,
  batch_delay_in_seconds: typing.Union[int, float] = None,
  batch_percentage: typing.Union[int, float] = None,
  policy_type: str = None,
  ramp_limit_percent: typing.Union[int, float] = None
) -> None
```

###### `batch_count`<sup>Optional</sup> <a name="batch_count" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRolloutPolicy.parameter.batchCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_count DevopsDeployStage#batch_count}.

---

###### `batch_delay_in_seconds`<sup>Optional</sup> <a name="batch_delay_in_seconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRolloutPolicy.parameter.batchDelayInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_delay_in_seconds DevopsDeployStage#batch_delay_in_seconds}.

---

###### `batch_percentage`<sup>Optional</sup> <a name="batch_percentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRolloutPolicy.parameter.batchPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_percentage DevopsDeployStage#batch_percentage}.

---

###### `policy_type`<sup>Optional</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRolloutPolicy.parameter.policyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}.

---

###### `ramp_limit_percent`<sup>Optional</sup> <a name="ramp_limit_percent" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRolloutPolicy.parameter.rampLimitPercent"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ramp_limit_percent DevopsDeployStage#ramp_limit_percent}.

---

##### `put_set_string` <a name="put_set_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetString"></a>

```python
def put_set_string(
  items: typing.Union[IResolvable, typing.List[DevopsDeployStageSetStringItems]] = None
) -> None
```

###### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetString.parameter.items"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}

---

##### `put_set_values` <a name="put_set_values" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetValues"></a>

```python
def put_set_values(
  items: typing.Union[IResolvable, typing.List[DevopsDeployStageSetValuesItems]] = None
) -> None
```

###### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetValues.parameter.items"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}

---

##### `put_test_load_balancer_config` <a name="put_test_load_balancer_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTestLoadBalancerConfig"></a>

```python
def put_test_load_balancer_config(
  backend_port: typing.Union[int, float] = None,
  listener_name: str = None,
  load_balancer_id: str = None
) -> None
```

###### `backend_port`<sup>Optional</sup> <a name="backend_port" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTestLoadBalancerConfig.parameter.backendPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}.

---

###### `listener_name`<sup>Optional</sup> <a name="listener_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTestLoadBalancerConfig.parameter.listenerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}.

---

###### `load_balancer_id`<sup>Optional</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTestLoadBalancerConfig.parameter.loadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#create DevopsDeployStage#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#delete DevopsDeployStage#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#update DevopsDeployStage#update}.

---

##### `put_wait_criteria` <a name="put_wait_criteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putWaitCriteria"></a>

```python
def put_wait_criteria(
  wait_duration: str,
  wait_type: str
) -> None
```

###### `wait_duration`<sup>Required</sup> <a name="wait_duration" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putWaitCriteria.parameter.waitDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_duration DevopsDeployStage#wait_duration}.

---

###### `wait_type`<sup>Required</sup> <a name="wait_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putWaitCriteria.parameter.waitType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_type DevopsDeployStage#wait_type}.

---

##### `reset_approval_policy` <a name="reset_approval_policy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetApprovalPolicy"></a>

```python
def reset_approval_policy() -> None
```

##### `reset_are_hooks_enabled` <a name="reset_are_hooks_enabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetAreHooksEnabled"></a>

```python
def reset_are_hooks_enabled() -> None
```

##### `reset_blue_backend_ips` <a name="reset_blue_backend_ips" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetBlueBackendIps"></a>

```python
def reset_blue_backend_ips() -> None
```

##### `reset_blue_green_strategy` <a name="reset_blue_green_strategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetBlueGreenStrategy"></a>

```python
def reset_blue_green_strategy() -> None
```

##### `reset_canary_strategy` <a name="reset_canary_strategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetCanaryStrategy"></a>

```python
def reset_canary_strategy() -> None
```

##### `reset_command_spec_deploy_artifact_id` <a name="reset_command_spec_deploy_artifact_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetCommandSpecDeployArtifactId"></a>

```python
def reset_command_spec_deploy_artifact_id() -> None
```

##### `reset_compute_instance_group_blue_green_deployment_deploy_stage_id` <a name="reset_compute_instance_group_blue_green_deployment_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupBlueGreenDeploymentDeployStageId"></a>

```python
def reset_compute_instance_group_blue_green_deployment_deploy_stage_id() -> None
```

##### `reset_compute_instance_group_canary_deploy_stage_id` <a name="reset_compute_instance_group_canary_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupCanaryDeployStageId"></a>

```python
def reset_compute_instance_group_canary_deploy_stage_id() -> None
```

##### `reset_compute_instance_group_canary_traffic_shift_deploy_stage_id` <a name="reset_compute_instance_group_canary_traffic_shift_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupCanaryTrafficShiftDeployStageId"></a>

```python
def reset_compute_instance_group_canary_traffic_shift_deploy_stage_id() -> None
```

##### `reset_compute_instance_group_deploy_environment_id` <a name="reset_compute_instance_group_deploy_environment_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupDeployEnvironmentId"></a>

```python
def reset_compute_instance_group_deploy_environment_id() -> None
```

##### `reset_config` <a name="reset_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_container_config` <a name="reset_container_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetContainerConfig"></a>

```python
def reset_container_config() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_deploy_artifact_id` <a name="reset_deploy_artifact_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployArtifactId"></a>

```python
def reset_deploy_artifact_id() -> None
```

##### `reset_deploy_artifact_ids` <a name="reset_deploy_artifact_ids" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployArtifactIds"></a>

```python
def reset_deploy_artifact_ids() -> None
```

##### `reset_deploy_environment_id_a` <a name="reset_deploy_environment_id_a" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployEnvironmentIdA"></a>

```python
def reset_deploy_environment_id_a() -> None
```

##### `reset_deploy_environment_id_b` <a name="reset_deploy_environment_id_b" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployEnvironmentIdB"></a>

```python
def reset_deploy_environment_id_b() -> None
```

##### `reset_deployment_spec_deploy_artifact_id` <a name="reset_deployment_spec_deploy_artifact_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeploymentSpecDeployArtifactId"></a>

```python
def reset_deployment_spec_deploy_artifact_id() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_docker_image_deploy_artifact_id` <a name="reset_docker_image_deploy_artifact_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDockerImageDeployArtifactId"></a>

```python
def reset_docker_image_deploy_artifact_id() -> None
```

##### `reset_failure_policy` <a name="reset_failure_policy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFailurePolicy"></a>

```python
def reset_failure_policy() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_function_deploy_environment_id` <a name="reset_function_deploy_environment_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFunctionDeployEnvironmentId"></a>

```python
def reset_function_deploy_environment_id() -> None
```

##### `reset_function_timeout_in_seconds` <a name="reset_function_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFunctionTimeoutInSeconds"></a>

```python
def reset_function_timeout_in_seconds() -> None
```

##### `reset_green_backend_ips` <a name="reset_green_backend_ips" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetGreenBackendIps"></a>

```python
def reset_green_backend_ips() -> None
```

##### `reset_helm_chart_deploy_artifact_id` <a name="reset_helm_chart_deploy_artifact_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetHelmChartDeployArtifactId"></a>

```python
def reset_helm_chart_deploy_artifact_id() -> None
```

##### `reset_helm_command_artifact_ids` <a name="reset_helm_command_artifact_ids" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetHelmCommandArtifactIds"></a>

```python
def reset_helm_command_artifact_ids() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_async` <a name="reset_is_async" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsAsync"></a>

```python
def reset_is_async() -> None
```

##### `reset_is_debug_enabled` <a name="reset_is_debug_enabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsDebugEnabled"></a>

```python
def reset_is_debug_enabled() -> None
```

##### `reset_is_force_enabled` <a name="reset_is_force_enabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsForceEnabled"></a>

```python
def reset_is_force_enabled() -> None
```

##### `reset_is_uninstall_on_stage_delete` <a name="reset_is_uninstall_on_stage_delete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsUninstallOnStageDelete"></a>

```python
def reset_is_uninstall_on_stage_delete() -> None
```

##### `reset_is_validation_enabled` <a name="reset_is_validation_enabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsValidationEnabled"></a>

```python
def reset_is_validation_enabled() -> None
```

##### `reset_kubernetes_manifest_deploy_artifact_ids` <a name="reset_kubernetes_manifest_deploy_artifact_ids" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetKubernetesManifestDeployArtifactIds"></a>

```python
def reset_kubernetes_manifest_deploy_artifact_ids() -> None
```

##### `reset_load_balancer_config` <a name="reset_load_balancer_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetLoadBalancerConfig"></a>

```python
def reset_load_balancer_config() -> None
```

##### `reset_max_history` <a name="reset_max_history" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetMaxHistory"></a>

```python
def reset_max_history() -> None
```

##### `reset_max_memory_in_mbs` <a name="reset_max_memory_in_mbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetMaxMemoryInMbs"></a>

```python
def reset_max_memory_in_mbs() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_oke_blue_green_deploy_stage_id` <a name="reset_oke_blue_green_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeBlueGreenDeployStageId"></a>

```python
def reset_oke_blue_green_deploy_stage_id() -> None
```

##### `reset_oke_canary_deploy_stage_id` <a name="reset_oke_canary_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeCanaryDeployStageId"></a>

```python
def reset_oke_canary_deploy_stage_id() -> None
```

##### `reset_oke_canary_traffic_shift_deploy_stage_id` <a name="reset_oke_canary_traffic_shift_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeCanaryTrafficShiftDeployStageId"></a>

```python
def reset_oke_canary_traffic_shift_deploy_stage_id() -> None
```

##### `reset_oke_cluster_deploy_environment_id` <a name="reset_oke_cluster_deploy_environment_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeClusterDeployEnvironmentId"></a>

```python
def reset_oke_cluster_deploy_environment_id() -> None
```

##### `reset_production_load_balancer_config` <a name="reset_production_load_balancer_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetProductionLoadBalancerConfig"></a>

```python
def reset_production_load_balancer_config() -> None
```

##### `reset_purpose` <a name="reset_purpose" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetPurpose"></a>

```python
def reset_purpose() -> None
```

##### `reset_release_name` <a name="reset_release_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetReleaseName"></a>

```python
def reset_release_name() -> None
```

##### `reset_rollback_policy` <a name="reset_rollback_policy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetRollbackPolicy"></a>

```python
def reset_rollback_policy() -> None
```

##### `reset_rollout_policy` <a name="reset_rollout_policy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetRolloutPolicy"></a>

```python
def reset_rollout_policy() -> None
```

##### `reset_set_string` <a name="reset_set_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetSetString"></a>

```python
def reset_set_string() -> None
```

##### `reset_set_values` <a name="reset_set_values" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetSetValues"></a>

```python
def reset_set_values() -> None
```

##### `reset_should_cleanup_on_fail` <a name="reset_should_cleanup_on_fail" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldCleanupOnFail"></a>

```python
def reset_should_cleanup_on_fail() -> None
```

##### `reset_should_not_wait` <a name="reset_should_not_wait" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldNotWait"></a>

```python
def reset_should_not_wait() -> None
```

##### `reset_should_reset_values` <a name="reset_should_reset_values" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldResetValues"></a>

```python
def reset_should_reset_values() -> None
```

##### `reset_should_reuse_values` <a name="reset_should_reuse_values" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldReuseValues"></a>

```python
def reset_should_reuse_values() -> None
```

##### `reset_should_skip_crds` <a name="reset_should_skip_crds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldSkipCrds"></a>

```python
def reset_should_skip_crds() -> None
```

##### `reset_should_skip_render_subchart_notes` <a name="reset_should_skip_render_subchart_notes" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldSkipRenderSubchartNotes"></a>

```python
def reset_should_skip_render_subchart_notes() -> None
```

##### `reset_test_load_balancer_config` <a name="reset_test_load_balancer_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTestLoadBalancerConfig"></a>

```python
def reset_test_load_balancer_config() -> None
```

##### `reset_timeout_in_seconds` <a name="reset_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTimeoutInSeconds"></a>

```python
def reset_timeout_in_seconds() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_traffic_shift_target` <a name="reset_traffic_shift_target" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTrafficShiftTarget"></a>

```python
def reset_traffic_shift_target() -> None
```

##### `reset_values_artifact_ids` <a name="reset_values_artifact_ids" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetValuesArtifactIds"></a>

```python
def reset_values_artifact_ids() -> None
```

##### `reset_wait_criteria` <a name="reset_wait_criteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetWaitCriteria"></a>

```python
def reset_wait_criteria() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DevopsDeployStage resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DevopsDeployStage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DevopsDeployStage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DevopsDeployStage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevopsDeployStage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.approvalPolicy">approval_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference">DevopsDeployStageApprovalPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueBackendIps">blue_backend_ips</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference">DevopsDeployStageBlueBackendIpsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueGreenStrategy">blue_green_strategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference">DevopsDeployStageBlueGreenStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.canaryStrategy">canary_strategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference">DevopsDeployStageCanaryStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.containerConfig">container_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference">DevopsDeployStageContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStagePredecessorCollection">deploy_stage_predecessor_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference">DevopsDeployStageDeployStagePredecessorCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.failurePolicy">failure_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference">DevopsDeployStageFailurePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.greenBackendIps">green_backend_ips</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference">DevopsDeployStageGreenBackendIpsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.loadBalancerConfig">load_balancer_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference">DevopsDeployStageLoadBalancerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.productionLoadBalancerConfig">production_load_balancer_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference">DevopsDeployStageProductionLoadBalancerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rollbackPolicy">rollback_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference">DevopsDeployStageRollbackPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rolloutPolicy">rollout_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference">DevopsDeployStageRolloutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setString">set_string</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference">DevopsDeployStageSetStringOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setValues">set_values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference">DevopsDeployStageSetValuesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.testLoadBalancerConfig">test_load_balancer_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference">DevopsDeployStageTestLoadBalancerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference">DevopsDeployStageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.waitCriteria">wait_criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference">DevopsDeployStageWaitCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.approvalPolicyInput">approval_policy_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.areHooksEnabledInput">are_hooks_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueBackendIpsInput">blue_backend_ips_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueGreenStrategyInput">blue_green_strategy_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.canaryStrategyInput">canary_strategy_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.commandSpecDeployArtifactIdInput">command_spec_deploy_artifact_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupBlueGreenDeploymentDeployStageIdInput">compute_instance_group_blue_green_deployment_deploy_stage_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryDeployStageIdInput">compute_instance_group_canary_deploy_stage_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryTrafficShiftDeployStageIdInput">compute_instance_group_canary_traffic_shift_deploy_stage_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupDeployEnvironmentIdInput">compute_instance_group_deploy_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.configInput">config_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.containerConfigInput">container_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIdInput">deploy_artifact_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIdsInput">deploy_artifact_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdAInput">deploy_environment_id_a_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdBInput">deploy_environment_id_b_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deploymentSpecDeployArtifactIdInput">deployment_spec_deploy_artifact_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployPipelineIdInput">deploy_pipeline_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStagePredecessorCollectionInput">deploy_stage_predecessor_collection_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStageTypeInput">deploy_stage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dockerImageDeployArtifactIdInput">docker_image_deploy_artifact_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.failurePolicyInput">failure_policy_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionDeployEnvironmentIdInput">function_deploy_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionTimeoutInSecondsInput">function_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.greenBackendIpsInput">green_backend_ips_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmChartDeployArtifactIdInput">helm_chart_deploy_artifact_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmCommandArtifactIdsInput">helm_command_artifact_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isAsyncInput">is_async_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isDebugEnabledInput">is_debug_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isForceEnabledInput">is_force_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isUninstallOnStageDeleteInput">is_uninstall_on_stage_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isValidationEnabledInput">is_validation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.kubernetesManifestDeployArtifactIdsInput">kubernetes_manifest_deploy_artifact_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.loadBalancerConfigInput">load_balancer_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxHistoryInput">max_history_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxMemoryInMbsInput">max_memory_in_mbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeBlueGreenDeployStageIdInput">oke_blue_green_deploy_stage_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryDeployStageIdInput">oke_canary_deploy_stage_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryTrafficShiftDeployStageIdInput">oke_canary_traffic_shift_deploy_stage_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeClusterDeployEnvironmentIdInput">oke_cluster_deploy_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.productionLoadBalancerConfigInput">production_load_balancer_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.purposeInput">purpose_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.releaseNameInput">release_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rollbackPolicyInput">rollback_policy_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rolloutPolicyInput">rollout_policy_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setStringInput">set_string_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setValuesInput">set_values_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldCleanupOnFailInput">should_cleanup_on_fail_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldNotWaitInput">should_not_wait_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldResetValuesInput">should_reset_values_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldReuseValuesInput">should_reuse_values_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipCrdsInput">should_skip_crds_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipRenderSubchartNotesInput">should_skip_render_subchart_notes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.testLoadBalancerConfigInput">test_load_balancer_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutInSecondsInput">timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.trafficShiftTargetInput">traffic_shift_target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.valuesArtifactIdsInput">values_artifact_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.waitCriteriaInput">wait_criteria_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.areHooksEnabled">are_hooks_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.commandSpecDeployArtifactId">command_spec_deploy_artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupBlueGreenDeploymentDeployStageId">compute_instance_group_blue_green_deployment_deploy_stage_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryDeployStageId">compute_instance_group_canary_deploy_stage_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryTrafficShiftDeployStageId">compute_instance_group_canary_traffic_shift_deploy_stage_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupDeployEnvironmentId">compute_instance_group_deploy_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.config">config</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactId">deploy_artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIds">deploy_artifact_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdA">deploy_environment_id_a</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdB">deploy_environment_id_b</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deploymentSpecDeployArtifactId">deployment_spec_deploy_artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployPipelineId">deploy_pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStageType">deploy_stage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dockerImageDeployArtifactId">docker_image_deploy_artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionDeployEnvironmentId">function_deploy_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionTimeoutInSeconds">function_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmChartDeployArtifactId">helm_chart_deploy_artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmCommandArtifactIds">helm_command_artifact_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isAsync">is_async</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isDebugEnabled">is_debug_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isForceEnabled">is_force_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isUninstallOnStageDelete">is_uninstall_on_stage_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isValidationEnabled">is_validation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.kubernetesManifestDeployArtifactIds">kubernetes_manifest_deploy_artifact_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxHistory">max_history</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxMemoryInMbs">max_memory_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeBlueGreenDeployStageId">oke_blue_green_deploy_stage_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryDeployStageId">oke_canary_deploy_stage_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryTrafficShiftDeployStageId">oke_canary_traffic_shift_deploy_stage_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeClusterDeployEnvironmentId">oke_cluster_deploy_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.purpose">purpose</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.releaseName">release_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldCleanupOnFail">should_cleanup_on_fail</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldNotWait">should_not_wait</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldResetValues">should_reset_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldReuseValues">should_reuse_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipCrds">should_skip_crds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipRenderSubchartNotes">should_skip_render_subchart_notes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.trafficShiftTarget">traffic_shift_target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.valuesArtifactIds">values_artifact_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `approval_policy`<sup>Required</sup> <a name="approval_policy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.approvalPolicy"></a>

```python
approval_policy: DevopsDeployStageApprovalPolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference">DevopsDeployStageApprovalPolicyOutputReference</a>

---

##### `blue_backend_ips`<sup>Required</sup> <a name="blue_backend_ips" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueBackendIps"></a>

```python
blue_backend_ips: DevopsDeployStageBlueBackendIpsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference">DevopsDeployStageBlueBackendIpsOutputReference</a>

---

##### `blue_green_strategy`<sup>Required</sup> <a name="blue_green_strategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueGreenStrategy"></a>

```python
blue_green_strategy: DevopsDeployStageBlueGreenStrategyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference">DevopsDeployStageBlueGreenStrategyOutputReference</a>

---

##### `canary_strategy`<sup>Required</sup> <a name="canary_strategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.canaryStrategy"></a>

```python
canary_strategy: DevopsDeployStageCanaryStrategyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference">DevopsDeployStageCanaryStrategyOutputReference</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `container_config`<sup>Required</sup> <a name="container_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.containerConfig"></a>

```python
container_config: DevopsDeployStageContainerConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference">DevopsDeployStageContainerConfigOutputReference</a>

---

##### `deploy_stage_predecessor_collection`<sup>Required</sup> <a name="deploy_stage_predecessor_collection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStagePredecessorCollection"></a>

```python
deploy_stage_predecessor_collection: DevopsDeployStageDeployStagePredecessorCollectionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference">DevopsDeployStageDeployStagePredecessorCollectionOutputReference</a>

---

##### `failure_policy`<sup>Required</sup> <a name="failure_policy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.failurePolicy"></a>

```python
failure_policy: DevopsDeployStageFailurePolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference">DevopsDeployStageFailurePolicyOutputReference</a>

---

##### `green_backend_ips`<sup>Required</sup> <a name="green_backend_ips" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.greenBackendIps"></a>

```python
green_backend_ips: DevopsDeployStageGreenBackendIpsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference">DevopsDeployStageGreenBackendIpsOutputReference</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `load_balancer_config`<sup>Required</sup> <a name="load_balancer_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.loadBalancerConfig"></a>

```python
load_balancer_config: DevopsDeployStageLoadBalancerConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference">DevopsDeployStageLoadBalancerConfigOutputReference</a>

---

##### `production_load_balancer_config`<sup>Required</sup> <a name="production_load_balancer_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.productionLoadBalancerConfig"></a>

```python
production_load_balancer_config: DevopsDeployStageProductionLoadBalancerConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference">DevopsDeployStageProductionLoadBalancerConfigOutputReference</a>

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `rollback_policy`<sup>Required</sup> <a name="rollback_policy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rollbackPolicy"></a>

```python
rollback_policy: DevopsDeployStageRollbackPolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference">DevopsDeployStageRollbackPolicyOutputReference</a>

---

##### `rollout_policy`<sup>Required</sup> <a name="rollout_policy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rolloutPolicy"></a>

```python
rollout_policy: DevopsDeployStageRolloutPolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference">DevopsDeployStageRolloutPolicyOutputReference</a>

---

##### `set_string`<sup>Required</sup> <a name="set_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setString"></a>

```python
set_string: DevopsDeployStageSetStringOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference">DevopsDeployStageSetStringOutputReference</a>

---

##### `set_values`<sup>Required</sup> <a name="set_values" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setValues"></a>

```python
set_values: DevopsDeployStageSetValuesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference">DevopsDeployStageSetValuesOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `test_load_balancer_config`<sup>Required</sup> <a name="test_load_balancer_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.testLoadBalancerConfig"></a>

```python
test_load_balancer_config: DevopsDeployStageTestLoadBalancerConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference">DevopsDeployStageTestLoadBalancerConfigOutputReference</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeouts"></a>

```python
timeouts: DevopsDeployStageTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference">DevopsDeployStageTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `wait_criteria`<sup>Required</sup> <a name="wait_criteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.waitCriteria"></a>

```python
wait_criteria: DevopsDeployStageWaitCriteriaOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference">DevopsDeployStageWaitCriteriaOutputReference</a>

---

##### `approval_policy_input`<sup>Optional</sup> <a name="approval_policy_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.approvalPolicyInput"></a>

```python
approval_policy_input: DevopsDeployStageApprovalPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a>

---

##### `are_hooks_enabled_input`<sup>Optional</sup> <a name="are_hooks_enabled_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.areHooksEnabledInput"></a>

```python
are_hooks_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `blue_backend_ips_input`<sup>Optional</sup> <a name="blue_backend_ips_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueBackendIpsInput"></a>

```python
blue_backend_ips_input: DevopsDeployStageBlueBackendIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a>

---

##### `blue_green_strategy_input`<sup>Optional</sup> <a name="blue_green_strategy_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueGreenStrategyInput"></a>

```python
blue_green_strategy_input: DevopsDeployStageBlueGreenStrategy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a>

---

##### `canary_strategy_input`<sup>Optional</sup> <a name="canary_strategy_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.canaryStrategyInput"></a>

```python
canary_strategy_input: DevopsDeployStageCanaryStrategy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a>

---

##### `command_spec_deploy_artifact_id_input`<sup>Optional</sup> <a name="command_spec_deploy_artifact_id_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.commandSpecDeployArtifactIdInput"></a>

```python
command_spec_deploy_artifact_id_input: str
```

- *Type:* str

---

##### `compute_instance_group_blue_green_deployment_deploy_stage_id_input`<sup>Optional</sup> <a name="compute_instance_group_blue_green_deployment_deploy_stage_id_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupBlueGreenDeploymentDeployStageIdInput"></a>

```python
compute_instance_group_blue_green_deployment_deploy_stage_id_input: str
```

- *Type:* str

---

##### `compute_instance_group_canary_deploy_stage_id_input`<sup>Optional</sup> <a name="compute_instance_group_canary_deploy_stage_id_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryDeployStageIdInput"></a>

```python
compute_instance_group_canary_deploy_stage_id_input: str
```

- *Type:* str

---

##### `compute_instance_group_canary_traffic_shift_deploy_stage_id_input`<sup>Optional</sup> <a name="compute_instance_group_canary_traffic_shift_deploy_stage_id_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryTrafficShiftDeployStageIdInput"></a>

```python
compute_instance_group_canary_traffic_shift_deploy_stage_id_input: str
```

- *Type:* str

---

##### `compute_instance_group_deploy_environment_id_input`<sup>Optional</sup> <a name="compute_instance_group_deploy_environment_id_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupDeployEnvironmentIdInput"></a>

```python
compute_instance_group_deploy_environment_id_input: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.configInput"></a>

```python
config_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `container_config_input`<sup>Optional</sup> <a name="container_config_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.containerConfigInput"></a>

```python
container_config_input: DevopsDeployStageContainerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a>

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deploy_artifact_id_input`<sup>Optional</sup> <a name="deploy_artifact_id_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIdInput"></a>

```python
deploy_artifact_id_input: str
```

- *Type:* str

---

##### `deploy_artifact_ids_input`<sup>Optional</sup> <a name="deploy_artifact_ids_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIdsInput"></a>

```python
deploy_artifact_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deploy_environment_id_a_input`<sup>Optional</sup> <a name="deploy_environment_id_a_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdAInput"></a>

```python
deploy_environment_id_a_input: str
```

- *Type:* str

---

##### `deploy_environment_id_b_input`<sup>Optional</sup> <a name="deploy_environment_id_b_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdBInput"></a>

```python
deploy_environment_id_b_input: str
```

- *Type:* str

---

##### `deployment_spec_deploy_artifact_id_input`<sup>Optional</sup> <a name="deployment_spec_deploy_artifact_id_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deploymentSpecDeployArtifactIdInput"></a>

```python
deployment_spec_deploy_artifact_id_input: str
```

- *Type:* str

---

##### `deploy_pipeline_id_input`<sup>Optional</sup> <a name="deploy_pipeline_id_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployPipelineIdInput"></a>

```python
deploy_pipeline_id_input: str
```

- *Type:* str

---

##### `deploy_stage_predecessor_collection_input`<sup>Optional</sup> <a name="deploy_stage_predecessor_collection_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStagePredecessorCollectionInput"></a>

```python
deploy_stage_predecessor_collection_input: DevopsDeployStageDeployStagePredecessorCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a>

---

##### `deploy_stage_type_input`<sup>Optional</sup> <a name="deploy_stage_type_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStageTypeInput"></a>

```python
deploy_stage_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `docker_image_deploy_artifact_id_input`<sup>Optional</sup> <a name="docker_image_deploy_artifact_id_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dockerImageDeployArtifactIdInput"></a>

```python
docker_image_deploy_artifact_id_input: str
```

- *Type:* str

---

##### `failure_policy_input`<sup>Optional</sup> <a name="failure_policy_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.failurePolicyInput"></a>

```python
failure_policy_input: DevopsDeployStageFailurePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a>

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `function_deploy_environment_id_input`<sup>Optional</sup> <a name="function_deploy_environment_id_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionDeployEnvironmentIdInput"></a>

```python
function_deploy_environment_id_input: str
```

- *Type:* str

---

##### `function_timeout_in_seconds_input`<sup>Optional</sup> <a name="function_timeout_in_seconds_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionTimeoutInSecondsInput"></a>

```python
function_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `green_backend_ips_input`<sup>Optional</sup> <a name="green_backend_ips_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.greenBackendIpsInput"></a>

```python
green_backend_ips_input: DevopsDeployStageGreenBackendIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a>

---

##### `helm_chart_deploy_artifact_id_input`<sup>Optional</sup> <a name="helm_chart_deploy_artifact_id_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmChartDeployArtifactIdInput"></a>

```python
helm_chart_deploy_artifact_id_input: str
```

- *Type:* str

---

##### `helm_command_artifact_ids_input`<sup>Optional</sup> <a name="helm_command_artifact_ids_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmCommandArtifactIdsInput"></a>

```python
helm_command_artifact_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_async_input`<sup>Optional</sup> <a name="is_async_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isAsyncInput"></a>

```python
is_async_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_debug_enabled_input`<sup>Optional</sup> <a name="is_debug_enabled_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isDebugEnabledInput"></a>

```python
is_debug_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_force_enabled_input`<sup>Optional</sup> <a name="is_force_enabled_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isForceEnabledInput"></a>

```python
is_force_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_uninstall_on_stage_delete_input`<sup>Optional</sup> <a name="is_uninstall_on_stage_delete_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isUninstallOnStageDeleteInput"></a>

```python
is_uninstall_on_stage_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_validation_enabled_input`<sup>Optional</sup> <a name="is_validation_enabled_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isValidationEnabledInput"></a>

```python
is_validation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kubernetes_manifest_deploy_artifact_ids_input`<sup>Optional</sup> <a name="kubernetes_manifest_deploy_artifact_ids_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.kubernetesManifestDeployArtifactIdsInput"></a>

```python
kubernetes_manifest_deploy_artifact_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `load_balancer_config_input`<sup>Optional</sup> <a name="load_balancer_config_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.loadBalancerConfigInput"></a>

```python
load_balancer_config_input: DevopsDeployStageLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a>

---

##### `max_history_input`<sup>Optional</sup> <a name="max_history_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxHistoryInput"></a>

```python
max_history_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_memory_in_mbs_input`<sup>Optional</sup> <a name="max_memory_in_mbs_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxMemoryInMbsInput"></a>

```python
max_memory_in_mbs_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `oke_blue_green_deploy_stage_id_input`<sup>Optional</sup> <a name="oke_blue_green_deploy_stage_id_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeBlueGreenDeployStageIdInput"></a>

```python
oke_blue_green_deploy_stage_id_input: str
```

- *Type:* str

---

##### `oke_canary_deploy_stage_id_input`<sup>Optional</sup> <a name="oke_canary_deploy_stage_id_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryDeployStageIdInput"></a>

```python
oke_canary_deploy_stage_id_input: str
```

- *Type:* str

---

##### `oke_canary_traffic_shift_deploy_stage_id_input`<sup>Optional</sup> <a name="oke_canary_traffic_shift_deploy_stage_id_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryTrafficShiftDeployStageIdInput"></a>

```python
oke_canary_traffic_shift_deploy_stage_id_input: str
```

- *Type:* str

---

##### `oke_cluster_deploy_environment_id_input`<sup>Optional</sup> <a name="oke_cluster_deploy_environment_id_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeClusterDeployEnvironmentIdInput"></a>

```python
oke_cluster_deploy_environment_id_input: str
```

- *Type:* str

---

##### `production_load_balancer_config_input`<sup>Optional</sup> <a name="production_load_balancer_config_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.productionLoadBalancerConfigInput"></a>

```python
production_load_balancer_config_input: DevopsDeployStageProductionLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a>

---

##### `purpose_input`<sup>Optional</sup> <a name="purpose_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.purposeInput"></a>

```python
purpose_input: str
```

- *Type:* str

---

##### `release_name_input`<sup>Optional</sup> <a name="release_name_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.releaseNameInput"></a>

```python
release_name_input: str
```

- *Type:* str

---

##### `rollback_policy_input`<sup>Optional</sup> <a name="rollback_policy_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rollbackPolicyInput"></a>

```python
rollback_policy_input: DevopsDeployStageRollbackPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a>

---

##### `rollout_policy_input`<sup>Optional</sup> <a name="rollout_policy_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rolloutPolicyInput"></a>

```python
rollout_policy_input: DevopsDeployStageRolloutPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a>

---

##### `set_string_input`<sup>Optional</sup> <a name="set_string_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setStringInput"></a>

```python
set_string_input: DevopsDeployStageSetString
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a>

---

##### `set_values_input`<sup>Optional</sup> <a name="set_values_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setValuesInput"></a>

```python
set_values_input: DevopsDeployStageSetValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a>

---

##### `should_cleanup_on_fail_input`<sup>Optional</sup> <a name="should_cleanup_on_fail_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldCleanupOnFailInput"></a>

```python
should_cleanup_on_fail_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_not_wait_input`<sup>Optional</sup> <a name="should_not_wait_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldNotWaitInput"></a>

```python
should_not_wait_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_reset_values_input`<sup>Optional</sup> <a name="should_reset_values_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldResetValuesInput"></a>

```python
should_reset_values_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_reuse_values_input`<sup>Optional</sup> <a name="should_reuse_values_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldReuseValuesInput"></a>

```python
should_reuse_values_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_skip_crds_input`<sup>Optional</sup> <a name="should_skip_crds_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipCrdsInput"></a>

```python
should_skip_crds_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_skip_render_subchart_notes_input`<sup>Optional</sup> <a name="should_skip_render_subchart_notes_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipRenderSubchartNotesInput"></a>

```python
should_skip_render_subchart_notes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `test_load_balancer_config_input`<sup>Optional</sup> <a name="test_load_balancer_config_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.testLoadBalancerConfigInput"></a>

```python
test_load_balancer_config_input: DevopsDeployStageTestLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a>

---

##### `timeout_in_seconds_input`<sup>Optional</sup> <a name="timeout_in_seconds_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutInSecondsInput"></a>

```python
timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DevopsDeployStageTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a>]

---

##### `traffic_shift_target_input`<sup>Optional</sup> <a name="traffic_shift_target_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.trafficShiftTargetInput"></a>

```python
traffic_shift_target_input: str
```

- *Type:* str

---

##### `values_artifact_ids_input`<sup>Optional</sup> <a name="values_artifact_ids_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.valuesArtifactIdsInput"></a>

```python
values_artifact_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `wait_criteria_input`<sup>Optional</sup> <a name="wait_criteria_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.waitCriteriaInput"></a>

```python
wait_criteria_input: DevopsDeployStageWaitCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a>

---

##### `are_hooks_enabled`<sup>Required</sup> <a name="are_hooks_enabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.areHooksEnabled"></a>

```python
are_hooks_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `command_spec_deploy_artifact_id`<sup>Required</sup> <a name="command_spec_deploy_artifact_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.commandSpecDeployArtifactId"></a>

```python
command_spec_deploy_artifact_id: str
```

- *Type:* str

---

##### `compute_instance_group_blue_green_deployment_deploy_stage_id`<sup>Required</sup> <a name="compute_instance_group_blue_green_deployment_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupBlueGreenDeploymentDeployStageId"></a>

```python
compute_instance_group_blue_green_deployment_deploy_stage_id: str
```

- *Type:* str

---

##### `compute_instance_group_canary_deploy_stage_id`<sup>Required</sup> <a name="compute_instance_group_canary_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryDeployStageId"></a>

```python
compute_instance_group_canary_deploy_stage_id: str
```

- *Type:* str

---

##### `compute_instance_group_canary_traffic_shift_deploy_stage_id`<sup>Required</sup> <a name="compute_instance_group_canary_traffic_shift_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryTrafficShiftDeployStageId"></a>

```python
compute_instance_group_canary_traffic_shift_deploy_stage_id: str
```

- *Type:* str

---

##### `compute_instance_group_deploy_environment_id`<sup>Required</sup> <a name="compute_instance_group_deploy_environment_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupDeployEnvironmentId"></a>

```python
compute_instance_group_deploy_environment_id: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.config"></a>

```python
config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deploy_artifact_id`<sup>Required</sup> <a name="deploy_artifact_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactId"></a>

```python
deploy_artifact_id: str
```

- *Type:* str

---

##### `deploy_artifact_ids`<sup>Required</sup> <a name="deploy_artifact_ids" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIds"></a>

```python
deploy_artifact_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deploy_environment_id_a`<sup>Required</sup> <a name="deploy_environment_id_a" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdA"></a>

```python
deploy_environment_id_a: str
```

- *Type:* str

---

##### `deploy_environment_id_b`<sup>Required</sup> <a name="deploy_environment_id_b" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdB"></a>

```python
deploy_environment_id_b: str
```

- *Type:* str

---

##### `deployment_spec_deploy_artifact_id`<sup>Required</sup> <a name="deployment_spec_deploy_artifact_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deploymentSpecDeployArtifactId"></a>

```python
deployment_spec_deploy_artifact_id: str
```

- *Type:* str

---

##### `deploy_pipeline_id`<sup>Required</sup> <a name="deploy_pipeline_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployPipelineId"></a>

```python
deploy_pipeline_id: str
```

- *Type:* str

---

##### `deploy_stage_type`<sup>Required</sup> <a name="deploy_stage_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStageType"></a>

```python
deploy_stage_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `docker_image_deploy_artifact_id`<sup>Required</sup> <a name="docker_image_deploy_artifact_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dockerImageDeployArtifactId"></a>

```python
docker_image_deploy_artifact_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `function_deploy_environment_id`<sup>Required</sup> <a name="function_deploy_environment_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionDeployEnvironmentId"></a>

```python
function_deploy_environment_id: str
```

- *Type:* str

---

##### `function_timeout_in_seconds`<sup>Required</sup> <a name="function_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionTimeoutInSeconds"></a>

```python
function_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `helm_chart_deploy_artifact_id`<sup>Required</sup> <a name="helm_chart_deploy_artifact_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmChartDeployArtifactId"></a>

```python
helm_chart_deploy_artifact_id: str
```

- *Type:* str

---

##### `helm_command_artifact_ids`<sup>Required</sup> <a name="helm_command_artifact_ids" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmCommandArtifactIds"></a>

```python
helm_command_artifact_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_async`<sup>Required</sup> <a name="is_async" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isAsync"></a>

```python
is_async: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_debug_enabled`<sup>Required</sup> <a name="is_debug_enabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isDebugEnabled"></a>

```python
is_debug_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_force_enabled`<sup>Required</sup> <a name="is_force_enabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isForceEnabled"></a>

```python
is_force_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_uninstall_on_stage_delete`<sup>Required</sup> <a name="is_uninstall_on_stage_delete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isUninstallOnStageDelete"></a>

```python
is_uninstall_on_stage_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_validation_enabled`<sup>Required</sup> <a name="is_validation_enabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isValidationEnabled"></a>

```python
is_validation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kubernetes_manifest_deploy_artifact_ids`<sup>Required</sup> <a name="kubernetes_manifest_deploy_artifact_ids" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.kubernetesManifestDeployArtifactIds"></a>

```python
kubernetes_manifest_deploy_artifact_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_history`<sup>Required</sup> <a name="max_history" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxHistory"></a>

```python
max_history: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_memory_in_mbs`<sup>Required</sup> <a name="max_memory_in_mbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxMemoryInMbs"></a>

```python
max_memory_in_mbs: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `oke_blue_green_deploy_stage_id`<sup>Required</sup> <a name="oke_blue_green_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeBlueGreenDeployStageId"></a>

```python
oke_blue_green_deploy_stage_id: str
```

- *Type:* str

---

##### `oke_canary_deploy_stage_id`<sup>Required</sup> <a name="oke_canary_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryDeployStageId"></a>

```python
oke_canary_deploy_stage_id: str
```

- *Type:* str

---

##### `oke_canary_traffic_shift_deploy_stage_id`<sup>Required</sup> <a name="oke_canary_traffic_shift_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryTrafficShiftDeployStageId"></a>

```python
oke_canary_traffic_shift_deploy_stage_id: str
```

- *Type:* str

---

##### `oke_cluster_deploy_environment_id`<sup>Required</sup> <a name="oke_cluster_deploy_environment_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeClusterDeployEnvironmentId"></a>

```python
oke_cluster_deploy_environment_id: str
```

- *Type:* str

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.purpose"></a>

```python
purpose: str
```

- *Type:* str

---

##### `release_name`<sup>Required</sup> <a name="release_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.releaseName"></a>

```python
release_name: str
```

- *Type:* str

---

##### `should_cleanup_on_fail`<sup>Required</sup> <a name="should_cleanup_on_fail" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldCleanupOnFail"></a>

```python
should_cleanup_on_fail: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_not_wait`<sup>Required</sup> <a name="should_not_wait" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldNotWait"></a>

```python
should_not_wait: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_reset_values`<sup>Required</sup> <a name="should_reset_values" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldResetValues"></a>

```python
should_reset_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_reuse_values`<sup>Required</sup> <a name="should_reuse_values" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldReuseValues"></a>

```python
should_reuse_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_skip_crds`<sup>Required</sup> <a name="should_skip_crds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipCrds"></a>

```python
should_skip_crds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_skip_render_subchart_notes`<sup>Required</sup> <a name="should_skip_render_subchart_notes" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipRenderSubchartNotes"></a>

```python
should_skip_render_subchart_notes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `traffic_shift_target`<sup>Required</sup> <a name="traffic_shift_target" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.trafficShiftTarget"></a>

```python
traffic_shift_target: str
```

- *Type:* str

---

##### `values_artifact_ids`<sup>Required</sup> <a name="values_artifact_ids" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.valuesArtifactIds"></a>

```python
values_artifact_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsDeployStageApprovalPolicy <a name="DevopsDeployStageApprovalPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageApprovalPolicy(
  approval_policy_type: str,
  number_of_approvals_required: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.property.approvalPolicyType">approval_policy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#approval_policy_type DevopsDeployStage#approval_policy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.property.numberOfApprovalsRequired">number_of_approvals_required</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#number_of_approvals_required DevopsDeployStage#number_of_approvals_required}. |

---

##### `approval_policy_type`<sup>Required</sup> <a name="approval_policy_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.property.approvalPolicyType"></a>

```python
approval_policy_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#approval_policy_type DevopsDeployStage#approval_policy_type}.

---

##### `number_of_approvals_required`<sup>Required</sup> <a name="number_of_approvals_required" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.property.numberOfApprovalsRequired"></a>

```python
number_of_approvals_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#number_of_approvals_required DevopsDeployStage#number_of_approvals_required}.

---

### DevopsDeployStageBlueBackendIps <a name="DevopsDeployStageBlueBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageBlueBackendIps(
  items: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps.property.items">items</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}. |

---

##### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}.

---

### DevopsDeployStageBlueGreenStrategy <a name="DevopsDeployStageBlueGreenStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageBlueGreenStrategy(
  ingress_name: str,
  namespace_a: str,
  namespace_b: str,
  strategy_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.ingressName">ingress_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.namespaceA">namespace_a</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace_a DevopsDeployStage#namespace_a}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.namespaceB">namespace_b</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace_b DevopsDeployStage#namespace_b}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.strategyType">strategy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}. |

---

##### `ingress_name`<sup>Required</sup> <a name="ingress_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.ingressName"></a>

```python
ingress_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}.

---

##### `namespace_a`<sup>Required</sup> <a name="namespace_a" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.namespaceA"></a>

```python
namespace_a: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace_a DevopsDeployStage#namespace_a}.

---

##### `namespace_b`<sup>Required</sup> <a name="namespace_b" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.namespaceB"></a>

```python
namespace_b: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace_b DevopsDeployStage#namespace_b}.

---

##### `strategy_type`<sup>Required</sup> <a name="strategy_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.strategyType"></a>

```python
strategy_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}.

---

### DevopsDeployStageCanaryStrategy <a name="DevopsDeployStageCanaryStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageCanaryStrategy(
  ingress_name: str,
  namespace: str,
  strategy_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.ingressName">ingress_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.strategyType">strategy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}. |

---

##### `ingress_name`<sup>Required</sup> <a name="ingress_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.ingressName"></a>

```python
ingress_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}.

---

##### `strategy_type`<sup>Required</sup> <a name="strategy_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.strategyType"></a>

```python
strategy_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}.

---

### DevopsDeployStageConfig <a name="DevopsDeployStageConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  deploy_pipeline_id: str,
  deploy_stage_predecessor_collection: DevopsDeployStageDeployStagePredecessorCollection,
  deploy_stage_type: str,
  approval_policy: DevopsDeployStageApprovalPolicy = None,
  are_hooks_enabled: typing.Union[bool, IResolvable] = None,
  blue_backend_ips: DevopsDeployStageBlueBackendIps = None,
  blue_green_strategy: DevopsDeployStageBlueGreenStrategy = None,
  canary_strategy: DevopsDeployStageCanaryStrategy = None,
  command_spec_deploy_artifact_id: str = None,
  compute_instance_group_blue_green_deployment_deploy_stage_id: str = None,
  compute_instance_group_canary_deploy_stage_id: str = None,
  compute_instance_group_canary_traffic_shift_deploy_stage_id: str = None,
  compute_instance_group_deploy_environment_id: str = None,
  config: typing.Mapping[str] = None,
  container_config: DevopsDeployStageContainerConfig = None,
  defined_tags: typing.Mapping[str] = None,
  deploy_artifact_id: str = None,
  deploy_artifact_ids: typing.List[str] = None,
  deploy_environment_id_a: str = None,
  deploy_environment_id_b: str = None,
  deployment_spec_deploy_artifact_id: str = None,
  description: str = None,
  display_name: str = None,
  docker_image_deploy_artifact_id: str = None,
  failure_policy: DevopsDeployStageFailurePolicy = None,
  freeform_tags: typing.Mapping[str] = None,
  function_deploy_environment_id: str = None,
  function_timeout_in_seconds: typing.Union[int, float] = None,
  green_backend_ips: DevopsDeployStageGreenBackendIps = None,
  helm_chart_deploy_artifact_id: str = None,
  helm_command_artifact_ids: typing.List[str] = None,
  id: str = None,
  is_async: typing.Union[bool, IResolvable] = None,
  is_debug_enabled: typing.Union[bool, IResolvable] = None,
  is_force_enabled: typing.Union[bool, IResolvable] = None,
  is_uninstall_on_stage_delete: typing.Union[bool, IResolvable] = None,
  is_validation_enabled: typing.Union[bool, IResolvable] = None,
  kubernetes_manifest_deploy_artifact_ids: typing.List[str] = None,
  load_balancer_config: DevopsDeployStageLoadBalancerConfig = None,
  max_history: typing.Union[int, float] = None,
  max_memory_in_mbs: str = None,
  namespace: str = None,
  oke_blue_green_deploy_stage_id: str = None,
  oke_canary_deploy_stage_id: str = None,
  oke_canary_traffic_shift_deploy_stage_id: str = None,
  oke_cluster_deploy_environment_id: str = None,
  production_load_balancer_config: DevopsDeployStageProductionLoadBalancerConfig = None,
  purpose: str = None,
  release_name: str = None,
  rollback_policy: DevopsDeployStageRollbackPolicy = None,
  rollout_policy: DevopsDeployStageRolloutPolicy = None,
  set_string: DevopsDeployStageSetString = None,
  set_values: DevopsDeployStageSetValues = None,
  should_cleanup_on_fail: typing.Union[bool, IResolvable] = None,
  should_not_wait: typing.Union[bool, IResolvable] = None,
  should_reset_values: typing.Union[bool, IResolvable] = None,
  should_reuse_values: typing.Union[bool, IResolvable] = None,
  should_skip_crds: typing.Union[bool, IResolvable] = None,
  should_skip_render_subchart_notes: typing.Union[bool, IResolvable] = None,
  test_load_balancer_config: DevopsDeployStageTestLoadBalancerConfig = None,
  timeout_in_seconds: typing.Union[int, float] = None,
  timeouts: DevopsDeployStageTimeouts = None,
  traffic_shift_target: str = None,
  values_artifact_ids: typing.List[str] = None,
  wait_criteria: DevopsDeployStageWaitCriteria = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployPipelineId">deploy_pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_pipeline_id DevopsDeployStage#deploy_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployStagePredecessorCollection">deploy_stage_predecessor_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a></code> | deploy_stage_predecessor_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployStageType">deploy_stage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_stage_type DevopsDeployStage#deploy_stage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.approvalPolicy">approval_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a></code> | approval_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.areHooksEnabled">are_hooks_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#are_hooks_enabled DevopsDeployStage#are_hooks_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.blueBackendIps">blue_backend_ips</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a></code> | blue_backend_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.blueGreenStrategy">blue_green_strategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a></code> | blue_green_strategy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.canaryStrategy">canary_strategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a></code> | canary_strategy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.commandSpecDeployArtifactId">command_spec_deploy_artifact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#command_spec_deploy_artifact_id DevopsDeployStage#command_spec_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupBlueGreenDeploymentDeployStageId">compute_instance_group_blue_green_deployment_deploy_stage_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_blue_green_deployment_deploy_stage_id DevopsDeployStage#compute_instance_group_blue_green_deployment_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupCanaryDeployStageId">compute_instance_group_canary_deploy_stage_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupCanaryTrafficShiftDeployStageId">compute_instance_group_canary_traffic_shift_deploy_stage_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_traffic_shift_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_traffic_shift_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupDeployEnvironmentId">compute_instance_group_deploy_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_deploy_environment_id DevopsDeployStage#compute_instance_group_deploy_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.config">config</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#config DevopsDeployStage#config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.containerConfig">container_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a></code> | container_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#defined_tags DevopsDeployStage#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployArtifactId">deploy_artifact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_id DevopsDeployStage#deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployArtifactIds">deploy_artifact_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_ids DevopsDeployStage#deploy_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployEnvironmentIdA">deploy_environment_id_a</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_a DevopsDeployStage#deploy_environment_id_a}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployEnvironmentIdB">deploy_environment_id_b</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_b DevopsDeployStage#deploy_environment_id_b}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deploymentSpecDeployArtifactId">deployment_spec_deploy_artifact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deployment_spec_deploy_artifact_id DevopsDeployStage#deployment_spec_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#description DevopsDeployStage#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#display_name DevopsDeployStage#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.dockerImageDeployArtifactId">docker_image_deploy_artifact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#docker_image_deploy_artifact_id DevopsDeployStage#docker_image_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.failurePolicy">failure_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a></code> | failure_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#freeform_tags DevopsDeployStage#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.functionDeployEnvironmentId">function_deploy_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_deploy_environment_id DevopsDeployStage#function_deploy_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.functionTimeoutInSeconds">function_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_timeout_in_seconds DevopsDeployStage#function_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.greenBackendIps">green_backend_ips</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a></code> | green_backend_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.helmChartDeployArtifactId">helm_chart_deploy_artifact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_chart_deploy_artifact_id DevopsDeployStage#helm_chart_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.helmCommandArtifactIds">helm_command_artifact_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_command_artifact_ids DevopsDeployStage#helm_command_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isAsync">is_async</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_async DevopsDeployStage#is_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isDebugEnabled">is_debug_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_debug_enabled DevopsDeployStage#is_debug_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isForceEnabled">is_force_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_force_enabled DevopsDeployStage#is_force_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isUninstallOnStageDelete">is_uninstall_on_stage_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_uninstall_on_stage_delete DevopsDeployStage#is_uninstall_on_stage_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isValidationEnabled">is_validation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_validation_enabled DevopsDeployStage#is_validation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.kubernetesManifestDeployArtifactIds">kubernetes_manifest_deploy_artifact_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#kubernetes_manifest_deploy_artifact_ids DevopsDeployStage#kubernetes_manifest_deploy_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.loadBalancerConfig">load_balancer_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a></code> | load_balancer_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.maxHistory">max_history</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_history DevopsDeployStage#max_history}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.maxMemoryInMbs">max_memory_in_mbs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_memory_in_mbs DevopsDeployStage#max_memory_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeBlueGreenDeployStageId">oke_blue_green_deploy_stage_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_blue_green_deploy_stage_id DevopsDeployStage#oke_blue_green_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeCanaryDeployStageId">oke_canary_deploy_stage_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_deploy_stage_id DevopsDeployStage#oke_canary_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeCanaryTrafficShiftDeployStageId">oke_canary_traffic_shift_deploy_stage_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_traffic_shift_deploy_stage_id DevopsDeployStage#oke_canary_traffic_shift_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeClusterDeployEnvironmentId">oke_cluster_deploy_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_cluster_deploy_environment_id DevopsDeployStage#oke_cluster_deploy_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.productionLoadBalancerConfig">production_load_balancer_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a></code> | production_load_balancer_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.purpose">purpose</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#purpose DevopsDeployStage#purpose}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.releaseName">release_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#release_name DevopsDeployStage#release_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.rollbackPolicy">rollback_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a></code> | rollback_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.rolloutPolicy">rollout_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a></code> | rollout_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.setString">set_string</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a></code> | set_string block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.setValues">set_values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a></code> | set_values block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldCleanupOnFail">should_cleanup_on_fail</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_cleanup_on_fail DevopsDeployStage#should_cleanup_on_fail}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldNotWait">should_not_wait</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_not_wait DevopsDeployStage#should_not_wait}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldResetValues">should_reset_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reset_values DevopsDeployStage#should_reset_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldReuseValues">should_reuse_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reuse_values DevopsDeployStage#should_reuse_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldSkipCrds">should_skip_crds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_crds DevopsDeployStage#should_skip_crds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldSkipRenderSubchartNotes">should_skip_render_subchart_notes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_render_subchart_notes DevopsDeployStage#should_skip_render_subchart_notes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.testLoadBalancerConfig">test_load_balancer_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a></code> | test_load_balancer_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#timeout_in_seconds DevopsDeployStage#timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.trafficShiftTarget">traffic_shift_target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#traffic_shift_target DevopsDeployStage#traffic_shift_target}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.valuesArtifactIds">values_artifact_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#values_artifact_ids DevopsDeployStage#values_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.waitCriteria">wait_criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a></code> | wait_criteria block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `deploy_pipeline_id`<sup>Required</sup> <a name="deploy_pipeline_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployPipelineId"></a>

```python
deploy_pipeline_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_pipeline_id DevopsDeployStage#deploy_pipeline_id}.

---

##### `deploy_stage_predecessor_collection`<sup>Required</sup> <a name="deploy_stage_predecessor_collection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployStagePredecessorCollection"></a>

```python
deploy_stage_predecessor_collection: DevopsDeployStageDeployStagePredecessorCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a>

deploy_stage_predecessor_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_stage_predecessor_collection DevopsDeployStage#deploy_stage_predecessor_collection}

---

##### `deploy_stage_type`<sup>Required</sup> <a name="deploy_stage_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployStageType"></a>

```python
deploy_stage_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_stage_type DevopsDeployStage#deploy_stage_type}.

---

##### `approval_policy`<sup>Optional</sup> <a name="approval_policy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.approvalPolicy"></a>

```python
approval_policy: DevopsDeployStageApprovalPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a>

approval_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#approval_policy DevopsDeployStage#approval_policy}

---

##### `are_hooks_enabled`<sup>Optional</sup> <a name="are_hooks_enabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.areHooksEnabled"></a>

```python
are_hooks_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#are_hooks_enabled DevopsDeployStage#are_hooks_enabled}.

---

##### `blue_backend_ips`<sup>Optional</sup> <a name="blue_backend_ips" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.blueBackendIps"></a>

```python
blue_backend_ips: DevopsDeployStageBlueBackendIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a>

blue_backend_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#blue_backend_ips DevopsDeployStage#blue_backend_ips}

---

##### `blue_green_strategy`<sup>Optional</sup> <a name="blue_green_strategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.blueGreenStrategy"></a>

```python
blue_green_strategy: DevopsDeployStageBlueGreenStrategy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a>

blue_green_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#blue_green_strategy DevopsDeployStage#blue_green_strategy}

---

##### `canary_strategy`<sup>Optional</sup> <a name="canary_strategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.canaryStrategy"></a>

```python
canary_strategy: DevopsDeployStageCanaryStrategy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a>

canary_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#canary_strategy DevopsDeployStage#canary_strategy}

---

##### `command_spec_deploy_artifact_id`<sup>Optional</sup> <a name="command_spec_deploy_artifact_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.commandSpecDeployArtifactId"></a>

```python
command_spec_deploy_artifact_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#command_spec_deploy_artifact_id DevopsDeployStage#command_spec_deploy_artifact_id}.

---

##### `compute_instance_group_blue_green_deployment_deploy_stage_id`<sup>Optional</sup> <a name="compute_instance_group_blue_green_deployment_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupBlueGreenDeploymentDeployStageId"></a>

```python
compute_instance_group_blue_green_deployment_deploy_stage_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_blue_green_deployment_deploy_stage_id DevopsDeployStage#compute_instance_group_blue_green_deployment_deploy_stage_id}.

---

##### `compute_instance_group_canary_deploy_stage_id`<sup>Optional</sup> <a name="compute_instance_group_canary_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupCanaryDeployStageId"></a>

```python
compute_instance_group_canary_deploy_stage_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_deploy_stage_id}.

---

##### `compute_instance_group_canary_traffic_shift_deploy_stage_id`<sup>Optional</sup> <a name="compute_instance_group_canary_traffic_shift_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupCanaryTrafficShiftDeployStageId"></a>

```python
compute_instance_group_canary_traffic_shift_deploy_stage_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_traffic_shift_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_traffic_shift_deploy_stage_id}.

---

##### `compute_instance_group_deploy_environment_id`<sup>Optional</sup> <a name="compute_instance_group_deploy_environment_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupDeployEnvironmentId"></a>

```python
compute_instance_group_deploy_environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_deploy_environment_id DevopsDeployStage#compute_instance_group_deploy_environment_id}.

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.config"></a>

```python
config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#config DevopsDeployStage#config}.

---

##### `container_config`<sup>Optional</sup> <a name="container_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.containerConfig"></a>

```python
container_config: DevopsDeployStageContainerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a>

container_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#container_config DevopsDeployStage#container_config}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#defined_tags DevopsDeployStage#defined_tags}.

---

##### `deploy_artifact_id`<sup>Optional</sup> <a name="deploy_artifact_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployArtifactId"></a>

```python
deploy_artifact_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_id DevopsDeployStage#deploy_artifact_id}.

---

##### `deploy_artifact_ids`<sup>Optional</sup> <a name="deploy_artifact_ids" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployArtifactIds"></a>

```python
deploy_artifact_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_ids DevopsDeployStage#deploy_artifact_ids}.

---

##### `deploy_environment_id_a`<sup>Optional</sup> <a name="deploy_environment_id_a" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployEnvironmentIdA"></a>

```python
deploy_environment_id_a: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_a DevopsDeployStage#deploy_environment_id_a}.

---

##### `deploy_environment_id_b`<sup>Optional</sup> <a name="deploy_environment_id_b" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployEnvironmentIdB"></a>

```python
deploy_environment_id_b: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_b DevopsDeployStage#deploy_environment_id_b}.

---

##### `deployment_spec_deploy_artifact_id`<sup>Optional</sup> <a name="deployment_spec_deploy_artifact_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deploymentSpecDeployArtifactId"></a>

```python
deployment_spec_deploy_artifact_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deployment_spec_deploy_artifact_id DevopsDeployStage#deployment_spec_deploy_artifact_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#description DevopsDeployStage#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#display_name DevopsDeployStage#display_name}.

---

##### `docker_image_deploy_artifact_id`<sup>Optional</sup> <a name="docker_image_deploy_artifact_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.dockerImageDeployArtifactId"></a>

```python
docker_image_deploy_artifact_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#docker_image_deploy_artifact_id DevopsDeployStage#docker_image_deploy_artifact_id}.

---

##### `failure_policy`<sup>Optional</sup> <a name="failure_policy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.failurePolicy"></a>

```python
failure_policy: DevopsDeployStageFailurePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a>

failure_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_policy DevopsDeployStage#failure_policy}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#freeform_tags DevopsDeployStage#freeform_tags}.

---

##### `function_deploy_environment_id`<sup>Optional</sup> <a name="function_deploy_environment_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.functionDeployEnvironmentId"></a>

```python
function_deploy_environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_deploy_environment_id DevopsDeployStage#function_deploy_environment_id}.

---

##### `function_timeout_in_seconds`<sup>Optional</sup> <a name="function_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.functionTimeoutInSeconds"></a>

```python
function_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_timeout_in_seconds DevopsDeployStage#function_timeout_in_seconds}.

---

##### `green_backend_ips`<sup>Optional</sup> <a name="green_backend_ips" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.greenBackendIps"></a>

```python
green_backend_ips: DevopsDeployStageGreenBackendIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a>

green_backend_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#green_backend_ips DevopsDeployStage#green_backend_ips}

---

##### `helm_chart_deploy_artifact_id`<sup>Optional</sup> <a name="helm_chart_deploy_artifact_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.helmChartDeployArtifactId"></a>

```python
helm_chart_deploy_artifact_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_chart_deploy_artifact_id DevopsDeployStage#helm_chart_deploy_artifact_id}.

---

##### `helm_command_artifact_ids`<sup>Optional</sup> <a name="helm_command_artifact_ids" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.helmCommandArtifactIds"></a>

```python
helm_command_artifact_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_command_artifact_ids DevopsDeployStage#helm_command_artifact_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_async`<sup>Optional</sup> <a name="is_async" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isAsync"></a>

```python
is_async: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_async DevopsDeployStage#is_async}.

---

##### `is_debug_enabled`<sup>Optional</sup> <a name="is_debug_enabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isDebugEnabled"></a>

```python
is_debug_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_debug_enabled DevopsDeployStage#is_debug_enabled}.

---

##### `is_force_enabled`<sup>Optional</sup> <a name="is_force_enabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isForceEnabled"></a>

```python
is_force_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_force_enabled DevopsDeployStage#is_force_enabled}.

---

##### `is_uninstall_on_stage_delete`<sup>Optional</sup> <a name="is_uninstall_on_stage_delete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isUninstallOnStageDelete"></a>

```python
is_uninstall_on_stage_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_uninstall_on_stage_delete DevopsDeployStage#is_uninstall_on_stage_delete}.

---

##### `is_validation_enabled`<sup>Optional</sup> <a name="is_validation_enabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isValidationEnabled"></a>

```python
is_validation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_validation_enabled DevopsDeployStage#is_validation_enabled}.

---

##### `kubernetes_manifest_deploy_artifact_ids`<sup>Optional</sup> <a name="kubernetes_manifest_deploy_artifact_ids" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.kubernetesManifestDeployArtifactIds"></a>

```python
kubernetes_manifest_deploy_artifact_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#kubernetes_manifest_deploy_artifact_ids DevopsDeployStage#kubernetes_manifest_deploy_artifact_ids}.

---

##### `load_balancer_config`<sup>Optional</sup> <a name="load_balancer_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.loadBalancerConfig"></a>

```python
load_balancer_config: DevopsDeployStageLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a>

load_balancer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_config DevopsDeployStage#load_balancer_config}

---

##### `max_history`<sup>Optional</sup> <a name="max_history" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.maxHistory"></a>

```python
max_history: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_history DevopsDeployStage#max_history}.

---

##### `max_memory_in_mbs`<sup>Optional</sup> <a name="max_memory_in_mbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.maxMemoryInMbs"></a>

```python
max_memory_in_mbs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_memory_in_mbs DevopsDeployStage#max_memory_in_mbs}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}.

---

##### `oke_blue_green_deploy_stage_id`<sup>Optional</sup> <a name="oke_blue_green_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeBlueGreenDeployStageId"></a>

```python
oke_blue_green_deploy_stage_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_blue_green_deploy_stage_id DevopsDeployStage#oke_blue_green_deploy_stage_id}.

---

##### `oke_canary_deploy_stage_id`<sup>Optional</sup> <a name="oke_canary_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeCanaryDeployStageId"></a>

```python
oke_canary_deploy_stage_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_deploy_stage_id DevopsDeployStage#oke_canary_deploy_stage_id}.

---

##### `oke_canary_traffic_shift_deploy_stage_id`<sup>Optional</sup> <a name="oke_canary_traffic_shift_deploy_stage_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeCanaryTrafficShiftDeployStageId"></a>

```python
oke_canary_traffic_shift_deploy_stage_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_traffic_shift_deploy_stage_id DevopsDeployStage#oke_canary_traffic_shift_deploy_stage_id}.

---

##### `oke_cluster_deploy_environment_id`<sup>Optional</sup> <a name="oke_cluster_deploy_environment_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeClusterDeployEnvironmentId"></a>

```python
oke_cluster_deploy_environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_cluster_deploy_environment_id DevopsDeployStage#oke_cluster_deploy_environment_id}.

---

##### `production_load_balancer_config`<sup>Optional</sup> <a name="production_load_balancer_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.productionLoadBalancerConfig"></a>

```python
production_load_balancer_config: DevopsDeployStageProductionLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a>

production_load_balancer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#production_load_balancer_config DevopsDeployStage#production_load_balancer_config}

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.purpose"></a>

```python
purpose: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#purpose DevopsDeployStage#purpose}.

---

##### `release_name`<sup>Optional</sup> <a name="release_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.releaseName"></a>

```python
release_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#release_name DevopsDeployStage#release_name}.

---

##### `rollback_policy`<sup>Optional</sup> <a name="rollback_policy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.rollbackPolicy"></a>

```python
rollback_policy: DevopsDeployStageRollbackPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a>

rollback_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#rollback_policy DevopsDeployStage#rollback_policy}

---

##### `rollout_policy`<sup>Optional</sup> <a name="rollout_policy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.rolloutPolicy"></a>

```python
rollout_policy: DevopsDeployStageRolloutPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a>

rollout_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#rollout_policy DevopsDeployStage#rollout_policy}

---

##### `set_string`<sup>Optional</sup> <a name="set_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.setString"></a>

```python
set_string: DevopsDeployStageSetString
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a>

set_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#set_string DevopsDeployStage#set_string}

---

##### `set_values`<sup>Optional</sup> <a name="set_values" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.setValues"></a>

```python
set_values: DevopsDeployStageSetValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a>

set_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#set_values DevopsDeployStage#set_values}

---

##### `should_cleanup_on_fail`<sup>Optional</sup> <a name="should_cleanup_on_fail" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldCleanupOnFail"></a>

```python
should_cleanup_on_fail: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_cleanup_on_fail DevopsDeployStage#should_cleanup_on_fail}.

---

##### `should_not_wait`<sup>Optional</sup> <a name="should_not_wait" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldNotWait"></a>

```python
should_not_wait: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_not_wait DevopsDeployStage#should_not_wait}.

---

##### `should_reset_values`<sup>Optional</sup> <a name="should_reset_values" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldResetValues"></a>

```python
should_reset_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reset_values DevopsDeployStage#should_reset_values}.

---

##### `should_reuse_values`<sup>Optional</sup> <a name="should_reuse_values" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldReuseValues"></a>

```python
should_reuse_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reuse_values DevopsDeployStage#should_reuse_values}.

---

##### `should_skip_crds`<sup>Optional</sup> <a name="should_skip_crds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldSkipCrds"></a>

```python
should_skip_crds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_crds DevopsDeployStage#should_skip_crds}.

---

##### `should_skip_render_subchart_notes`<sup>Optional</sup> <a name="should_skip_render_subchart_notes" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldSkipRenderSubchartNotes"></a>

```python
should_skip_render_subchart_notes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_render_subchart_notes DevopsDeployStage#should_skip_render_subchart_notes}.

---

##### `test_load_balancer_config`<sup>Optional</sup> <a name="test_load_balancer_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.testLoadBalancerConfig"></a>

```python
test_load_balancer_config: DevopsDeployStageTestLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a>

test_load_balancer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#test_load_balancer_config DevopsDeployStage#test_load_balancer_config}

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#timeout_in_seconds DevopsDeployStage#timeout_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.timeouts"></a>

```python
timeouts: DevopsDeployStageTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#timeouts DevopsDeployStage#timeouts}

---

##### `traffic_shift_target`<sup>Optional</sup> <a name="traffic_shift_target" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.trafficShiftTarget"></a>

```python
traffic_shift_target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#traffic_shift_target DevopsDeployStage#traffic_shift_target}.

---

##### `values_artifact_ids`<sup>Optional</sup> <a name="values_artifact_ids" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.valuesArtifactIds"></a>

```python
values_artifact_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#values_artifact_ids DevopsDeployStage#values_artifact_ids}.

---

##### `wait_criteria`<sup>Optional</sup> <a name="wait_criteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.waitCriteria"></a>

```python
wait_criteria: DevopsDeployStageWaitCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a>

wait_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_criteria DevopsDeployStage#wait_criteria}

---

### DevopsDeployStageContainerConfig <a name="DevopsDeployStageContainerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageContainerConfig(
  container_config_type: str,
  network_channel: DevopsDeployStageContainerConfigNetworkChannel,
  shape_config: DevopsDeployStageContainerConfigShapeConfig,
  shape_name: str,
  availability_domain: str = None,
  compartment_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.containerConfigType">container_config_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#container_config_type DevopsDeployStage#container_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.networkChannel">network_channel</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a></code> | network_channel block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.shapeName">shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#shape_name DevopsDeployStage#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#availability_domain DevopsDeployStage#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compartment_id DevopsDeployStage#compartment_id}. |

---

##### `container_config_type`<sup>Required</sup> <a name="container_config_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.containerConfigType"></a>

```python
container_config_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#container_config_type DevopsDeployStage#container_config_type}.

---

##### `network_channel`<sup>Required</sup> <a name="network_channel" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.networkChannel"></a>

```python
network_channel: DevopsDeployStageContainerConfigNetworkChannel
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a>

network_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#network_channel DevopsDeployStage#network_channel}

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.shapeConfig"></a>

```python
shape_config: DevopsDeployStageContainerConfigShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#shape_config DevopsDeployStage#shape_config}

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#shape_name DevopsDeployStage#shape_name}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#availability_domain DevopsDeployStage#availability_domain}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compartment_id DevopsDeployStage#compartment_id}.

---

### DevopsDeployStageContainerConfigNetworkChannel <a name="DevopsDeployStageContainerConfigNetworkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel(
  network_channel_type: str,
  subnet_id: str,
  nsg_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.networkChannelType">network_channel_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#network_channel_type DevopsDeployStage#network_channel_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#subnet_id DevopsDeployStage#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#nsg_ids DevopsDeployStage#nsg_ids}. |

---

##### `network_channel_type`<sup>Required</sup> <a name="network_channel_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.networkChannelType"></a>

```python
network_channel_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#network_channel_type DevopsDeployStage#network_channel_type}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#subnet_id DevopsDeployStage#subnet_id}.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#nsg_ids DevopsDeployStage#nsg_ids}.

---

### DevopsDeployStageContainerConfigShapeConfig <a name="DevopsDeployStageContainerConfigShapeConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig(
  ocpus: typing.Union[int, float],
  memory_in_gbs: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ocpus DevopsDeployStage#ocpus}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#memory_in_gbs DevopsDeployStage#memory_in_gbs}. |

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ocpus DevopsDeployStage#ocpus}.

---

##### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#memory_in_gbs DevopsDeployStage#memory_in_gbs}.

---

### DevopsDeployStageDeployStagePredecessorCollection <a name="DevopsDeployStageDeployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection(
  items: typing.Union[IResolvable, typing.List[DevopsDeployStageDeployStagePredecessorCollectionItems]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection.property.items">items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>]]</code> | items block. |

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection.property.items"></a>

```python
items: typing.Union[IResolvable, typing.List[DevopsDeployStageDeployStagePredecessorCollectionItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}

---

### DevopsDeployStageDeployStagePredecessorCollectionItems <a name="DevopsDeployStageDeployStagePredecessorCollectionItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems(
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DevopsDeployStageFailurePolicy <a name="DevopsDeployStageFailurePolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageFailurePolicy(
  policy_type: str,
  failure_count: typing.Union[int, float] = None,
  failure_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.policyType">policy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.failureCount">failure_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_count DevopsDeployStage#failure_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.failurePercentage">failure_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_percentage DevopsDeployStage#failure_percentage}. |

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}.

---

##### `failure_count`<sup>Optional</sup> <a name="failure_count" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.failureCount"></a>

```python
failure_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_count DevopsDeployStage#failure_count}.

---

##### `failure_percentage`<sup>Optional</sup> <a name="failure_percentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.failurePercentage"></a>

```python
failure_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_percentage DevopsDeployStage#failure_percentage}.

---

### DevopsDeployStageGreenBackendIps <a name="DevopsDeployStageGreenBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageGreenBackendIps(
  items: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps.property.items">items</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}. |

---

##### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}.

---

### DevopsDeployStageLoadBalancerConfig <a name="DevopsDeployStageLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageLoadBalancerConfig(
  backend_port: typing.Union[int, float] = None,
  listener_name: str = None,
  load_balancer_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.backendPort">backend_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.listenerName">listener_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}. |

---

##### `backend_port`<sup>Optional</sup> <a name="backend_port" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.backendPort"></a>

```python
backend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}.

---

##### `listener_name`<sup>Optional</sup> <a name="listener_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.listenerName"></a>

```python
listener_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}.

---

##### `load_balancer_id`<sup>Optional</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}.

---

### DevopsDeployStageProductionLoadBalancerConfig <a name="DevopsDeployStageProductionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig(
  backend_port: typing.Union[int, float] = None,
  listener_name: str = None,
  load_balancer_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.backendPort">backend_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.listenerName">listener_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}. |

---

##### `backend_port`<sup>Optional</sup> <a name="backend_port" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.backendPort"></a>

```python
backend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}.

---

##### `listener_name`<sup>Optional</sup> <a name="listener_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.listenerName"></a>

```python
listener_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}.

---

##### `load_balancer_id`<sup>Optional</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}.

---

### DevopsDeployStageRollbackPolicy <a name="DevopsDeployStageRollbackPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageRollbackPolicy(
  policy_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy.property.policyType">policy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}. |

---

##### `policy_type`<sup>Optional</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}.

---

### DevopsDeployStageRolloutPolicy <a name="DevopsDeployStageRolloutPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageRolloutPolicy(
  batch_count: typing.Union[int, float] = None,
  batch_delay_in_seconds: typing.Union[int, float] = None,
  batch_percentage: typing.Union[int, float] = None,
  policy_type: str = None,
  ramp_limit_percent: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchCount">batch_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_count DevopsDeployStage#batch_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchDelayInSeconds">batch_delay_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_delay_in_seconds DevopsDeployStage#batch_delay_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchPercentage">batch_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_percentage DevopsDeployStage#batch_percentage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.policyType">policy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.rampLimitPercent">ramp_limit_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ramp_limit_percent DevopsDeployStage#ramp_limit_percent}. |

---

##### `batch_count`<sup>Optional</sup> <a name="batch_count" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchCount"></a>

```python
batch_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_count DevopsDeployStage#batch_count}.

---

##### `batch_delay_in_seconds`<sup>Optional</sup> <a name="batch_delay_in_seconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchDelayInSeconds"></a>

```python
batch_delay_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_delay_in_seconds DevopsDeployStage#batch_delay_in_seconds}.

---

##### `batch_percentage`<sup>Optional</sup> <a name="batch_percentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchPercentage"></a>

```python
batch_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_percentage DevopsDeployStage#batch_percentage}.

---

##### `policy_type`<sup>Optional</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}.

---

##### `ramp_limit_percent`<sup>Optional</sup> <a name="ramp_limit_percent" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.rampLimitPercent"></a>

```python
ramp_limit_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ramp_limit_percent DevopsDeployStage#ramp_limit_percent}.

---

### DevopsDeployStageSetString <a name="DevopsDeployStageSetString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageSetString(
  items: typing.Union[IResolvable, typing.List[DevopsDeployStageSetStringItems]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString.property.items">items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>]]</code> | items block. |

---

##### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString.property.items"></a>

```python
items: typing.Union[IResolvable, typing.List[DevopsDeployStageSetStringItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}

---

### DevopsDeployStageSetStringItems <a name="DevopsDeployStageSetStringItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageSetStringItems(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#name DevopsDeployStage#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#value DevopsDeployStage#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#name DevopsDeployStage#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#value DevopsDeployStage#value}.

---

### DevopsDeployStageSetValues <a name="DevopsDeployStageSetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageSetValues(
  items: typing.Union[IResolvable, typing.List[DevopsDeployStageSetValuesItems]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues.property.items">items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>]]</code> | items block. |

---

##### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues.property.items"></a>

```python
items: typing.Union[IResolvable, typing.List[DevopsDeployStageSetValuesItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}

---

### DevopsDeployStageSetValuesItems <a name="DevopsDeployStageSetValuesItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageSetValuesItems(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#name DevopsDeployStage#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#value DevopsDeployStage#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#name DevopsDeployStage#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#value DevopsDeployStage#value}.

---

### DevopsDeployStageTestLoadBalancerConfig <a name="DevopsDeployStageTestLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig(
  backend_port: typing.Union[int, float] = None,
  listener_name: str = None,
  load_balancer_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.backendPort">backend_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.listenerName">listener_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}. |

---

##### `backend_port`<sup>Optional</sup> <a name="backend_port" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.backendPort"></a>

```python
backend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}.

---

##### `listener_name`<sup>Optional</sup> <a name="listener_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.listenerName"></a>

```python
listener_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}.

---

##### `load_balancer_id`<sup>Optional</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}.

---

### DevopsDeployStageTimeouts <a name="DevopsDeployStageTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#create DevopsDeployStage#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#delete DevopsDeployStage#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#update DevopsDeployStage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#create DevopsDeployStage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#delete DevopsDeployStage#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#update DevopsDeployStage#update}.

---

### DevopsDeployStageWaitCriteria <a name="DevopsDeployStageWaitCriteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageWaitCriteria(
  wait_duration: str,
  wait_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.property.waitDuration">wait_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_duration DevopsDeployStage#wait_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.property.waitType">wait_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_type DevopsDeployStage#wait_type}. |

---

##### `wait_duration`<sup>Required</sup> <a name="wait_duration" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.property.waitDuration"></a>

```python
wait_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_duration DevopsDeployStage#wait_duration}.

---

##### `wait_type`<sup>Required</sup> <a name="wait_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.property.waitType"></a>

```python
wait_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_type DevopsDeployStage#wait_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsDeployStageApprovalPolicyOutputReference <a name="DevopsDeployStageApprovalPolicyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.approvalPolicyTypeInput">approval_policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.numberOfApprovalsRequiredInput">number_of_approvals_required_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.approvalPolicyType">approval_policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.numberOfApprovalsRequired">number_of_approvals_required</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approval_policy_type_input`<sup>Optional</sup> <a name="approval_policy_type_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.approvalPolicyTypeInput"></a>

```python
approval_policy_type_input: str
```

- *Type:* str

---

##### `number_of_approvals_required_input`<sup>Optional</sup> <a name="number_of_approvals_required_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.numberOfApprovalsRequiredInput"></a>

```python
number_of_approvals_required_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `approval_policy_type`<sup>Required</sup> <a name="approval_policy_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.approvalPolicyType"></a>

```python
approval_policy_type: str
```

- *Type:* str

---

##### `number_of_approvals_required`<sup>Required</sup> <a name="number_of_approvals_required" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.numberOfApprovalsRequired"></a>

```python
number_of_approvals_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DevopsDeployStageApprovalPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a>

---


### DevopsDeployStageBlueBackendIpsOutputReference <a name="DevopsDeployStageBlueBackendIpsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.resetItems">reset_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_items` <a name="reset_items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.resetItems"></a>

```python
def reset_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.itemsInput">items_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.items">items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.itemsInput"></a>

```python
items_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.internalValue"></a>

```python
internal_value: DevopsDeployStageBlueBackendIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a>

---


### DevopsDeployStageBlueGreenStrategyOutputReference <a name="DevopsDeployStageBlueGreenStrategyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.ingressNameInput">ingress_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceAInput">namespace_a_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceBInput">namespace_b_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.strategyTypeInput">strategy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.ingressName">ingress_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceA">namespace_a</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceB">namespace_b</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.strategyType">strategy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingress_name_input`<sup>Optional</sup> <a name="ingress_name_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.ingressNameInput"></a>

```python
ingress_name_input: str
```

- *Type:* str

---

##### `namespace_a_input`<sup>Optional</sup> <a name="namespace_a_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceAInput"></a>

```python
namespace_a_input: str
```

- *Type:* str

---

##### `namespace_b_input`<sup>Optional</sup> <a name="namespace_b_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceBInput"></a>

```python
namespace_b_input: str
```

- *Type:* str

---

##### `strategy_type_input`<sup>Optional</sup> <a name="strategy_type_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.strategyTypeInput"></a>

```python
strategy_type_input: str
```

- *Type:* str

---

##### `ingress_name`<sup>Required</sup> <a name="ingress_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.ingressName"></a>

```python
ingress_name: str
```

- *Type:* str

---

##### `namespace_a`<sup>Required</sup> <a name="namespace_a" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceA"></a>

```python
namespace_a: str
```

- *Type:* str

---

##### `namespace_b`<sup>Required</sup> <a name="namespace_b" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceB"></a>

```python
namespace_b: str
```

- *Type:* str

---

##### `strategy_type`<sup>Required</sup> <a name="strategy_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.strategyType"></a>

```python
strategy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.internalValue"></a>

```python
internal_value: DevopsDeployStageBlueGreenStrategy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a>

---


### DevopsDeployStageCanaryStrategyOutputReference <a name="DevopsDeployStageCanaryStrategyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.ingressNameInput">ingress_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.strategyTypeInput">strategy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.ingressName">ingress_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.strategyType">strategy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingress_name_input`<sup>Optional</sup> <a name="ingress_name_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.ingressNameInput"></a>

```python
ingress_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `strategy_type_input`<sup>Optional</sup> <a name="strategy_type_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.strategyTypeInput"></a>

```python
strategy_type_input: str
```

- *Type:* str

---

##### `ingress_name`<sup>Required</sup> <a name="ingress_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.ingressName"></a>

```python
ingress_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `strategy_type`<sup>Required</sup> <a name="strategy_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.strategyType"></a>

```python
strategy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.internalValue"></a>

```python
internal_value: DevopsDeployStageCanaryStrategy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a>

---


### DevopsDeployStageContainerConfigNetworkChannelOutputReference <a name="DevopsDeployStageContainerConfigNetworkChannelOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.networkChannelTypeInput">network_channel_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.networkChannelType">network_channel_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_channel_type_input`<sup>Optional</sup> <a name="network_channel_type_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.networkChannelTypeInput"></a>

```python
network_channel_type_input: str
```

- *Type:* str

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `network_channel_type`<sup>Required</sup> <a name="network_channel_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.networkChannelType"></a>

```python
network_channel_type: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.internalValue"></a>

```python
internal_value: DevopsDeployStageContainerConfigNetworkChannel
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a>

---


### DevopsDeployStageContainerConfigOutputReference <a name="DevopsDeployStageContainerConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageContainerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putNetworkChannel">put_network_channel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putShapeConfig">put_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_network_channel` <a name="put_network_channel" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putNetworkChannel"></a>

```python
def put_network_channel(
  network_channel_type: str,
  subnet_id: str,
  nsg_ids: typing.List[str] = None
) -> None
```

###### `network_channel_type`<sup>Required</sup> <a name="network_channel_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putNetworkChannel.parameter.networkChannelType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#network_channel_type DevopsDeployStage#network_channel_type}.

---

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putNetworkChannel.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#subnet_id DevopsDeployStage#subnet_id}.

---

###### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putNetworkChannel.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#nsg_ids DevopsDeployStage#nsg_ids}.

---

##### `put_shape_config` <a name="put_shape_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putShapeConfig"></a>

```python
def put_shape_config(
  ocpus: typing.Union[int, float],
  memory_in_gbs: typing.Union[int, float] = None
) -> None
```

###### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putShapeConfig.parameter.ocpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ocpus DevopsDeployStage#ocpus}.

---

###### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putShapeConfig.parameter.memoryInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#memory_in_gbs DevopsDeployStage#memory_in_gbs}.

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.networkChannel">network_channel</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference">DevopsDeployStageContainerConfigNetworkChannelOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference">DevopsDeployStageContainerConfigShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.containerConfigTypeInput">container_config_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.networkChannelInput">network_channel_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeConfigInput">shape_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeNameInput">shape_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.containerConfigType">container_config_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeName">shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_channel`<sup>Required</sup> <a name="network_channel" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.networkChannel"></a>

```python
network_channel: DevopsDeployStageContainerConfigNetworkChannelOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference">DevopsDeployStageContainerConfigNetworkChannelOutputReference</a>

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeConfig"></a>

```python
shape_config: DevopsDeployStageContainerConfigShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference">DevopsDeployStageContainerConfigShapeConfigOutputReference</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `container_config_type_input`<sup>Optional</sup> <a name="container_config_type_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.containerConfigTypeInput"></a>

```python
container_config_type_input: str
```

- *Type:* str

---

##### `network_channel_input`<sup>Optional</sup> <a name="network_channel_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.networkChannelInput"></a>

```python
network_channel_input: DevopsDeployStageContainerConfigNetworkChannel
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a>

---

##### `shape_config_input`<sup>Optional</sup> <a name="shape_config_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeConfigInput"></a>

```python
shape_config_input: DevopsDeployStageContainerConfigShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a>

---

##### `shape_name_input`<sup>Optional</sup> <a name="shape_name_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeNameInput"></a>

```python
shape_name_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `container_config_type`<sup>Required</sup> <a name="container_config_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.containerConfigType"></a>

```python
container_config_type: str
```

- *Type:* str

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DevopsDeployStageContainerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a>

---


### DevopsDeployStageContainerConfigShapeConfigOutputReference <a name="DevopsDeployStageContainerConfigShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.resetMemoryInGbs">reset_memory_in_gbs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_memory_in_gbs` <a name="reset_memory_in_gbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.resetMemoryInGbs"></a>

```python
def reset_memory_in_gbs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.memoryInGbsInput">memory_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.ocpusInput">ocpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs_input`<sup>Optional</sup> <a name="memory_in_gbs_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.memoryInGbsInput"></a>

```python
memory_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus_input`<sup>Optional</sup> <a name="ocpus_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.ocpusInput"></a>

```python
ocpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DevopsDeployStageContainerConfigShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a>

---


### DevopsDeployStageDeployStagePredecessorCollectionItemsList <a name="DevopsDeployStageDeployStagePredecessorCollectionItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DevopsDeployStageDeployStagePredecessorCollectionItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>]]

---


### DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference <a name="DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DevopsDeployStageDeployStagePredecessorCollectionItems]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>]

---


### DevopsDeployStageDeployStagePredecessorCollectionOutputReference <a name="DevopsDeployStageDeployStagePredecessorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.putItems">put_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_items` <a name="put_items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.putItems"></a>

```python
def put_items(
  value: typing.Union[IResolvable, typing.List[DevopsDeployStageDeployStagePredecessorCollectionItems]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.putItems.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList">DevopsDeployStageDeployStagePredecessorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.itemsInput">items_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.items"></a>

```python
items: DevopsDeployStageDeployStagePredecessorCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList">DevopsDeployStageDeployStagePredecessorCollectionItemsList</a>

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.itemsInput"></a>

```python
items_input: typing.Union[IResolvable, typing.List[DevopsDeployStageDeployStagePredecessorCollectionItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DevopsDeployStageDeployStagePredecessorCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a>

---


### DevopsDeployStageFailurePolicyOutputReference <a name="DevopsDeployStageFailurePolicyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resetFailureCount">reset_failure_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resetFailurePercentage">reset_failure_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_failure_count` <a name="reset_failure_count" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resetFailureCount"></a>

```python
def reset_failure_count() -> None
```

##### `reset_failure_percentage` <a name="reset_failure_percentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resetFailurePercentage"></a>

```python
def reset_failure_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failureCountInput">failure_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failurePercentageInput">failure_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.policyTypeInput">policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failureCount">failure_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failurePercentage">failure_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failure_count_input`<sup>Optional</sup> <a name="failure_count_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failureCountInput"></a>

```python
failure_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_percentage_input`<sup>Optional</sup> <a name="failure_percentage_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failurePercentageInput"></a>

```python
failure_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_type_input`<sup>Optional</sup> <a name="policy_type_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.policyTypeInput"></a>

```python
policy_type_input: str
```

- *Type:* str

---

##### `failure_count`<sup>Required</sup> <a name="failure_count" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failureCount"></a>

```python
failure_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_percentage`<sup>Required</sup> <a name="failure_percentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failurePercentage"></a>

```python
failure_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DevopsDeployStageFailurePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a>

---


### DevopsDeployStageGreenBackendIpsOutputReference <a name="DevopsDeployStageGreenBackendIpsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.resetItems">reset_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_items` <a name="reset_items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.resetItems"></a>

```python
def reset_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.itemsInput">items_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.items">items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.itemsInput"></a>

```python
items_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.internalValue"></a>

```python
internal_value: DevopsDeployStageGreenBackendIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a>

---


### DevopsDeployStageLoadBalancerConfigOutputReference <a name="DevopsDeployStageLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetBackendPort">reset_backend_port</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetListenerName">reset_listener_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetLoadBalancerId">reset_load_balancer_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backend_port` <a name="reset_backend_port" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetBackendPort"></a>

```python
def reset_backend_port() -> None
```

##### `reset_listener_name` <a name="reset_listener_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetListenerName"></a>

```python
def reset_listener_name() -> None
```

##### `reset_load_balancer_id` <a name="reset_load_balancer_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetLoadBalancerId"></a>

```python
def reset_load_balancer_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.backendPortInput">backend_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.listenerNameInput">listener_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.loadBalancerIdInput">load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.backendPort">backend_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.listenerName">listener_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `backend_port_input`<sup>Optional</sup> <a name="backend_port_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.backendPortInput"></a>

```python
backend_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `listener_name_input`<sup>Optional</sup> <a name="listener_name_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.listenerNameInput"></a>

```python
listener_name_input: str
```

- *Type:* str

---

##### `load_balancer_id_input`<sup>Optional</sup> <a name="load_balancer_id_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.loadBalancerIdInput"></a>

```python
load_balancer_id_input: str
```

- *Type:* str

---

##### `backend_port`<sup>Required</sup> <a name="backend_port" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.backendPort"></a>

```python
backend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `listener_name`<sup>Required</sup> <a name="listener_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.listenerName"></a>

```python
listener_name: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DevopsDeployStageLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a>

---


### DevopsDeployStageProductionLoadBalancerConfigOutputReference <a name="DevopsDeployStageProductionLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetBackendPort">reset_backend_port</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetListenerName">reset_listener_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetLoadBalancerId">reset_load_balancer_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backend_port` <a name="reset_backend_port" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetBackendPort"></a>

```python
def reset_backend_port() -> None
```

##### `reset_listener_name` <a name="reset_listener_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetListenerName"></a>

```python
def reset_listener_name() -> None
```

##### `reset_load_balancer_id` <a name="reset_load_balancer_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetLoadBalancerId"></a>

```python
def reset_load_balancer_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.backendPortInput">backend_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.listenerNameInput">listener_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.loadBalancerIdInput">load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.backendPort">backend_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.listenerName">listener_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `backend_port_input`<sup>Optional</sup> <a name="backend_port_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.backendPortInput"></a>

```python
backend_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `listener_name_input`<sup>Optional</sup> <a name="listener_name_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.listenerNameInput"></a>

```python
listener_name_input: str
```

- *Type:* str

---

##### `load_balancer_id_input`<sup>Optional</sup> <a name="load_balancer_id_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.loadBalancerIdInput"></a>

```python
load_balancer_id_input: str
```

- *Type:* str

---

##### `backend_port`<sup>Required</sup> <a name="backend_port" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.backendPort"></a>

```python
backend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `listener_name`<sup>Required</sup> <a name="listener_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.listenerName"></a>

```python
listener_name: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DevopsDeployStageProductionLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a>

---


### DevopsDeployStageRollbackPolicyOutputReference <a name="DevopsDeployStageRollbackPolicyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.resetPolicyType">reset_policy_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_policy_type` <a name="reset_policy_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.resetPolicyType"></a>

```python
def reset_policy_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.policyTypeInput">policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_type_input`<sup>Optional</sup> <a name="policy_type_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.policyTypeInput"></a>

```python
policy_type_input: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DevopsDeployStageRollbackPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a>

---


### DevopsDeployStageRolloutPolicyOutputReference <a name="DevopsDeployStageRolloutPolicyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchCount">reset_batch_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchDelayInSeconds">reset_batch_delay_in_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchPercentage">reset_batch_percentage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetPolicyType">reset_policy_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetRampLimitPercent">reset_ramp_limit_percent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_batch_count` <a name="reset_batch_count" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchCount"></a>

```python
def reset_batch_count() -> None
```

##### `reset_batch_delay_in_seconds` <a name="reset_batch_delay_in_seconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchDelayInSeconds"></a>

```python
def reset_batch_delay_in_seconds() -> None
```

##### `reset_batch_percentage` <a name="reset_batch_percentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchPercentage"></a>

```python
def reset_batch_percentage() -> None
```

##### `reset_policy_type` <a name="reset_policy_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetPolicyType"></a>

```python
def reset_policy_type() -> None
```

##### `reset_ramp_limit_percent` <a name="reset_ramp_limit_percent" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetRampLimitPercent"></a>

```python
def reset_ramp_limit_percent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchCountInput">batch_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchDelayInSecondsInput">batch_delay_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchPercentageInput">batch_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.policyTypeInput">policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.rampLimitPercentInput">ramp_limit_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchCount">batch_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchDelayInSeconds">batch_delay_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchPercentage">batch_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.rampLimitPercent">ramp_limit_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_count_input`<sup>Optional</sup> <a name="batch_count_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchCountInput"></a>

```python
batch_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_delay_in_seconds_input`<sup>Optional</sup> <a name="batch_delay_in_seconds_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchDelayInSecondsInput"></a>

```python
batch_delay_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_percentage_input`<sup>Optional</sup> <a name="batch_percentage_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchPercentageInput"></a>

```python
batch_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_type_input`<sup>Optional</sup> <a name="policy_type_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.policyTypeInput"></a>

```python
policy_type_input: str
```

- *Type:* str

---

##### `ramp_limit_percent_input`<sup>Optional</sup> <a name="ramp_limit_percent_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.rampLimitPercentInput"></a>

```python
ramp_limit_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_count`<sup>Required</sup> <a name="batch_count" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchCount"></a>

```python
batch_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_delay_in_seconds`<sup>Required</sup> <a name="batch_delay_in_seconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchDelayInSeconds"></a>

```python
batch_delay_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_percentage`<sup>Required</sup> <a name="batch_percentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchPercentage"></a>

```python
batch_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `ramp_limit_percent`<sup>Required</sup> <a name="ramp_limit_percent" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.rampLimitPercent"></a>

```python
ramp_limit_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DevopsDeployStageRolloutPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a>

---


### DevopsDeployStageSetStringItemsList <a name="DevopsDeployStageSetStringItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageSetStringItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsDeployStageSetStringItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DevopsDeployStageSetStringItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>]]

---


### DevopsDeployStageSetStringItemsOutputReference <a name="DevopsDeployStageSetStringItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DevopsDeployStageSetStringItems]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>]

---


### DevopsDeployStageSetStringOutputReference <a name="DevopsDeployStageSetStringOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageSetStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.putItems">put_items</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.resetItems">reset_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_items` <a name="put_items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.putItems"></a>

```python
def put_items(
  value: typing.Union[IResolvable, typing.List[DevopsDeployStageSetStringItems]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.putItems.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>]]

---

##### `reset_items` <a name="reset_items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.resetItems"></a>

```python
def reset_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList">DevopsDeployStageSetStringItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.itemsInput">items_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.items"></a>

```python
items: DevopsDeployStageSetStringItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList">DevopsDeployStageSetStringItemsList</a>

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.itemsInput"></a>

```python
items_input: typing.Union[IResolvable, typing.List[DevopsDeployStageSetStringItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.internalValue"></a>

```python
internal_value: DevopsDeployStageSetString
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a>

---


### DevopsDeployStageSetValuesItemsList <a name="DevopsDeployStageSetValuesItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageSetValuesItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsDeployStageSetValuesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DevopsDeployStageSetValuesItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>]]

---


### DevopsDeployStageSetValuesItemsOutputReference <a name="DevopsDeployStageSetValuesItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DevopsDeployStageSetValuesItems]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>]

---


### DevopsDeployStageSetValuesOutputReference <a name="DevopsDeployStageSetValuesOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageSetValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.putItems">put_items</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.resetItems">reset_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_items` <a name="put_items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.putItems"></a>

```python
def put_items(
  value: typing.Union[IResolvable, typing.List[DevopsDeployStageSetValuesItems]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.putItems.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>]]

---

##### `reset_items` <a name="reset_items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.resetItems"></a>

```python
def reset_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList">DevopsDeployStageSetValuesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.itemsInput">items_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.items"></a>

```python
items: DevopsDeployStageSetValuesItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList">DevopsDeployStageSetValuesItemsList</a>

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.itemsInput"></a>

```python
items_input: typing.Union[IResolvable, typing.List[DevopsDeployStageSetValuesItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.internalValue"></a>

```python
internal_value: DevopsDeployStageSetValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a>

---


### DevopsDeployStageTestLoadBalancerConfigOutputReference <a name="DevopsDeployStageTestLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetBackendPort">reset_backend_port</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetListenerName">reset_listener_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetLoadBalancerId">reset_load_balancer_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backend_port` <a name="reset_backend_port" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetBackendPort"></a>

```python
def reset_backend_port() -> None
```

##### `reset_listener_name` <a name="reset_listener_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetListenerName"></a>

```python
def reset_listener_name() -> None
```

##### `reset_load_balancer_id` <a name="reset_load_balancer_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetLoadBalancerId"></a>

```python
def reset_load_balancer_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.backendPortInput">backend_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.listenerNameInput">listener_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.loadBalancerIdInput">load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.backendPort">backend_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.listenerName">listener_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `backend_port_input`<sup>Optional</sup> <a name="backend_port_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.backendPortInput"></a>

```python
backend_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `listener_name_input`<sup>Optional</sup> <a name="listener_name_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.listenerNameInput"></a>

```python
listener_name_input: str
```

- *Type:* str

---

##### `load_balancer_id_input`<sup>Optional</sup> <a name="load_balancer_id_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.loadBalancerIdInput"></a>

```python
load_balancer_id_input: str
```

- *Type:* str

---

##### `backend_port`<sup>Required</sup> <a name="backend_port" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.backendPort"></a>

```python
backend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `listener_name`<sup>Required</sup> <a name="listener_name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.listenerName"></a>

```python
listener_name: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DevopsDeployStageTestLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a>

---


### DevopsDeployStageTimeoutsOutputReference <a name="DevopsDeployStageTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DevopsDeployStageTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a>]

---


### DevopsDeployStageWaitCriteriaOutputReference <a name="DevopsDeployStageWaitCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import devops_deploy_stage

devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitDurationInput">wait_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitTypeInput">wait_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitDuration">wait_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitType">wait_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `wait_duration_input`<sup>Optional</sup> <a name="wait_duration_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitDurationInput"></a>

```python
wait_duration_input: str
```

- *Type:* str

---

##### `wait_type_input`<sup>Optional</sup> <a name="wait_type_input" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitTypeInput"></a>

```python
wait_type_input: str
```

- *Type:* str

---

##### `wait_duration`<sup>Required</sup> <a name="wait_duration" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitDuration"></a>

```python
wait_duration: str
```

- *Type:* str

---

##### `wait_type`<sup>Required</sup> <a name="wait_type" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitType"></a>

```python
wait_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DevopsDeployStageWaitCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a>

---



