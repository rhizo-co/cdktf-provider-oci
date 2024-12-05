# `devopsDeployStage` Submodule <a name="`devopsDeployStage` Submodule" id="rhizo-co-terraform-provider-oci.devopsDeployStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsDeployStage <a name="DevopsDeployStage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage oci_devops_deploy_stage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStage(scope Construct, id *string, config DevopsDeployStageConfig) DevopsDeployStage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig">DevopsDeployStageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig">DevopsDeployStageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putApprovalPolicy">PutApprovalPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueBackendIps">PutBlueBackendIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueGreenStrategy">PutBlueGreenStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putCanaryStrategy">PutCanaryStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putContainerConfig">PutContainerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putDeployStagePredecessorCollection">PutDeployStagePredecessorCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putFailurePolicy">PutFailurePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putGreenBackendIps">PutGreenBackendIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putLoadBalancerConfig">PutLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putProductionLoadBalancerConfig">PutProductionLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRollbackPolicy">PutRollbackPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRolloutPolicy">PutRolloutPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetString">PutSetString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetValues">PutSetValues</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTestLoadBalancerConfig">PutTestLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putWaitCriteria">PutWaitCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetApprovalPolicy">ResetApprovalPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetAreHooksEnabled">ResetAreHooksEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetBlueBackendIps">ResetBlueBackendIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetBlueGreenStrategy">ResetBlueGreenStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetCanaryStrategy">ResetCanaryStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetCommandSpecDeployArtifactId">ResetCommandSpecDeployArtifactId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupBlueGreenDeploymentDeployStageId">ResetComputeInstanceGroupBlueGreenDeploymentDeployStageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupCanaryDeployStageId">ResetComputeInstanceGroupCanaryDeployStageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupCanaryTrafficShiftDeployStageId">ResetComputeInstanceGroupCanaryTrafficShiftDeployStageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupDeployEnvironmentId">ResetComputeInstanceGroupDeployEnvironmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetContainerConfig">ResetContainerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployArtifactId">ResetDeployArtifactId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployArtifactIds">ResetDeployArtifactIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployEnvironmentIdA">ResetDeployEnvironmentIdA</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployEnvironmentIdB">ResetDeployEnvironmentIdB</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeploymentSpecDeployArtifactId">ResetDeploymentSpecDeployArtifactId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDockerImageDeployArtifactId">ResetDockerImageDeployArtifactId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFailurePolicy">ResetFailurePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFunctionDeployEnvironmentId">ResetFunctionDeployEnvironmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFunctionTimeoutInSeconds">ResetFunctionTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetGreenBackendIps">ResetGreenBackendIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetHelmChartDeployArtifactId">ResetHelmChartDeployArtifactId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetHelmCommandArtifactIds">ResetHelmCommandArtifactIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsAsync">ResetIsAsync</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsDebugEnabled">ResetIsDebugEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsForceEnabled">ResetIsForceEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsUninstallOnStageDelete">ResetIsUninstallOnStageDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsValidationEnabled">ResetIsValidationEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetKubernetesManifestDeployArtifactIds">ResetKubernetesManifestDeployArtifactIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetLoadBalancerConfig">ResetLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetMaxHistory">ResetMaxHistory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetMaxMemoryInMbs">ResetMaxMemoryInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeBlueGreenDeployStageId">ResetOkeBlueGreenDeployStageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeCanaryDeployStageId">ResetOkeCanaryDeployStageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeCanaryTrafficShiftDeployStageId">ResetOkeCanaryTrafficShiftDeployStageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeClusterDeployEnvironmentId">ResetOkeClusterDeployEnvironmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetProductionLoadBalancerConfig">ResetProductionLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetPurpose">ResetPurpose</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetReleaseName">ResetReleaseName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetRollbackPolicy">ResetRollbackPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetRolloutPolicy">ResetRolloutPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetSetString">ResetSetString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetSetValues">ResetSetValues</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldCleanupOnFail">ResetShouldCleanupOnFail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldNotWait">ResetShouldNotWait</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldResetValues">ResetShouldResetValues</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldReuseValues">ResetShouldReuseValues</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldSkipCrds">ResetShouldSkipCrds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldSkipRenderSubchartNotes">ResetShouldSkipRenderSubchartNotes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTestLoadBalancerConfig">ResetTestLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTrafficShiftTarget">ResetTrafficShiftTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetValuesArtifactIds">ResetValuesArtifactIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetWaitCriteria">ResetWaitCriteria</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApprovalPolicy` <a name="PutApprovalPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putApprovalPolicy"></a>

```go
func PutApprovalPolicy(value DevopsDeployStageApprovalPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putApprovalPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a>

---

##### `PutBlueBackendIps` <a name="PutBlueBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueBackendIps"></a>

```go
func PutBlueBackendIps(value DevopsDeployStageBlueBackendIps)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueBackendIps.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a>

---

##### `PutBlueGreenStrategy` <a name="PutBlueGreenStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueGreenStrategy"></a>

```go
func PutBlueGreenStrategy(value DevopsDeployStageBlueGreenStrategy)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueGreenStrategy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a>

---

##### `PutCanaryStrategy` <a name="PutCanaryStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putCanaryStrategy"></a>

```go
func PutCanaryStrategy(value DevopsDeployStageCanaryStrategy)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putCanaryStrategy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a>

---

##### `PutContainerConfig` <a name="PutContainerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putContainerConfig"></a>

```go
func PutContainerConfig(value DevopsDeployStageContainerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putContainerConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a>

---

##### `PutDeployStagePredecessorCollection` <a name="PutDeployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putDeployStagePredecessorCollection"></a>

```go
func PutDeployStagePredecessorCollection(value DevopsDeployStageDeployStagePredecessorCollection)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putDeployStagePredecessorCollection.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a>

---

##### `PutFailurePolicy` <a name="PutFailurePolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putFailurePolicy"></a>

```go
func PutFailurePolicy(value DevopsDeployStageFailurePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putFailurePolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a>

---

##### `PutGreenBackendIps` <a name="PutGreenBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putGreenBackendIps"></a>

```go
func PutGreenBackendIps(value DevopsDeployStageGreenBackendIps)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putGreenBackendIps.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a>

---

##### `PutLoadBalancerConfig` <a name="PutLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putLoadBalancerConfig"></a>

```go
func PutLoadBalancerConfig(value DevopsDeployStageLoadBalancerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putLoadBalancerConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a>

---

##### `PutProductionLoadBalancerConfig` <a name="PutProductionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putProductionLoadBalancerConfig"></a>

```go
func PutProductionLoadBalancerConfig(value DevopsDeployStageProductionLoadBalancerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putProductionLoadBalancerConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a>

---

##### `PutRollbackPolicy` <a name="PutRollbackPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRollbackPolicy"></a>

```go
func PutRollbackPolicy(value DevopsDeployStageRollbackPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRollbackPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a>

---

##### `PutRolloutPolicy` <a name="PutRolloutPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRolloutPolicy"></a>

```go
func PutRolloutPolicy(value DevopsDeployStageRolloutPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRolloutPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a>

---

##### `PutSetString` <a name="PutSetString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetString"></a>

```go
func PutSetString(value DevopsDeployStageSetString)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetString.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a>

---

##### `PutSetValues` <a name="PutSetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetValues"></a>

```go
func PutSetValues(value DevopsDeployStageSetValues)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetValues.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a>

---

##### `PutTestLoadBalancerConfig` <a name="PutTestLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTestLoadBalancerConfig"></a>

```go
func PutTestLoadBalancerConfig(value DevopsDeployStageTestLoadBalancerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTestLoadBalancerConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTimeouts"></a>

```go
func PutTimeouts(value DevopsDeployStageTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a>

---

##### `PutWaitCriteria` <a name="PutWaitCriteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putWaitCriteria"></a>

```go
func PutWaitCriteria(value DevopsDeployStageWaitCriteria)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putWaitCriteria.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a>

---

##### `ResetApprovalPolicy` <a name="ResetApprovalPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetApprovalPolicy"></a>

```go
func ResetApprovalPolicy()
```

##### `ResetAreHooksEnabled` <a name="ResetAreHooksEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetAreHooksEnabled"></a>

```go
func ResetAreHooksEnabled()
```

##### `ResetBlueBackendIps` <a name="ResetBlueBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetBlueBackendIps"></a>

```go
func ResetBlueBackendIps()
```

##### `ResetBlueGreenStrategy` <a name="ResetBlueGreenStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetBlueGreenStrategy"></a>

```go
func ResetBlueGreenStrategy()
```

##### `ResetCanaryStrategy` <a name="ResetCanaryStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetCanaryStrategy"></a>

```go
func ResetCanaryStrategy()
```

##### `ResetCommandSpecDeployArtifactId` <a name="ResetCommandSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetCommandSpecDeployArtifactId"></a>

```go
func ResetCommandSpecDeployArtifactId()
```

##### `ResetComputeInstanceGroupBlueGreenDeploymentDeployStageId` <a name="ResetComputeInstanceGroupBlueGreenDeploymentDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupBlueGreenDeploymentDeployStageId"></a>

```go
func ResetComputeInstanceGroupBlueGreenDeploymentDeployStageId()
```

##### `ResetComputeInstanceGroupCanaryDeployStageId` <a name="ResetComputeInstanceGroupCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupCanaryDeployStageId"></a>

```go
func ResetComputeInstanceGroupCanaryDeployStageId()
```

##### `ResetComputeInstanceGroupCanaryTrafficShiftDeployStageId` <a name="ResetComputeInstanceGroupCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupCanaryTrafficShiftDeployStageId"></a>

```go
func ResetComputeInstanceGroupCanaryTrafficShiftDeployStageId()
```

##### `ResetComputeInstanceGroupDeployEnvironmentId` <a name="ResetComputeInstanceGroupDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupDeployEnvironmentId"></a>

```go
func ResetComputeInstanceGroupDeployEnvironmentId()
```

##### `ResetConfig` <a name="ResetConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetContainerConfig` <a name="ResetContainerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetContainerConfig"></a>

```go
func ResetContainerConfig()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDeployArtifactId` <a name="ResetDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployArtifactId"></a>

```go
func ResetDeployArtifactId()
```

##### `ResetDeployArtifactIds` <a name="ResetDeployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployArtifactIds"></a>

```go
func ResetDeployArtifactIds()
```

##### `ResetDeployEnvironmentIdA` <a name="ResetDeployEnvironmentIdA" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployEnvironmentIdA"></a>

```go
func ResetDeployEnvironmentIdA()
```

##### `ResetDeployEnvironmentIdB` <a name="ResetDeployEnvironmentIdB" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployEnvironmentIdB"></a>

```go
func ResetDeployEnvironmentIdB()
```

##### `ResetDeploymentSpecDeployArtifactId` <a name="ResetDeploymentSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeploymentSpecDeployArtifactId"></a>

```go
func ResetDeploymentSpecDeployArtifactId()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDockerImageDeployArtifactId` <a name="ResetDockerImageDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDockerImageDeployArtifactId"></a>

```go
func ResetDockerImageDeployArtifactId()
```

##### `ResetFailurePolicy` <a name="ResetFailurePolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFailurePolicy"></a>

```go
func ResetFailurePolicy()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetFunctionDeployEnvironmentId` <a name="ResetFunctionDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFunctionDeployEnvironmentId"></a>

```go
func ResetFunctionDeployEnvironmentId()
```

##### `ResetFunctionTimeoutInSeconds` <a name="ResetFunctionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFunctionTimeoutInSeconds"></a>

```go
func ResetFunctionTimeoutInSeconds()
```

##### `ResetGreenBackendIps` <a name="ResetGreenBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetGreenBackendIps"></a>

```go
func ResetGreenBackendIps()
```

##### `ResetHelmChartDeployArtifactId` <a name="ResetHelmChartDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetHelmChartDeployArtifactId"></a>

```go
func ResetHelmChartDeployArtifactId()
```

##### `ResetHelmCommandArtifactIds` <a name="ResetHelmCommandArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetHelmCommandArtifactIds"></a>

```go
func ResetHelmCommandArtifactIds()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetId"></a>

```go
func ResetId()
```

##### `ResetIsAsync` <a name="ResetIsAsync" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsAsync"></a>

```go
func ResetIsAsync()
```

##### `ResetIsDebugEnabled` <a name="ResetIsDebugEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsDebugEnabled"></a>

```go
func ResetIsDebugEnabled()
```

##### `ResetIsForceEnabled` <a name="ResetIsForceEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsForceEnabled"></a>

```go
func ResetIsForceEnabled()
```

##### `ResetIsUninstallOnStageDelete` <a name="ResetIsUninstallOnStageDelete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsUninstallOnStageDelete"></a>

```go
func ResetIsUninstallOnStageDelete()
```

##### `ResetIsValidationEnabled` <a name="ResetIsValidationEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsValidationEnabled"></a>

```go
func ResetIsValidationEnabled()
```

##### `ResetKubernetesManifestDeployArtifactIds` <a name="ResetKubernetesManifestDeployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetKubernetesManifestDeployArtifactIds"></a>

```go
func ResetKubernetesManifestDeployArtifactIds()
```

##### `ResetLoadBalancerConfig` <a name="ResetLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetLoadBalancerConfig"></a>

```go
func ResetLoadBalancerConfig()
```

##### `ResetMaxHistory` <a name="ResetMaxHistory" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetMaxHistory"></a>

```go
func ResetMaxHistory()
```

##### `ResetMaxMemoryInMbs` <a name="ResetMaxMemoryInMbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetMaxMemoryInMbs"></a>

```go
func ResetMaxMemoryInMbs()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOkeBlueGreenDeployStageId` <a name="ResetOkeBlueGreenDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeBlueGreenDeployStageId"></a>

```go
func ResetOkeBlueGreenDeployStageId()
```

##### `ResetOkeCanaryDeployStageId` <a name="ResetOkeCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeCanaryDeployStageId"></a>

```go
func ResetOkeCanaryDeployStageId()
```

##### `ResetOkeCanaryTrafficShiftDeployStageId` <a name="ResetOkeCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeCanaryTrafficShiftDeployStageId"></a>

```go
func ResetOkeCanaryTrafficShiftDeployStageId()
```

##### `ResetOkeClusterDeployEnvironmentId` <a name="ResetOkeClusterDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeClusterDeployEnvironmentId"></a>

```go
func ResetOkeClusterDeployEnvironmentId()
```

##### `ResetProductionLoadBalancerConfig` <a name="ResetProductionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetProductionLoadBalancerConfig"></a>

```go
func ResetProductionLoadBalancerConfig()
```

##### `ResetPurpose` <a name="ResetPurpose" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetPurpose"></a>

```go
func ResetPurpose()
```

##### `ResetReleaseName` <a name="ResetReleaseName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetReleaseName"></a>

```go
func ResetReleaseName()
```

##### `ResetRollbackPolicy` <a name="ResetRollbackPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetRollbackPolicy"></a>

```go
func ResetRollbackPolicy()
```

##### `ResetRolloutPolicy` <a name="ResetRolloutPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetRolloutPolicy"></a>

```go
func ResetRolloutPolicy()
```

##### `ResetSetString` <a name="ResetSetString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetSetString"></a>

```go
func ResetSetString()
```

##### `ResetSetValues` <a name="ResetSetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetSetValues"></a>

```go
func ResetSetValues()
```

##### `ResetShouldCleanupOnFail` <a name="ResetShouldCleanupOnFail" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldCleanupOnFail"></a>

```go
func ResetShouldCleanupOnFail()
```

##### `ResetShouldNotWait` <a name="ResetShouldNotWait" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldNotWait"></a>

```go
func ResetShouldNotWait()
```

##### `ResetShouldResetValues` <a name="ResetShouldResetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldResetValues"></a>

```go
func ResetShouldResetValues()
```

##### `ResetShouldReuseValues` <a name="ResetShouldReuseValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldReuseValues"></a>

```go
func ResetShouldReuseValues()
```

##### `ResetShouldSkipCrds` <a name="ResetShouldSkipCrds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldSkipCrds"></a>

```go
func ResetShouldSkipCrds()
```

##### `ResetShouldSkipRenderSubchartNotes` <a name="ResetShouldSkipRenderSubchartNotes" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldSkipRenderSubchartNotes"></a>

```go
func ResetShouldSkipRenderSubchartNotes()
```

##### `ResetTestLoadBalancerConfig` <a name="ResetTestLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTestLoadBalancerConfig"></a>

```go
func ResetTestLoadBalancerConfig()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTimeoutInSeconds"></a>

```go
func ResetTimeoutInSeconds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTrafficShiftTarget` <a name="ResetTrafficShiftTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTrafficShiftTarget"></a>

```go
func ResetTrafficShiftTarget()
```

##### `ResetValuesArtifactIds` <a name="ResetValuesArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetValuesArtifactIds"></a>

```go
func ResetValuesArtifactIds()
```

##### `ResetWaitCriteria` <a name="ResetWaitCriteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetWaitCriteria"></a>

```go
func ResetWaitCriteria()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsDeployStage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.DevopsDeployStage_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.DevopsDeployStage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.DevopsDeployStage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.DevopsDeployStage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DevopsDeployStage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DevopsDeployStage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DevopsDeployStage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DevopsDeployStage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.approvalPolicy">ApprovalPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference">DevopsDeployStageApprovalPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueBackendIps">BlueBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference">DevopsDeployStageBlueBackendIpsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueGreenStrategy">BlueGreenStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference">DevopsDeployStageBlueGreenStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.canaryStrategy">CanaryStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference">DevopsDeployStageCanaryStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.containerConfig">ContainerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference">DevopsDeployStageContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStagePredecessorCollection">DeployStagePredecessorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference">DevopsDeployStageDeployStagePredecessorCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.failurePolicy">FailurePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference">DevopsDeployStageFailurePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.greenBackendIps">GreenBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference">DevopsDeployStageGreenBackendIpsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.loadBalancerConfig">LoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference">DevopsDeployStageLoadBalancerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.productionLoadBalancerConfig">ProductionLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference">DevopsDeployStageProductionLoadBalancerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rollbackPolicy">RollbackPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference">DevopsDeployStageRollbackPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rolloutPolicy">RolloutPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference">DevopsDeployStageRolloutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setString">SetString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference">DevopsDeployStageSetStringOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setValues">SetValues</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference">DevopsDeployStageSetValuesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.testLoadBalancerConfig">TestLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference">DevopsDeployStageTestLoadBalancerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference">DevopsDeployStageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.waitCriteria">WaitCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference">DevopsDeployStageWaitCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.approvalPolicyInput">ApprovalPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.areHooksEnabledInput">AreHooksEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueBackendIpsInput">BlueBackendIpsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueGreenStrategyInput">BlueGreenStrategyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.canaryStrategyInput">CanaryStrategyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.commandSpecDeployArtifactIdInput">CommandSpecDeployArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupBlueGreenDeploymentDeployStageIdInput">ComputeInstanceGroupBlueGreenDeploymentDeployStageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryDeployStageIdInput">ComputeInstanceGroupCanaryDeployStageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryTrafficShiftDeployStageIdInput">ComputeInstanceGroupCanaryTrafficShiftDeployStageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupDeployEnvironmentIdInput">ComputeInstanceGroupDeployEnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.configInput">ConfigInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.containerConfigInput">ContainerConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIdInput">DeployArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIdsInput">DeployArtifactIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdAInput">DeployEnvironmentIdAInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdBInput">DeployEnvironmentIdBInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deploymentSpecDeployArtifactIdInput">DeploymentSpecDeployArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployPipelineIdInput">DeployPipelineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStagePredecessorCollectionInput">DeployStagePredecessorCollectionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStageTypeInput">DeployStageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dockerImageDeployArtifactIdInput">DockerImageDeployArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.failurePolicyInput">FailurePolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionDeployEnvironmentIdInput">FunctionDeployEnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionTimeoutInSecondsInput">FunctionTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.greenBackendIpsInput">GreenBackendIpsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmChartDeployArtifactIdInput">HelmChartDeployArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmCommandArtifactIdsInput">HelmCommandArtifactIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isAsyncInput">IsAsyncInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isDebugEnabledInput">IsDebugEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isForceEnabledInput">IsForceEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isUninstallOnStageDeleteInput">IsUninstallOnStageDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isValidationEnabledInput">IsValidationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.kubernetesManifestDeployArtifactIdsInput">KubernetesManifestDeployArtifactIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.loadBalancerConfigInput">LoadBalancerConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxHistoryInput">MaxHistoryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxMemoryInMbsInput">MaxMemoryInMbsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeBlueGreenDeployStageIdInput">OkeBlueGreenDeployStageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryDeployStageIdInput">OkeCanaryDeployStageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryTrafficShiftDeployStageIdInput">OkeCanaryTrafficShiftDeployStageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeClusterDeployEnvironmentIdInput">OkeClusterDeployEnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.productionLoadBalancerConfigInput">ProductionLoadBalancerConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.purposeInput">PurposeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.releaseNameInput">ReleaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rollbackPolicyInput">RollbackPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rolloutPolicyInput">RolloutPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setStringInput">SetStringInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setValuesInput">SetValuesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldCleanupOnFailInput">ShouldCleanupOnFailInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldNotWaitInput">ShouldNotWaitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldResetValuesInput">ShouldResetValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldReuseValuesInput">ShouldReuseValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipCrdsInput">ShouldSkipCrdsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipRenderSubchartNotesInput">ShouldSkipRenderSubchartNotesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.testLoadBalancerConfigInput">TestLoadBalancerConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.trafficShiftTargetInput">TrafficShiftTargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.valuesArtifactIdsInput">ValuesArtifactIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.waitCriteriaInput">WaitCriteriaInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.areHooksEnabled">AreHooksEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.commandSpecDeployArtifactId">CommandSpecDeployArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupBlueGreenDeploymentDeployStageId">ComputeInstanceGroupBlueGreenDeploymentDeployStageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryDeployStageId">ComputeInstanceGroupCanaryDeployStageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryTrafficShiftDeployStageId">ComputeInstanceGroupCanaryTrafficShiftDeployStageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupDeployEnvironmentId">ComputeInstanceGroupDeployEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.config">Config</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactId">DeployArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIds">DeployArtifactIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdA">DeployEnvironmentIdA</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdB">DeployEnvironmentIdB</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deploymentSpecDeployArtifactId">DeploymentSpecDeployArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployPipelineId">DeployPipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStageType">DeployStageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dockerImageDeployArtifactId">DockerImageDeployArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionDeployEnvironmentId">FunctionDeployEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionTimeoutInSeconds">FunctionTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmChartDeployArtifactId">HelmChartDeployArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmCommandArtifactIds">HelmCommandArtifactIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isAsync">IsAsync</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isDebugEnabled">IsDebugEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isForceEnabled">IsForceEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isUninstallOnStageDelete">IsUninstallOnStageDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isValidationEnabled">IsValidationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.kubernetesManifestDeployArtifactIds">KubernetesManifestDeployArtifactIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxHistory">MaxHistory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxMemoryInMbs">MaxMemoryInMbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeBlueGreenDeployStageId">OkeBlueGreenDeployStageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryDeployStageId">OkeCanaryDeployStageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryTrafficShiftDeployStageId">OkeCanaryTrafficShiftDeployStageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeClusterDeployEnvironmentId">OkeClusterDeployEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.purpose">Purpose</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.releaseName">ReleaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldCleanupOnFail">ShouldCleanupOnFail</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldNotWait">ShouldNotWait</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldResetValues">ShouldResetValues</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldReuseValues">ShouldReuseValues</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipCrds">ShouldSkipCrds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipRenderSubchartNotes">ShouldSkipRenderSubchartNotes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.trafficShiftTarget">TrafficShiftTarget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.valuesArtifactIds">ValuesArtifactIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApprovalPolicy`<sup>Required</sup> <a name="ApprovalPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.approvalPolicy"></a>

```go
func ApprovalPolicy() DevopsDeployStageApprovalPolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference">DevopsDeployStageApprovalPolicyOutputReference</a>

---

##### `BlueBackendIps`<sup>Required</sup> <a name="BlueBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueBackendIps"></a>

```go
func BlueBackendIps() DevopsDeployStageBlueBackendIpsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference">DevopsDeployStageBlueBackendIpsOutputReference</a>

---

##### `BlueGreenStrategy`<sup>Required</sup> <a name="BlueGreenStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueGreenStrategy"></a>

```go
func BlueGreenStrategy() DevopsDeployStageBlueGreenStrategyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference">DevopsDeployStageBlueGreenStrategyOutputReference</a>

---

##### `CanaryStrategy`<sup>Required</sup> <a name="CanaryStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.canaryStrategy"></a>

```go
func CanaryStrategy() DevopsDeployStageCanaryStrategyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference">DevopsDeployStageCanaryStrategyOutputReference</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ContainerConfig`<sup>Required</sup> <a name="ContainerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.containerConfig"></a>

```go
func ContainerConfig() DevopsDeployStageContainerConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference">DevopsDeployStageContainerConfigOutputReference</a>

---

##### `DeployStagePredecessorCollection`<sup>Required</sup> <a name="DeployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStagePredecessorCollection"></a>

```go
func DeployStagePredecessorCollection() DevopsDeployStageDeployStagePredecessorCollectionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference">DevopsDeployStageDeployStagePredecessorCollectionOutputReference</a>

---

##### `FailurePolicy`<sup>Required</sup> <a name="FailurePolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.failurePolicy"></a>

```go
func FailurePolicy() DevopsDeployStageFailurePolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference">DevopsDeployStageFailurePolicyOutputReference</a>

---

##### `GreenBackendIps`<sup>Required</sup> <a name="GreenBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.greenBackendIps"></a>

```go
func GreenBackendIps() DevopsDeployStageGreenBackendIpsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference">DevopsDeployStageGreenBackendIpsOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `LoadBalancerConfig`<sup>Required</sup> <a name="LoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.loadBalancerConfig"></a>

```go
func LoadBalancerConfig() DevopsDeployStageLoadBalancerConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference">DevopsDeployStageLoadBalancerConfigOutputReference</a>

---

##### `ProductionLoadBalancerConfig`<sup>Required</sup> <a name="ProductionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.productionLoadBalancerConfig"></a>

```go
func ProductionLoadBalancerConfig() DevopsDeployStageProductionLoadBalancerConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference">DevopsDeployStageProductionLoadBalancerConfigOutputReference</a>

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `RollbackPolicy`<sup>Required</sup> <a name="RollbackPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rollbackPolicy"></a>

```go
func RollbackPolicy() DevopsDeployStageRollbackPolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference">DevopsDeployStageRollbackPolicyOutputReference</a>

---

##### `RolloutPolicy`<sup>Required</sup> <a name="RolloutPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rolloutPolicy"></a>

```go
func RolloutPolicy() DevopsDeployStageRolloutPolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference">DevopsDeployStageRolloutPolicyOutputReference</a>

---

##### `SetString`<sup>Required</sup> <a name="SetString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setString"></a>

```go
func SetString() DevopsDeployStageSetStringOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference">DevopsDeployStageSetStringOutputReference</a>

---

##### `SetValues`<sup>Required</sup> <a name="SetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setValues"></a>

```go
func SetValues() DevopsDeployStageSetValuesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference">DevopsDeployStageSetValuesOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TestLoadBalancerConfig`<sup>Required</sup> <a name="TestLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.testLoadBalancerConfig"></a>

```go
func TestLoadBalancerConfig() DevopsDeployStageTestLoadBalancerConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference">DevopsDeployStageTestLoadBalancerConfigOutputReference</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeouts"></a>

```go
func Timeouts() DevopsDeployStageTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference">DevopsDeployStageTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `WaitCriteria`<sup>Required</sup> <a name="WaitCriteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.waitCriteria"></a>

```go
func WaitCriteria() DevopsDeployStageWaitCriteriaOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference">DevopsDeployStageWaitCriteriaOutputReference</a>

---

##### `ApprovalPolicyInput`<sup>Optional</sup> <a name="ApprovalPolicyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.approvalPolicyInput"></a>

```go
func ApprovalPolicyInput() DevopsDeployStageApprovalPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a>

---

##### `AreHooksEnabledInput`<sup>Optional</sup> <a name="AreHooksEnabledInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.areHooksEnabledInput"></a>

```go
func AreHooksEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `BlueBackendIpsInput`<sup>Optional</sup> <a name="BlueBackendIpsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueBackendIpsInput"></a>

```go
func BlueBackendIpsInput() DevopsDeployStageBlueBackendIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a>

---

##### `BlueGreenStrategyInput`<sup>Optional</sup> <a name="BlueGreenStrategyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueGreenStrategyInput"></a>

```go
func BlueGreenStrategyInput() DevopsDeployStageBlueGreenStrategy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a>

---

##### `CanaryStrategyInput`<sup>Optional</sup> <a name="CanaryStrategyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.canaryStrategyInput"></a>

```go
func CanaryStrategyInput() DevopsDeployStageCanaryStrategy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a>

---

##### `CommandSpecDeployArtifactIdInput`<sup>Optional</sup> <a name="CommandSpecDeployArtifactIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.commandSpecDeployArtifactIdInput"></a>

```go
func CommandSpecDeployArtifactIdInput() *string
```

- *Type:* *string

---

##### `ComputeInstanceGroupBlueGreenDeploymentDeployStageIdInput`<sup>Optional</sup> <a name="ComputeInstanceGroupBlueGreenDeploymentDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupBlueGreenDeploymentDeployStageIdInput"></a>

```go
func ComputeInstanceGroupBlueGreenDeploymentDeployStageIdInput() *string
```

- *Type:* *string

---

##### `ComputeInstanceGroupCanaryDeployStageIdInput`<sup>Optional</sup> <a name="ComputeInstanceGroupCanaryDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryDeployStageIdInput"></a>

```go
func ComputeInstanceGroupCanaryDeployStageIdInput() *string
```

- *Type:* *string

---

##### `ComputeInstanceGroupCanaryTrafficShiftDeployStageIdInput`<sup>Optional</sup> <a name="ComputeInstanceGroupCanaryTrafficShiftDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryTrafficShiftDeployStageIdInput"></a>

```go
func ComputeInstanceGroupCanaryTrafficShiftDeployStageIdInput() *string
```

- *Type:* *string

---

##### `ComputeInstanceGroupDeployEnvironmentIdInput`<sup>Optional</sup> <a name="ComputeInstanceGroupDeployEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupDeployEnvironmentIdInput"></a>

```go
func ComputeInstanceGroupDeployEnvironmentIdInput() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.configInput"></a>

```go
func ConfigInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ContainerConfigInput`<sup>Optional</sup> <a name="ContainerConfigInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.containerConfigInput"></a>

```go
func ContainerConfigInput() DevopsDeployStageContainerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeployArtifactIdInput`<sup>Optional</sup> <a name="DeployArtifactIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIdInput"></a>

```go
func DeployArtifactIdInput() *string
```

- *Type:* *string

---

##### `DeployArtifactIdsInput`<sup>Optional</sup> <a name="DeployArtifactIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIdsInput"></a>

```go
func DeployArtifactIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeployEnvironmentIdAInput`<sup>Optional</sup> <a name="DeployEnvironmentIdAInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdAInput"></a>

```go
func DeployEnvironmentIdAInput() *string
```

- *Type:* *string

---

##### `DeployEnvironmentIdBInput`<sup>Optional</sup> <a name="DeployEnvironmentIdBInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdBInput"></a>

```go
func DeployEnvironmentIdBInput() *string
```

- *Type:* *string

---

##### `DeploymentSpecDeployArtifactIdInput`<sup>Optional</sup> <a name="DeploymentSpecDeployArtifactIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deploymentSpecDeployArtifactIdInput"></a>

```go
func DeploymentSpecDeployArtifactIdInput() *string
```

- *Type:* *string

---

##### `DeployPipelineIdInput`<sup>Optional</sup> <a name="DeployPipelineIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployPipelineIdInput"></a>

```go
func DeployPipelineIdInput() *string
```

- *Type:* *string

---

##### `DeployStagePredecessorCollectionInput`<sup>Optional</sup> <a name="DeployStagePredecessorCollectionInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStagePredecessorCollectionInput"></a>

```go
func DeployStagePredecessorCollectionInput() DevopsDeployStageDeployStagePredecessorCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a>

---

##### `DeployStageTypeInput`<sup>Optional</sup> <a name="DeployStageTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStageTypeInput"></a>

```go
func DeployStageTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DockerImageDeployArtifactIdInput`<sup>Optional</sup> <a name="DockerImageDeployArtifactIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dockerImageDeployArtifactIdInput"></a>

```go
func DockerImageDeployArtifactIdInput() *string
```

- *Type:* *string

---

##### `FailurePolicyInput`<sup>Optional</sup> <a name="FailurePolicyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.failurePolicyInput"></a>

```go
func FailurePolicyInput() DevopsDeployStageFailurePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FunctionDeployEnvironmentIdInput`<sup>Optional</sup> <a name="FunctionDeployEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionDeployEnvironmentIdInput"></a>

```go
func FunctionDeployEnvironmentIdInput() *string
```

- *Type:* *string

---

##### `FunctionTimeoutInSecondsInput`<sup>Optional</sup> <a name="FunctionTimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionTimeoutInSecondsInput"></a>

```go
func FunctionTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `GreenBackendIpsInput`<sup>Optional</sup> <a name="GreenBackendIpsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.greenBackendIpsInput"></a>

```go
func GreenBackendIpsInput() DevopsDeployStageGreenBackendIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a>

---

##### `HelmChartDeployArtifactIdInput`<sup>Optional</sup> <a name="HelmChartDeployArtifactIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmChartDeployArtifactIdInput"></a>

```go
func HelmChartDeployArtifactIdInput() *string
```

- *Type:* *string

---

##### `HelmCommandArtifactIdsInput`<sup>Optional</sup> <a name="HelmCommandArtifactIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmCommandArtifactIdsInput"></a>

```go
func HelmCommandArtifactIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsAsyncInput`<sup>Optional</sup> <a name="IsAsyncInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isAsyncInput"></a>

```go
func IsAsyncInput() interface{}
```

- *Type:* interface{}

---

##### `IsDebugEnabledInput`<sup>Optional</sup> <a name="IsDebugEnabledInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isDebugEnabledInput"></a>

```go
func IsDebugEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsForceEnabledInput`<sup>Optional</sup> <a name="IsForceEnabledInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isForceEnabledInput"></a>

```go
func IsForceEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsUninstallOnStageDeleteInput`<sup>Optional</sup> <a name="IsUninstallOnStageDeleteInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isUninstallOnStageDeleteInput"></a>

```go
func IsUninstallOnStageDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `IsValidationEnabledInput`<sup>Optional</sup> <a name="IsValidationEnabledInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isValidationEnabledInput"></a>

```go
func IsValidationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KubernetesManifestDeployArtifactIdsInput`<sup>Optional</sup> <a name="KubernetesManifestDeployArtifactIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.kubernetesManifestDeployArtifactIdsInput"></a>

```go
func KubernetesManifestDeployArtifactIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancerConfigInput`<sup>Optional</sup> <a name="LoadBalancerConfigInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.loadBalancerConfigInput"></a>

```go
func LoadBalancerConfigInput() DevopsDeployStageLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a>

---

##### `MaxHistoryInput`<sup>Optional</sup> <a name="MaxHistoryInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxHistoryInput"></a>

```go
func MaxHistoryInput() *f64
```

- *Type:* *f64

---

##### `MaxMemoryInMbsInput`<sup>Optional</sup> <a name="MaxMemoryInMbsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxMemoryInMbsInput"></a>

```go
func MaxMemoryInMbsInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OkeBlueGreenDeployStageIdInput`<sup>Optional</sup> <a name="OkeBlueGreenDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeBlueGreenDeployStageIdInput"></a>

```go
func OkeBlueGreenDeployStageIdInput() *string
```

- *Type:* *string

---

##### `OkeCanaryDeployStageIdInput`<sup>Optional</sup> <a name="OkeCanaryDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryDeployStageIdInput"></a>

```go
func OkeCanaryDeployStageIdInput() *string
```

- *Type:* *string

---

##### `OkeCanaryTrafficShiftDeployStageIdInput`<sup>Optional</sup> <a name="OkeCanaryTrafficShiftDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryTrafficShiftDeployStageIdInput"></a>

```go
func OkeCanaryTrafficShiftDeployStageIdInput() *string
```

- *Type:* *string

---

##### `OkeClusterDeployEnvironmentIdInput`<sup>Optional</sup> <a name="OkeClusterDeployEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeClusterDeployEnvironmentIdInput"></a>

```go
func OkeClusterDeployEnvironmentIdInput() *string
```

- *Type:* *string

---

##### `ProductionLoadBalancerConfigInput`<sup>Optional</sup> <a name="ProductionLoadBalancerConfigInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.productionLoadBalancerConfigInput"></a>

```go
func ProductionLoadBalancerConfigInput() DevopsDeployStageProductionLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a>

---

##### `PurposeInput`<sup>Optional</sup> <a name="PurposeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.purposeInput"></a>

```go
func PurposeInput() *string
```

- *Type:* *string

---

##### `ReleaseNameInput`<sup>Optional</sup> <a name="ReleaseNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.releaseNameInput"></a>

```go
func ReleaseNameInput() *string
```

- *Type:* *string

---

##### `RollbackPolicyInput`<sup>Optional</sup> <a name="RollbackPolicyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rollbackPolicyInput"></a>

```go
func RollbackPolicyInput() DevopsDeployStageRollbackPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a>

---

##### `RolloutPolicyInput`<sup>Optional</sup> <a name="RolloutPolicyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rolloutPolicyInput"></a>

```go
func RolloutPolicyInput() DevopsDeployStageRolloutPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a>

---

##### `SetStringInput`<sup>Optional</sup> <a name="SetStringInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setStringInput"></a>

```go
func SetStringInput() DevopsDeployStageSetString
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a>

---

##### `SetValuesInput`<sup>Optional</sup> <a name="SetValuesInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setValuesInput"></a>

```go
func SetValuesInput() DevopsDeployStageSetValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a>

---

##### `ShouldCleanupOnFailInput`<sup>Optional</sup> <a name="ShouldCleanupOnFailInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldCleanupOnFailInput"></a>

```go
func ShouldCleanupOnFailInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldNotWaitInput`<sup>Optional</sup> <a name="ShouldNotWaitInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldNotWaitInput"></a>

```go
func ShouldNotWaitInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldResetValuesInput`<sup>Optional</sup> <a name="ShouldResetValuesInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldResetValuesInput"></a>

```go
func ShouldResetValuesInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldReuseValuesInput`<sup>Optional</sup> <a name="ShouldReuseValuesInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldReuseValuesInput"></a>

```go
func ShouldReuseValuesInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldSkipCrdsInput`<sup>Optional</sup> <a name="ShouldSkipCrdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipCrdsInput"></a>

```go
func ShouldSkipCrdsInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldSkipRenderSubchartNotesInput`<sup>Optional</sup> <a name="ShouldSkipRenderSubchartNotesInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipRenderSubchartNotesInput"></a>

```go
func ShouldSkipRenderSubchartNotesInput() interface{}
```

- *Type:* interface{}

---

##### `TestLoadBalancerConfigInput`<sup>Optional</sup> <a name="TestLoadBalancerConfigInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.testLoadBalancerConfigInput"></a>

```go
func TestLoadBalancerConfigInput() DevopsDeployStageTestLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a>

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutInSecondsInput"></a>

```go
func TimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TrafficShiftTargetInput`<sup>Optional</sup> <a name="TrafficShiftTargetInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.trafficShiftTargetInput"></a>

```go
func TrafficShiftTargetInput() *string
```

- *Type:* *string

---

##### `ValuesArtifactIdsInput`<sup>Optional</sup> <a name="ValuesArtifactIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.valuesArtifactIdsInput"></a>

```go
func ValuesArtifactIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `WaitCriteriaInput`<sup>Optional</sup> <a name="WaitCriteriaInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.waitCriteriaInput"></a>

```go
func WaitCriteriaInput() DevopsDeployStageWaitCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a>

---

##### `AreHooksEnabled`<sup>Required</sup> <a name="AreHooksEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.areHooksEnabled"></a>

```go
func AreHooksEnabled() interface{}
```

- *Type:* interface{}

---

##### `CommandSpecDeployArtifactId`<sup>Required</sup> <a name="CommandSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.commandSpecDeployArtifactId"></a>

```go
func CommandSpecDeployArtifactId() *string
```

- *Type:* *string

---

##### `ComputeInstanceGroupBlueGreenDeploymentDeployStageId`<sup>Required</sup> <a name="ComputeInstanceGroupBlueGreenDeploymentDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupBlueGreenDeploymentDeployStageId"></a>

```go
func ComputeInstanceGroupBlueGreenDeploymentDeployStageId() *string
```

- *Type:* *string

---

##### `ComputeInstanceGroupCanaryDeployStageId`<sup>Required</sup> <a name="ComputeInstanceGroupCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryDeployStageId"></a>

```go
func ComputeInstanceGroupCanaryDeployStageId() *string
```

- *Type:* *string

---

##### `ComputeInstanceGroupCanaryTrafficShiftDeployStageId`<sup>Required</sup> <a name="ComputeInstanceGroupCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryTrafficShiftDeployStageId"></a>

```go
func ComputeInstanceGroupCanaryTrafficShiftDeployStageId() *string
```

- *Type:* *string

---

##### `ComputeInstanceGroupDeployEnvironmentId`<sup>Required</sup> <a name="ComputeInstanceGroupDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupDeployEnvironmentId"></a>

```go
func ComputeInstanceGroupDeployEnvironmentId() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.config"></a>

```go
func Config() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeployArtifactId`<sup>Required</sup> <a name="DeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactId"></a>

```go
func DeployArtifactId() *string
```

- *Type:* *string

---

##### `DeployArtifactIds`<sup>Required</sup> <a name="DeployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIds"></a>

```go
func DeployArtifactIds() *[]*string
```

- *Type:* *[]*string

---

##### `DeployEnvironmentIdA`<sup>Required</sup> <a name="DeployEnvironmentIdA" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdA"></a>

```go
func DeployEnvironmentIdA() *string
```

- *Type:* *string

---

##### `DeployEnvironmentIdB`<sup>Required</sup> <a name="DeployEnvironmentIdB" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdB"></a>

```go
func DeployEnvironmentIdB() *string
```

- *Type:* *string

---

##### `DeploymentSpecDeployArtifactId`<sup>Required</sup> <a name="DeploymentSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deploymentSpecDeployArtifactId"></a>

```go
func DeploymentSpecDeployArtifactId() *string
```

- *Type:* *string

---

##### `DeployPipelineId`<sup>Required</sup> <a name="DeployPipelineId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployPipelineId"></a>

```go
func DeployPipelineId() *string
```

- *Type:* *string

---

##### `DeployStageType`<sup>Required</sup> <a name="DeployStageType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStageType"></a>

```go
func DeployStageType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DockerImageDeployArtifactId`<sup>Required</sup> <a name="DockerImageDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dockerImageDeployArtifactId"></a>

```go
func DockerImageDeployArtifactId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FunctionDeployEnvironmentId`<sup>Required</sup> <a name="FunctionDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionDeployEnvironmentId"></a>

```go
func FunctionDeployEnvironmentId() *string
```

- *Type:* *string

---

##### `FunctionTimeoutInSeconds`<sup>Required</sup> <a name="FunctionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionTimeoutInSeconds"></a>

```go
func FunctionTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `HelmChartDeployArtifactId`<sup>Required</sup> <a name="HelmChartDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmChartDeployArtifactId"></a>

```go
func HelmChartDeployArtifactId() *string
```

- *Type:* *string

---

##### `HelmCommandArtifactIds`<sup>Required</sup> <a name="HelmCommandArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmCommandArtifactIds"></a>

```go
func HelmCommandArtifactIds() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAsync`<sup>Required</sup> <a name="IsAsync" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isAsync"></a>

```go
func IsAsync() interface{}
```

- *Type:* interface{}

---

##### `IsDebugEnabled`<sup>Required</sup> <a name="IsDebugEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isDebugEnabled"></a>

```go
func IsDebugEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsForceEnabled`<sup>Required</sup> <a name="IsForceEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isForceEnabled"></a>

```go
func IsForceEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsUninstallOnStageDelete`<sup>Required</sup> <a name="IsUninstallOnStageDelete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isUninstallOnStageDelete"></a>

```go
func IsUninstallOnStageDelete() interface{}
```

- *Type:* interface{}

---

##### `IsValidationEnabled`<sup>Required</sup> <a name="IsValidationEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isValidationEnabled"></a>

```go
func IsValidationEnabled() interface{}
```

- *Type:* interface{}

---

##### `KubernetesManifestDeployArtifactIds`<sup>Required</sup> <a name="KubernetesManifestDeployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.kubernetesManifestDeployArtifactIds"></a>

```go
func KubernetesManifestDeployArtifactIds() *[]*string
```

- *Type:* *[]*string

---

##### `MaxHistory`<sup>Required</sup> <a name="MaxHistory" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxHistory"></a>

```go
func MaxHistory() *f64
```

- *Type:* *f64

---

##### `MaxMemoryInMbs`<sup>Required</sup> <a name="MaxMemoryInMbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxMemoryInMbs"></a>

```go
func MaxMemoryInMbs() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OkeBlueGreenDeployStageId`<sup>Required</sup> <a name="OkeBlueGreenDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeBlueGreenDeployStageId"></a>

```go
func OkeBlueGreenDeployStageId() *string
```

- *Type:* *string

---

##### `OkeCanaryDeployStageId`<sup>Required</sup> <a name="OkeCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryDeployStageId"></a>

```go
func OkeCanaryDeployStageId() *string
```

- *Type:* *string

---

##### `OkeCanaryTrafficShiftDeployStageId`<sup>Required</sup> <a name="OkeCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryTrafficShiftDeployStageId"></a>

```go
func OkeCanaryTrafficShiftDeployStageId() *string
```

- *Type:* *string

---

##### `OkeClusterDeployEnvironmentId`<sup>Required</sup> <a name="OkeClusterDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeClusterDeployEnvironmentId"></a>

```go
func OkeClusterDeployEnvironmentId() *string
```

- *Type:* *string

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.purpose"></a>

```go
func Purpose() *string
```

- *Type:* *string

---

##### `ReleaseName`<sup>Required</sup> <a name="ReleaseName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.releaseName"></a>

```go
func ReleaseName() *string
```

- *Type:* *string

---

##### `ShouldCleanupOnFail`<sup>Required</sup> <a name="ShouldCleanupOnFail" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldCleanupOnFail"></a>

```go
func ShouldCleanupOnFail() interface{}
```

- *Type:* interface{}

---

##### `ShouldNotWait`<sup>Required</sup> <a name="ShouldNotWait" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldNotWait"></a>

```go
func ShouldNotWait() interface{}
```

- *Type:* interface{}

---

##### `ShouldResetValues`<sup>Required</sup> <a name="ShouldResetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldResetValues"></a>

```go
func ShouldResetValues() interface{}
```

- *Type:* interface{}

---

##### `ShouldReuseValues`<sup>Required</sup> <a name="ShouldReuseValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldReuseValues"></a>

```go
func ShouldReuseValues() interface{}
```

- *Type:* interface{}

---

##### `ShouldSkipCrds`<sup>Required</sup> <a name="ShouldSkipCrds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipCrds"></a>

```go
func ShouldSkipCrds() interface{}
```

- *Type:* interface{}

---

##### `ShouldSkipRenderSubchartNotes`<sup>Required</sup> <a name="ShouldSkipRenderSubchartNotes" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipRenderSubchartNotes"></a>

```go
func ShouldSkipRenderSubchartNotes() interface{}
```

- *Type:* interface{}

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `TrafficShiftTarget`<sup>Required</sup> <a name="TrafficShiftTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.trafficShiftTarget"></a>

```go
func TrafficShiftTarget() *string
```

- *Type:* *string

---

##### `ValuesArtifactIds`<sup>Required</sup> <a name="ValuesArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.valuesArtifactIds"></a>

```go
func ValuesArtifactIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsDeployStageApprovalPolicy <a name="DevopsDeployStageApprovalPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

&devopsdeploystage.DevopsDeployStageApprovalPolicy {
	ApprovalPolicyType: *string,
	NumberOfApprovalsRequired: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.property.approvalPolicyType">ApprovalPolicyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#approval_policy_type DevopsDeployStage#approval_policy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.property.numberOfApprovalsRequired">NumberOfApprovalsRequired</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#number_of_approvals_required DevopsDeployStage#number_of_approvals_required}. |

---

##### `ApprovalPolicyType`<sup>Required</sup> <a name="ApprovalPolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.property.approvalPolicyType"></a>

```go
ApprovalPolicyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#approval_policy_type DevopsDeployStage#approval_policy_type}.

---

##### `NumberOfApprovalsRequired`<sup>Required</sup> <a name="NumberOfApprovalsRequired" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.property.numberOfApprovalsRequired"></a>

```go
NumberOfApprovalsRequired *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#number_of_approvals_required DevopsDeployStage#number_of_approvals_required}.

---

### DevopsDeployStageBlueBackendIps <a name="DevopsDeployStageBlueBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

&devopsdeploystage.DevopsDeployStageBlueBackendIps {
	Items: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps.property.items">Items</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps.property.items"></a>

```go
Items *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}.

---

### DevopsDeployStageBlueGreenStrategy <a name="DevopsDeployStageBlueGreenStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

&devopsdeploystage.DevopsDeployStageBlueGreenStrategy {
	IngressName: *string,
	NamespaceA: *string,
	NamespaceB: *string,
	StrategyType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.ingressName">IngressName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.namespaceA">NamespaceA</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace_a DevopsDeployStage#namespace_a}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.namespaceB">NamespaceB</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace_b DevopsDeployStage#namespace_b}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.strategyType">StrategyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}. |

---

##### `IngressName`<sup>Required</sup> <a name="IngressName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.ingressName"></a>

```go
IngressName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}.

---

##### `NamespaceA`<sup>Required</sup> <a name="NamespaceA" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.namespaceA"></a>

```go
NamespaceA *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace_a DevopsDeployStage#namespace_a}.

---

##### `NamespaceB`<sup>Required</sup> <a name="NamespaceB" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.namespaceB"></a>

```go
NamespaceB *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace_b DevopsDeployStage#namespace_b}.

---

##### `StrategyType`<sup>Required</sup> <a name="StrategyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.strategyType"></a>

```go
StrategyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}.

---

### DevopsDeployStageCanaryStrategy <a name="DevopsDeployStageCanaryStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

&devopsdeploystage.DevopsDeployStageCanaryStrategy {
	IngressName: *string,
	Namespace: *string,
	StrategyType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.ingressName">IngressName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.strategyType">StrategyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}. |

---

##### `IngressName`<sup>Required</sup> <a name="IngressName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.ingressName"></a>

```go
IngressName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}.

---

##### `StrategyType`<sup>Required</sup> <a name="StrategyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.strategyType"></a>

```go
StrategyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}.

---

### DevopsDeployStageConfig <a name="DevopsDeployStageConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

&devopsdeploystage.DevopsDeployStageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DeployPipelineId: *string,
	DeployStagePredecessorCollection: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection,
	DeployStageType: *string,
	ApprovalPolicy: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployStage.DevopsDeployStageApprovalPolicy,
	AreHooksEnabled: interface{},
	BlueBackendIps: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployStage.DevopsDeployStageBlueBackendIps,
	BlueGreenStrategy: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy,
	CanaryStrategy: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployStage.DevopsDeployStageCanaryStrategy,
	CommandSpecDeployArtifactId: *string,
	ComputeInstanceGroupBlueGreenDeploymentDeployStageId: *string,
	ComputeInstanceGroupCanaryDeployStageId: *string,
	ComputeInstanceGroupCanaryTrafficShiftDeployStageId: *string,
	ComputeInstanceGroupDeployEnvironmentId: *string,
	Config: *map[string]*string,
	ContainerConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployStage.DevopsDeployStageContainerConfig,
	DefinedTags: *map[string]*string,
	DeployArtifactId: *string,
	DeployArtifactIds: *[]*string,
	DeployEnvironmentIdA: *string,
	DeployEnvironmentIdB: *string,
	DeploymentSpecDeployArtifactId: *string,
	Description: *string,
	DisplayName: *string,
	DockerImageDeployArtifactId: *string,
	FailurePolicy: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployStage.DevopsDeployStageFailurePolicy,
	FreeformTags: *map[string]*string,
	FunctionDeployEnvironmentId: *string,
	FunctionTimeoutInSeconds: *f64,
	GreenBackendIps: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployStage.DevopsDeployStageGreenBackendIps,
	HelmChartDeployArtifactId: *string,
	HelmCommandArtifactIds: *[]*string,
	Id: *string,
	IsAsync: interface{},
	IsDebugEnabled: interface{},
	IsForceEnabled: interface{},
	IsUninstallOnStageDelete: interface{},
	IsValidationEnabled: interface{},
	KubernetesManifestDeployArtifactIds: *[]*string,
	LoadBalancerConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig,
	MaxHistory: *f64,
	MaxMemoryInMbs: *string,
	Namespace: *string,
	OkeBlueGreenDeployStageId: *string,
	OkeCanaryDeployStageId: *string,
	OkeCanaryTrafficShiftDeployStageId: *string,
	OkeClusterDeployEnvironmentId: *string,
	ProductionLoadBalancerConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig,
	Purpose: *string,
	ReleaseName: *string,
	RollbackPolicy: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployStage.DevopsDeployStageRollbackPolicy,
	RolloutPolicy: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployStage.DevopsDeployStageRolloutPolicy,
	SetString: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployStage.DevopsDeployStageSetString,
	SetValues: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployStage.DevopsDeployStageSetValues,
	ShouldCleanupOnFail: interface{},
	ShouldNotWait: interface{},
	ShouldResetValues: interface{},
	ShouldReuseValues: interface{},
	ShouldSkipCrds: interface{},
	ShouldSkipRenderSubchartNotes: interface{},
	TestLoadBalancerConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig,
	TimeoutInSeconds: *f64,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployStage.DevopsDeployStageTimeouts,
	TrafficShiftTarget: *string,
	ValuesArtifactIds: *[]*string,
	WaitCriteria: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployStage.DevopsDeployStageWaitCriteria,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployPipelineId">DeployPipelineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_pipeline_id DevopsDeployStage#deploy_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployStagePredecessorCollection">DeployStagePredecessorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a></code> | deploy_stage_predecessor_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployStageType">DeployStageType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_stage_type DevopsDeployStage#deploy_stage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.approvalPolicy">ApprovalPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a></code> | approval_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.areHooksEnabled">AreHooksEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#are_hooks_enabled DevopsDeployStage#are_hooks_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.blueBackendIps">BlueBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a></code> | blue_backend_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.blueGreenStrategy">BlueGreenStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a></code> | blue_green_strategy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.canaryStrategy">CanaryStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a></code> | canary_strategy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.commandSpecDeployArtifactId">CommandSpecDeployArtifactId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#command_spec_deploy_artifact_id DevopsDeployStage#command_spec_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupBlueGreenDeploymentDeployStageId">ComputeInstanceGroupBlueGreenDeploymentDeployStageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_blue_green_deployment_deploy_stage_id DevopsDeployStage#compute_instance_group_blue_green_deployment_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupCanaryDeployStageId">ComputeInstanceGroupCanaryDeployStageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupCanaryTrafficShiftDeployStageId">ComputeInstanceGroupCanaryTrafficShiftDeployStageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_traffic_shift_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_traffic_shift_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupDeployEnvironmentId">ComputeInstanceGroupDeployEnvironmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_deploy_environment_id DevopsDeployStage#compute_instance_group_deploy_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.config">Config</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#config DevopsDeployStage#config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.containerConfig">ContainerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a></code> | container_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#defined_tags DevopsDeployStage#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployArtifactId">DeployArtifactId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_id DevopsDeployStage#deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployArtifactIds">DeployArtifactIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_ids DevopsDeployStage#deploy_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployEnvironmentIdA">DeployEnvironmentIdA</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_a DevopsDeployStage#deploy_environment_id_a}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployEnvironmentIdB">DeployEnvironmentIdB</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_b DevopsDeployStage#deploy_environment_id_b}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deploymentSpecDeployArtifactId">DeploymentSpecDeployArtifactId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deployment_spec_deploy_artifact_id DevopsDeployStage#deployment_spec_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#description DevopsDeployStage#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#display_name DevopsDeployStage#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.dockerImageDeployArtifactId">DockerImageDeployArtifactId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#docker_image_deploy_artifact_id DevopsDeployStage#docker_image_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.failurePolicy">FailurePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a></code> | failure_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#freeform_tags DevopsDeployStage#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.functionDeployEnvironmentId">FunctionDeployEnvironmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_deploy_environment_id DevopsDeployStage#function_deploy_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.functionTimeoutInSeconds">FunctionTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_timeout_in_seconds DevopsDeployStage#function_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.greenBackendIps">GreenBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a></code> | green_backend_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.helmChartDeployArtifactId">HelmChartDeployArtifactId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_chart_deploy_artifact_id DevopsDeployStage#helm_chart_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.helmCommandArtifactIds">HelmCommandArtifactIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_command_artifact_ids DevopsDeployStage#helm_command_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isAsync">IsAsync</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_async DevopsDeployStage#is_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isDebugEnabled">IsDebugEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_debug_enabled DevopsDeployStage#is_debug_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isForceEnabled">IsForceEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_force_enabled DevopsDeployStage#is_force_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isUninstallOnStageDelete">IsUninstallOnStageDelete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_uninstall_on_stage_delete DevopsDeployStage#is_uninstall_on_stage_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isValidationEnabled">IsValidationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_validation_enabled DevopsDeployStage#is_validation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.kubernetesManifestDeployArtifactIds">KubernetesManifestDeployArtifactIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#kubernetes_manifest_deploy_artifact_ids DevopsDeployStage#kubernetes_manifest_deploy_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.loadBalancerConfig">LoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a></code> | load_balancer_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.maxHistory">MaxHistory</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_history DevopsDeployStage#max_history}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.maxMemoryInMbs">MaxMemoryInMbs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_memory_in_mbs DevopsDeployStage#max_memory_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeBlueGreenDeployStageId">OkeBlueGreenDeployStageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_blue_green_deploy_stage_id DevopsDeployStage#oke_blue_green_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeCanaryDeployStageId">OkeCanaryDeployStageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_deploy_stage_id DevopsDeployStage#oke_canary_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeCanaryTrafficShiftDeployStageId">OkeCanaryTrafficShiftDeployStageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_traffic_shift_deploy_stage_id DevopsDeployStage#oke_canary_traffic_shift_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeClusterDeployEnvironmentId">OkeClusterDeployEnvironmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_cluster_deploy_environment_id DevopsDeployStage#oke_cluster_deploy_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.productionLoadBalancerConfig">ProductionLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a></code> | production_load_balancer_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.purpose">Purpose</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#purpose DevopsDeployStage#purpose}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.releaseName">ReleaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#release_name DevopsDeployStage#release_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.rollbackPolicy">RollbackPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a></code> | rollback_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.rolloutPolicy">RolloutPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a></code> | rollout_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.setString">SetString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a></code> | set_string block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.setValues">SetValues</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a></code> | set_values block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldCleanupOnFail">ShouldCleanupOnFail</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_cleanup_on_fail DevopsDeployStage#should_cleanup_on_fail}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldNotWait">ShouldNotWait</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_not_wait DevopsDeployStage#should_not_wait}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldResetValues">ShouldResetValues</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reset_values DevopsDeployStage#should_reset_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldReuseValues">ShouldReuseValues</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reuse_values DevopsDeployStage#should_reuse_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldSkipCrds">ShouldSkipCrds</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_crds DevopsDeployStage#should_skip_crds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldSkipRenderSubchartNotes">ShouldSkipRenderSubchartNotes</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_render_subchart_notes DevopsDeployStage#should_skip_render_subchart_notes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.testLoadBalancerConfig">TestLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a></code> | test_load_balancer_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#timeout_in_seconds DevopsDeployStage#timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.trafficShiftTarget">TrafficShiftTarget</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#traffic_shift_target DevopsDeployStage#traffic_shift_target}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.valuesArtifactIds">ValuesArtifactIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#values_artifact_ids DevopsDeployStage#values_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.waitCriteria">WaitCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a></code> | wait_criteria block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeployPipelineId`<sup>Required</sup> <a name="DeployPipelineId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployPipelineId"></a>

```go
DeployPipelineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_pipeline_id DevopsDeployStage#deploy_pipeline_id}.

---

##### `DeployStagePredecessorCollection`<sup>Required</sup> <a name="DeployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployStagePredecessorCollection"></a>

```go
DeployStagePredecessorCollection DevopsDeployStageDeployStagePredecessorCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a>

deploy_stage_predecessor_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_stage_predecessor_collection DevopsDeployStage#deploy_stage_predecessor_collection}

---

##### `DeployStageType`<sup>Required</sup> <a name="DeployStageType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployStageType"></a>

```go
DeployStageType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_stage_type DevopsDeployStage#deploy_stage_type}.

---

##### `ApprovalPolicy`<sup>Optional</sup> <a name="ApprovalPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.approvalPolicy"></a>

```go
ApprovalPolicy DevopsDeployStageApprovalPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a>

approval_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#approval_policy DevopsDeployStage#approval_policy}

---

##### `AreHooksEnabled`<sup>Optional</sup> <a name="AreHooksEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.areHooksEnabled"></a>

```go
AreHooksEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#are_hooks_enabled DevopsDeployStage#are_hooks_enabled}.

---

##### `BlueBackendIps`<sup>Optional</sup> <a name="BlueBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.blueBackendIps"></a>

```go
BlueBackendIps DevopsDeployStageBlueBackendIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a>

blue_backend_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#blue_backend_ips DevopsDeployStage#blue_backend_ips}

---

##### `BlueGreenStrategy`<sup>Optional</sup> <a name="BlueGreenStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.blueGreenStrategy"></a>

```go
BlueGreenStrategy DevopsDeployStageBlueGreenStrategy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a>

blue_green_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#blue_green_strategy DevopsDeployStage#blue_green_strategy}

---

##### `CanaryStrategy`<sup>Optional</sup> <a name="CanaryStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.canaryStrategy"></a>

```go
CanaryStrategy DevopsDeployStageCanaryStrategy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a>

canary_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#canary_strategy DevopsDeployStage#canary_strategy}

---

##### `CommandSpecDeployArtifactId`<sup>Optional</sup> <a name="CommandSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.commandSpecDeployArtifactId"></a>

```go
CommandSpecDeployArtifactId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#command_spec_deploy_artifact_id DevopsDeployStage#command_spec_deploy_artifact_id}.

---

##### `ComputeInstanceGroupBlueGreenDeploymentDeployStageId`<sup>Optional</sup> <a name="ComputeInstanceGroupBlueGreenDeploymentDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupBlueGreenDeploymentDeployStageId"></a>

```go
ComputeInstanceGroupBlueGreenDeploymentDeployStageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_blue_green_deployment_deploy_stage_id DevopsDeployStage#compute_instance_group_blue_green_deployment_deploy_stage_id}.

---

##### `ComputeInstanceGroupCanaryDeployStageId`<sup>Optional</sup> <a name="ComputeInstanceGroupCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupCanaryDeployStageId"></a>

```go
ComputeInstanceGroupCanaryDeployStageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_deploy_stage_id}.

---

##### `ComputeInstanceGroupCanaryTrafficShiftDeployStageId`<sup>Optional</sup> <a name="ComputeInstanceGroupCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupCanaryTrafficShiftDeployStageId"></a>

```go
ComputeInstanceGroupCanaryTrafficShiftDeployStageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_traffic_shift_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_traffic_shift_deploy_stage_id}.

---

##### `ComputeInstanceGroupDeployEnvironmentId`<sup>Optional</sup> <a name="ComputeInstanceGroupDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupDeployEnvironmentId"></a>

```go
ComputeInstanceGroupDeployEnvironmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_deploy_environment_id DevopsDeployStage#compute_instance_group_deploy_environment_id}.

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.config"></a>

```go
Config *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#config DevopsDeployStage#config}.

---

##### `ContainerConfig`<sup>Optional</sup> <a name="ContainerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.containerConfig"></a>

```go
ContainerConfig DevopsDeployStageContainerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a>

container_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#container_config DevopsDeployStage#container_config}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#defined_tags DevopsDeployStage#defined_tags}.

---

##### `DeployArtifactId`<sup>Optional</sup> <a name="DeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployArtifactId"></a>

```go
DeployArtifactId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_id DevopsDeployStage#deploy_artifact_id}.

---

##### `DeployArtifactIds`<sup>Optional</sup> <a name="DeployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployArtifactIds"></a>

```go
DeployArtifactIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_ids DevopsDeployStage#deploy_artifact_ids}.

---

##### `DeployEnvironmentIdA`<sup>Optional</sup> <a name="DeployEnvironmentIdA" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployEnvironmentIdA"></a>

```go
DeployEnvironmentIdA *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_a DevopsDeployStage#deploy_environment_id_a}.

---

##### `DeployEnvironmentIdB`<sup>Optional</sup> <a name="DeployEnvironmentIdB" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployEnvironmentIdB"></a>

```go
DeployEnvironmentIdB *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_b DevopsDeployStage#deploy_environment_id_b}.

---

##### `DeploymentSpecDeployArtifactId`<sup>Optional</sup> <a name="DeploymentSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deploymentSpecDeployArtifactId"></a>

```go
DeploymentSpecDeployArtifactId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deployment_spec_deploy_artifact_id DevopsDeployStage#deployment_spec_deploy_artifact_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#description DevopsDeployStage#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#display_name DevopsDeployStage#display_name}.

---

##### `DockerImageDeployArtifactId`<sup>Optional</sup> <a name="DockerImageDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.dockerImageDeployArtifactId"></a>

```go
DockerImageDeployArtifactId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#docker_image_deploy_artifact_id DevopsDeployStage#docker_image_deploy_artifact_id}.

---

##### `FailurePolicy`<sup>Optional</sup> <a name="FailurePolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.failurePolicy"></a>

```go
FailurePolicy DevopsDeployStageFailurePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a>

failure_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_policy DevopsDeployStage#failure_policy}

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#freeform_tags DevopsDeployStage#freeform_tags}.

---

##### `FunctionDeployEnvironmentId`<sup>Optional</sup> <a name="FunctionDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.functionDeployEnvironmentId"></a>

```go
FunctionDeployEnvironmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_deploy_environment_id DevopsDeployStage#function_deploy_environment_id}.

---

##### `FunctionTimeoutInSeconds`<sup>Optional</sup> <a name="FunctionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.functionTimeoutInSeconds"></a>

```go
FunctionTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_timeout_in_seconds DevopsDeployStage#function_timeout_in_seconds}.

---

##### `GreenBackendIps`<sup>Optional</sup> <a name="GreenBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.greenBackendIps"></a>

```go
GreenBackendIps DevopsDeployStageGreenBackendIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a>

green_backend_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#green_backend_ips DevopsDeployStage#green_backend_ips}

---

##### `HelmChartDeployArtifactId`<sup>Optional</sup> <a name="HelmChartDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.helmChartDeployArtifactId"></a>

```go
HelmChartDeployArtifactId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_chart_deploy_artifact_id DevopsDeployStage#helm_chart_deploy_artifact_id}.

---

##### `HelmCommandArtifactIds`<sup>Optional</sup> <a name="HelmCommandArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.helmCommandArtifactIds"></a>

```go
HelmCommandArtifactIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_command_artifact_ids DevopsDeployStage#helm_command_artifact_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAsync`<sup>Optional</sup> <a name="IsAsync" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isAsync"></a>

```go
IsAsync interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_async DevopsDeployStage#is_async}.

---

##### `IsDebugEnabled`<sup>Optional</sup> <a name="IsDebugEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isDebugEnabled"></a>

```go
IsDebugEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_debug_enabled DevopsDeployStage#is_debug_enabled}.

---

##### `IsForceEnabled`<sup>Optional</sup> <a name="IsForceEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isForceEnabled"></a>

```go
IsForceEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_force_enabled DevopsDeployStage#is_force_enabled}.

---

##### `IsUninstallOnStageDelete`<sup>Optional</sup> <a name="IsUninstallOnStageDelete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isUninstallOnStageDelete"></a>

```go
IsUninstallOnStageDelete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_uninstall_on_stage_delete DevopsDeployStage#is_uninstall_on_stage_delete}.

---

##### `IsValidationEnabled`<sup>Optional</sup> <a name="IsValidationEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isValidationEnabled"></a>

```go
IsValidationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_validation_enabled DevopsDeployStage#is_validation_enabled}.

---

##### `KubernetesManifestDeployArtifactIds`<sup>Optional</sup> <a name="KubernetesManifestDeployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.kubernetesManifestDeployArtifactIds"></a>

```go
KubernetesManifestDeployArtifactIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#kubernetes_manifest_deploy_artifact_ids DevopsDeployStage#kubernetes_manifest_deploy_artifact_ids}.

---

##### `LoadBalancerConfig`<sup>Optional</sup> <a name="LoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.loadBalancerConfig"></a>

```go
LoadBalancerConfig DevopsDeployStageLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a>

load_balancer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_config DevopsDeployStage#load_balancer_config}

---

##### `MaxHistory`<sup>Optional</sup> <a name="MaxHistory" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.maxHistory"></a>

```go
MaxHistory *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_history DevopsDeployStage#max_history}.

---

##### `MaxMemoryInMbs`<sup>Optional</sup> <a name="MaxMemoryInMbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.maxMemoryInMbs"></a>

```go
MaxMemoryInMbs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_memory_in_mbs DevopsDeployStage#max_memory_in_mbs}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}.

---

##### `OkeBlueGreenDeployStageId`<sup>Optional</sup> <a name="OkeBlueGreenDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeBlueGreenDeployStageId"></a>

```go
OkeBlueGreenDeployStageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_blue_green_deploy_stage_id DevopsDeployStage#oke_blue_green_deploy_stage_id}.

---

##### `OkeCanaryDeployStageId`<sup>Optional</sup> <a name="OkeCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeCanaryDeployStageId"></a>

```go
OkeCanaryDeployStageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_deploy_stage_id DevopsDeployStage#oke_canary_deploy_stage_id}.

---

##### `OkeCanaryTrafficShiftDeployStageId`<sup>Optional</sup> <a name="OkeCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeCanaryTrafficShiftDeployStageId"></a>

```go
OkeCanaryTrafficShiftDeployStageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_traffic_shift_deploy_stage_id DevopsDeployStage#oke_canary_traffic_shift_deploy_stage_id}.

---

##### `OkeClusterDeployEnvironmentId`<sup>Optional</sup> <a name="OkeClusterDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeClusterDeployEnvironmentId"></a>

```go
OkeClusterDeployEnvironmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_cluster_deploy_environment_id DevopsDeployStage#oke_cluster_deploy_environment_id}.

---

##### `ProductionLoadBalancerConfig`<sup>Optional</sup> <a name="ProductionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.productionLoadBalancerConfig"></a>

```go
ProductionLoadBalancerConfig DevopsDeployStageProductionLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a>

production_load_balancer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#production_load_balancer_config DevopsDeployStage#production_load_balancer_config}

---

##### `Purpose`<sup>Optional</sup> <a name="Purpose" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.purpose"></a>

```go
Purpose *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#purpose DevopsDeployStage#purpose}.

---

##### `ReleaseName`<sup>Optional</sup> <a name="ReleaseName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.releaseName"></a>

```go
ReleaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#release_name DevopsDeployStage#release_name}.

---

##### `RollbackPolicy`<sup>Optional</sup> <a name="RollbackPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.rollbackPolicy"></a>

```go
RollbackPolicy DevopsDeployStageRollbackPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a>

rollback_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#rollback_policy DevopsDeployStage#rollback_policy}

---

##### `RolloutPolicy`<sup>Optional</sup> <a name="RolloutPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.rolloutPolicy"></a>

```go
RolloutPolicy DevopsDeployStageRolloutPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a>

rollout_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#rollout_policy DevopsDeployStage#rollout_policy}

---

##### `SetString`<sup>Optional</sup> <a name="SetString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.setString"></a>

```go
SetString DevopsDeployStageSetString
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a>

set_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#set_string DevopsDeployStage#set_string}

---

##### `SetValues`<sup>Optional</sup> <a name="SetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.setValues"></a>

```go
SetValues DevopsDeployStageSetValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a>

set_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#set_values DevopsDeployStage#set_values}

---

##### `ShouldCleanupOnFail`<sup>Optional</sup> <a name="ShouldCleanupOnFail" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldCleanupOnFail"></a>

```go
ShouldCleanupOnFail interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_cleanup_on_fail DevopsDeployStage#should_cleanup_on_fail}.

---

##### `ShouldNotWait`<sup>Optional</sup> <a name="ShouldNotWait" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldNotWait"></a>

```go
ShouldNotWait interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_not_wait DevopsDeployStage#should_not_wait}.

---

##### `ShouldResetValues`<sup>Optional</sup> <a name="ShouldResetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldResetValues"></a>

```go
ShouldResetValues interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reset_values DevopsDeployStage#should_reset_values}.

---

##### `ShouldReuseValues`<sup>Optional</sup> <a name="ShouldReuseValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldReuseValues"></a>

```go
ShouldReuseValues interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reuse_values DevopsDeployStage#should_reuse_values}.

---

##### `ShouldSkipCrds`<sup>Optional</sup> <a name="ShouldSkipCrds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldSkipCrds"></a>

```go
ShouldSkipCrds interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_crds DevopsDeployStage#should_skip_crds}.

---

##### `ShouldSkipRenderSubchartNotes`<sup>Optional</sup> <a name="ShouldSkipRenderSubchartNotes" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldSkipRenderSubchartNotes"></a>

```go
ShouldSkipRenderSubchartNotes interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_render_subchart_notes DevopsDeployStage#should_skip_render_subchart_notes}.

---

##### `TestLoadBalancerConfig`<sup>Optional</sup> <a name="TestLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.testLoadBalancerConfig"></a>

```go
TestLoadBalancerConfig DevopsDeployStageTestLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a>

test_load_balancer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#test_load_balancer_config DevopsDeployStage#test_load_balancer_config}

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.timeoutInSeconds"></a>

```go
TimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#timeout_in_seconds DevopsDeployStage#timeout_in_seconds}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.timeouts"></a>

```go
Timeouts DevopsDeployStageTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#timeouts DevopsDeployStage#timeouts}

---

##### `TrafficShiftTarget`<sup>Optional</sup> <a name="TrafficShiftTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.trafficShiftTarget"></a>

```go
TrafficShiftTarget *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#traffic_shift_target DevopsDeployStage#traffic_shift_target}.

---

##### `ValuesArtifactIds`<sup>Optional</sup> <a name="ValuesArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.valuesArtifactIds"></a>

```go
ValuesArtifactIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#values_artifact_ids DevopsDeployStage#values_artifact_ids}.

---

##### `WaitCriteria`<sup>Optional</sup> <a name="WaitCriteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.waitCriteria"></a>

```go
WaitCriteria DevopsDeployStageWaitCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a>

wait_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_criteria DevopsDeployStage#wait_criteria}

---

### DevopsDeployStageContainerConfig <a name="DevopsDeployStageContainerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

&devopsdeploystage.DevopsDeployStageContainerConfig {
	ContainerConfigType: *string,
	NetworkChannel: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel,
	ShapeConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig,
	ShapeName: *string,
	AvailabilityDomain: *string,
	CompartmentId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.containerConfigType">ContainerConfigType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#container_config_type DevopsDeployStage#container_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.networkChannel">NetworkChannel</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a></code> | network_channel block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.shapeName">ShapeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#shape_name DevopsDeployStage#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#availability_domain DevopsDeployStage#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compartment_id DevopsDeployStage#compartment_id}. |

---

##### `ContainerConfigType`<sup>Required</sup> <a name="ContainerConfigType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.containerConfigType"></a>

```go
ContainerConfigType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#container_config_type DevopsDeployStage#container_config_type}.

---

##### `NetworkChannel`<sup>Required</sup> <a name="NetworkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.networkChannel"></a>

```go
NetworkChannel DevopsDeployStageContainerConfigNetworkChannel
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a>

network_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#network_channel DevopsDeployStage#network_channel}

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.shapeConfig"></a>

```go
ShapeConfig DevopsDeployStageContainerConfigShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#shape_config DevopsDeployStage#shape_config}

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.shapeName"></a>

```go
ShapeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#shape_name DevopsDeployStage#shape_name}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#availability_domain DevopsDeployStage#availability_domain}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compartment_id DevopsDeployStage#compartment_id}.

---

### DevopsDeployStageContainerConfigNetworkChannel <a name="DevopsDeployStageContainerConfigNetworkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

&devopsdeploystage.DevopsDeployStageContainerConfigNetworkChannel {
	NetworkChannelType: *string,
	SubnetId: *string,
	NsgIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.networkChannelType">NetworkChannelType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#network_channel_type DevopsDeployStage#network_channel_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#subnet_id DevopsDeployStage#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#nsg_ids DevopsDeployStage#nsg_ids}. |

---

##### `NetworkChannelType`<sup>Required</sup> <a name="NetworkChannelType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.networkChannelType"></a>

```go
NetworkChannelType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#network_channel_type DevopsDeployStage#network_channel_type}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#subnet_id DevopsDeployStage#subnet_id}.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.nsgIds"></a>

```go
NsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#nsg_ids DevopsDeployStage#nsg_ids}.

---

### DevopsDeployStageContainerConfigShapeConfig <a name="DevopsDeployStageContainerConfigShapeConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

&devopsdeploystage.DevopsDeployStageContainerConfigShapeConfig {
	Ocpus: *f64,
	MemoryInGbs: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.property.ocpus">Ocpus</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ocpus DevopsDeployStage#ocpus}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#memory_in_gbs DevopsDeployStage#memory_in_gbs}. |

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.property.ocpus"></a>

```go
Ocpus *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ocpus DevopsDeployStage#ocpus}.

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.property.memoryInGbs"></a>

```go
MemoryInGbs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#memory_in_gbs DevopsDeployStage#memory_in_gbs}.

---

### DevopsDeployStageDeployStagePredecessorCollection <a name="DevopsDeployStageDeployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

&devopsdeploystage.DevopsDeployStageDeployStagePredecessorCollection {
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection.property.items">Items</a></code> | <code>interface{}</code> | items block. |

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}

---

### DevopsDeployStageDeployStagePredecessorCollectionItems <a name="DevopsDeployStageDeployStagePredecessorCollectionItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

&devopsdeploystage.DevopsDeployStageDeployStagePredecessorCollectionItems {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DevopsDeployStageFailurePolicy <a name="DevopsDeployStageFailurePolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

&devopsdeploystage.DevopsDeployStageFailurePolicy {
	PolicyType: *string,
	FailureCount: *f64,
	FailurePercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.policyType">PolicyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.failureCount">FailureCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_count DevopsDeployStage#failure_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.failurePercentage">FailurePercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_percentage DevopsDeployStage#failure_percentage}. |

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.policyType"></a>

```go
PolicyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}.

---

##### `FailureCount`<sup>Optional</sup> <a name="FailureCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.failureCount"></a>

```go
FailureCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_count DevopsDeployStage#failure_count}.

---

##### `FailurePercentage`<sup>Optional</sup> <a name="FailurePercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.failurePercentage"></a>

```go
FailurePercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_percentage DevopsDeployStage#failure_percentage}.

---

### DevopsDeployStageGreenBackendIps <a name="DevopsDeployStageGreenBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

&devopsdeploystage.DevopsDeployStageGreenBackendIps {
	Items: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps.property.items">Items</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps.property.items"></a>

```go
Items *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}.

---

### DevopsDeployStageLoadBalancerConfig <a name="DevopsDeployStageLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

&devopsdeploystage.DevopsDeployStageLoadBalancerConfig {
	BackendPort: *f64,
	ListenerName: *string,
	LoadBalancerId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.backendPort">BackendPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.listenerName">ListenerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}. |

---

##### `BackendPort`<sup>Optional</sup> <a name="BackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.backendPort"></a>

```go
BackendPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}.

---

##### `ListenerName`<sup>Optional</sup> <a name="ListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.listenerName"></a>

```go
ListenerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}.

---

##### `LoadBalancerId`<sup>Optional</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.loadBalancerId"></a>

```go
LoadBalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}.

---

### DevopsDeployStageProductionLoadBalancerConfig <a name="DevopsDeployStageProductionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

&devopsdeploystage.DevopsDeployStageProductionLoadBalancerConfig {
	BackendPort: *f64,
	ListenerName: *string,
	LoadBalancerId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.backendPort">BackendPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.listenerName">ListenerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}. |

---

##### `BackendPort`<sup>Optional</sup> <a name="BackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.backendPort"></a>

```go
BackendPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}.

---

##### `ListenerName`<sup>Optional</sup> <a name="ListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.listenerName"></a>

```go
ListenerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}.

---

##### `LoadBalancerId`<sup>Optional</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.loadBalancerId"></a>

```go
LoadBalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}.

---

### DevopsDeployStageRollbackPolicy <a name="DevopsDeployStageRollbackPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

&devopsdeploystage.DevopsDeployStageRollbackPolicy {
	PolicyType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy.property.policyType">PolicyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}. |

---

##### `PolicyType`<sup>Optional</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy.property.policyType"></a>

```go
PolicyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}.

---

### DevopsDeployStageRolloutPolicy <a name="DevopsDeployStageRolloutPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

&devopsdeploystage.DevopsDeployStageRolloutPolicy {
	BatchCount: *f64,
	BatchDelayInSeconds: *f64,
	BatchPercentage: *f64,
	PolicyType: *string,
	RampLimitPercent: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchCount">BatchCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_count DevopsDeployStage#batch_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchDelayInSeconds">BatchDelayInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_delay_in_seconds DevopsDeployStage#batch_delay_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchPercentage">BatchPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_percentage DevopsDeployStage#batch_percentage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.policyType">PolicyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.rampLimitPercent">RampLimitPercent</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ramp_limit_percent DevopsDeployStage#ramp_limit_percent}. |

---

##### `BatchCount`<sup>Optional</sup> <a name="BatchCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchCount"></a>

```go
BatchCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_count DevopsDeployStage#batch_count}.

---

##### `BatchDelayInSeconds`<sup>Optional</sup> <a name="BatchDelayInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchDelayInSeconds"></a>

```go
BatchDelayInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_delay_in_seconds DevopsDeployStage#batch_delay_in_seconds}.

---

##### `BatchPercentage`<sup>Optional</sup> <a name="BatchPercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchPercentage"></a>

```go
BatchPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_percentage DevopsDeployStage#batch_percentage}.

---

##### `PolicyType`<sup>Optional</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.policyType"></a>

```go
PolicyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}.

---

##### `RampLimitPercent`<sup>Optional</sup> <a name="RampLimitPercent" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.rampLimitPercent"></a>

```go
RampLimitPercent *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ramp_limit_percent DevopsDeployStage#ramp_limit_percent}.

---

### DevopsDeployStageSetString <a name="DevopsDeployStageSetString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

&devopsdeploystage.DevopsDeployStageSetString {
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString.property.items">Items</a></code> | <code>interface{}</code> | items block. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}

---

### DevopsDeployStageSetStringItems <a name="DevopsDeployStageSetStringItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

&devopsdeploystage.DevopsDeployStageSetStringItems {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#name DevopsDeployStage#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#value DevopsDeployStage#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#name DevopsDeployStage#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#value DevopsDeployStage#value}.

---

### DevopsDeployStageSetValues <a name="DevopsDeployStageSetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

&devopsdeploystage.DevopsDeployStageSetValues {
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues.property.items">Items</a></code> | <code>interface{}</code> | items block. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}

---

### DevopsDeployStageSetValuesItems <a name="DevopsDeployStageSetValuesItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

&devopsdeploystage.DevopsDeployStageSetValuesItems {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#name DevopsDeployStage#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#value DevopsDeployStage#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#name DevopsDeployStage#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#value DevopsDeployStage#value}.

---

### DevopsDeployStageTestLoadBalancerConfig <a name="DevopsDeployStageTestLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

&devopsdeploystage.DevopsDeployStageTestLoadBalancerConfig {
	BackendPort: *f64,
	ListenerName: *string,
	LoadBalancerId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.backendPort">BackendPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.listenerName">ListenerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}. |

---

##### `BackendPort`<sup>Optional</sup> <a name="BackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.backendPort"></a>

```go
BackendPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}.

---

##### `ListenerName`<sup>Optional</sup> <a name="ListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.listenerName"></a>

```go
ListenerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}.

---

##### `LoadBalancerId`<sup>Optional</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.loadBalancerId"></a>

```go
LoadBalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}.

---

### DevopsDeployStageTimeouts <a name="DevopsDeployStageTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

&devopsdeploystage.DevopsDeployStageTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#create DevopsDeployStage#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#delete DevopsDeployStage#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#update DevopsDeployStage#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#create DevopsDeployStage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#delete DevopsDeployStage#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#update DevopsDeployStage#update}.

---

### DevopsDeployStageWaitCriteria <a name="DevopsDeployStageWaitCriteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

&devopsdeploystage.DevopsDeployStageWaitCriteria {
	WaitDuration: *string,
	WaitType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.property.waitDuration">WaitDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_duration DevopsDeployStage#wait_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.property.waitType">WaitType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_type DevopsDeployStage#wait_type}. |

---

##### `WaitDuration`<sup>Required</sup> <a name="WaitDuration" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.property.waitDuration"></a>

```go
WaitDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_duration DevopsDeployStage#wait_duration}.

---

##### `WaitType`<sup>Required</sup> <a name="WaitType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.property.waitType"></a>

```go
WaitType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_type DevopsDeployStage#wait_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsDeployStageApprovalPolicyOutputReference <a name="DevopsDeployStageApprovalPolicyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageApprovalPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployStageApprovalPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.approvalPolicyTypeInput">ApprovalPolicyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.numberOfApprovalsRequiredInput">NumberOfApprovalsRequiredInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.approvalPolicyType">ApprovalPolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.numberOfApprovalsRequired">NumberOfApprovalsRequired</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApprovalPolicyTypeInput`<sup>Optional</sup> <a name="ApprovalPolicyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.approvalPolicyTypeInput"></a>

```go
func ApprovalPolicyTypeInput() *string
```

- *Type:* *string

---

##### `NumberOfApprovalsRequiredInput`<sup>Optional</sup> <a name="NumberOfApprovalsRequiredInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.numberOfApprovalsRequiredInput"></a>

```go
func NumberOfApprovalsRequiredInput() *f64
```

- *Type:* *f64

---

##### `ApprovalPolicyType`<sup>Required</sup> <a name="ApprovalPolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.approvalPolicyType"></a>

```go
func ApprovalPolicyType() *string
```

- *Type:* *string

---

##### `NumberOfApprovalsRequired`<sup>Required</sup> <a name="NumberOfApprovalsRequired" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.numberOfApprovalsRequired"></a>

```go
func NumberOfApprovalsRequired() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeployStageApprovalPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a>

---


### DevopsDeployStageBlueBackendIpsOutputReference <a name="DevopsDeployStageBlueBackendIpsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageBlueBackendIpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployStageBlueBackendIpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetItems` <a name="ResetItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.itemsInput">ItemsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.items">Items</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.itemsInput"></a>

```go
func ItemsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.items"></a>

```go
func Items() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeployStageBlueBackendIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a>

---


### DevopsDeployStageBlueGreenStrategyOutputReference <a name="DevopsDeployStageBlueGreenStrategyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageBlueGreenStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployStageBlueGreenStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.ingressNameInput">IngressNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceAInput">NamespaceAInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceBInput">NamespaceBInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.strategyTypeInput">StrategyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.ingressName">IngressName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceA">NamespaceA</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceB">NamespaceB</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.strategyType">StrategyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IngressNameInput`<sup>Optional</sup> <a name="IngressNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.ingressNameInput"></a>

```go
func IngressNameInput() *string
```

- *Type:* *string

---

##### `NamespaceAInput`<sup>Optional</sup> <a name="NamespaceAInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceAInput"></a>

```go
func NamespaceAInput() *string
```

- *Type:* *string

---

##### `NamespaceBInput`<sup>Optional</sup> <a name="NamespaceBInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceBInput"></a>

```go
func NamespaceBInput() *string
```

- *Type:* *string

---

##### `StrategyTypeInput`<sup>Optional</sup> <a name="StrategyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.strategyTypeInput"></a>

```go
func StrategyTypeInput() *string
```

- *Type:* *string

---

##### `IngressName`<sup>Required</sup> <a name="IngressName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.ingressName"></a>

```go
func IngressName() *string
```

- *Type:* *string

---

##### `NamespaceA`<sup>Required</sup> <a name="NamespaceA" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceA"></a>

```go
func NamespaceA() *string
```

- *Type:* *string

---

##### `NamespaceB`<sup>Required</sup> <a name="NamespaceB" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceB"></a>

```go
func NamespaceB() *string
```

- *Type:* *string

---

##### `StrategyType`<sup>Required</sup> <a name="StrategyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.strategyType"></a>

```go
func StrategyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeployStageBlueGreenStrategy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a>

---


### DevopsDeployStageCanaryStrategyOutputReference <a name="DevopsDeployStageCanaryStrategyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageCanaryStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployStageCanaryStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.ingressNameInput">IngressNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.strategyTypeInput">StrategyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.ingressName">IngressName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.strategyType">StrategyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IngressNameInput`<sup>Optional</sup> <a name="IngressNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.ingressNameInput"></a>

```go
func IngressNameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `StrategyTypeInput`<sup>Optional</sup> <a name="StrategyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.strategyTypeInput"></a>

```go
func StrategyTypeInput() *string
```

- *Type:* *string

---

##### `IngressName`<sup>Required</sup> <a name="IngressName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.ingressName"></a>

```go
func IngressName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `StrategyType`<sup>Required</sup> <a name="StrategyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.strategyType"></a>

```go
func StrategyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeployStageCanaryStrategy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a>

---


### DevopsDeployStageContainerConfigNetworkChannelOutputReference <a name="DevopsDeployStageContainerConfigNetworkChannelOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageContainerConfigNetworkChannelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployStageContainerConfigNetworkChannelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.resetNsgIds">ResetNsgIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.resetNsgIds"></a>

```go
func ResetNsgIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.networkChannelTypeInput">NetworkChannelTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.nsgIdsInput">NsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.networkChannelType">NetworkChannelType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkChannelTypeInput`<sup>Optional</sup> <a name="NetworkChannelTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.networkChannelTypeInput"></a>

```go
func NetworkChannelTypeInput() *string
```

- *Type:* *string

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.nsgIdsInput"></a>

```go
func NsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `NetworkChannelType`<sup>Required</sup> <a name="NetworkChannelType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.networkChannelType"></a>

```go
func NetworkChannelType() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeployStageContainerConfigNetworkChannel
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a>

---


### DevopsDeployStageContainerConfigOutputReference <a name="DevopsDeployStageContainerConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageContainerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployStageContainerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putNetworkChannel">PutNetworkChannel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putShapeConfig">PutShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkChannel` <a name="PutNetworkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putNetworkChannel"></a>

```go
func PutNetworkChannel(value DevopsDeployStageContainerConfigNetworkChannel)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putNetworkChannel.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a>

---

##### `PutShapeConfig` <a name="PutShapeConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putShapeConfig"></a>

```go
func PutShapeConfig(value DevopsDeployStageContainerConfigShapeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a>

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.networkChannel">NetworkChannel</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference">DevopsDeployStageContainerConfigNetworkChannelOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference">DevopsDeployStageContainerConfigShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.containerConfigTypeInput">ContainerConfigTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.networkChannelInput">NetworkChannelInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeConfigInput">ShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeNameInput">ShapeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.containerConfigType">ContainerConfigType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeName">ShapeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkChannel`<sup>Required</sup> <a name="NetworkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.networkChannel"></a>

```go
func NetworkChannel() DevopsDeployStageContainerConfigNetworkChannelOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference">DevopsDeployStageContainerConfigNetworkChannelOutputReference</a>

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeConfig"></a>

```go
func ShapeConfig() DevopsDeployStageContainerConfigShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference">DevopsDeployStageContainerConfigShapeConfigOutputReference</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ContainerConfigTypeInput`<sup>Optional</sup> <a name="ContainerConfigTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.containerConfigTypeInput"></a>

```go
func ContainerConfigTypeInput() *string
```

- *Type:* *string

---

##### `NetworkChannelInput`<sup>Optional</sup> <a name="NetworkChannelInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.networkChannelInput"></a>

```go
func NetworkChannelInput() DevopsDeployStageContainerConfigNetworkChannel
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a>

---

##### `ShapeConfigInput`<sup>Optional</sup> <a name="ShapeConfigInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeConfigInput"></a>

```go
func ShapeConfigInput() DevopsDeployStageContainerConfigShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a>

---

##### `ShapeNameInput`<sup>Optional</sup> <a name="ShapeNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeNameInput"></a>

```go
func ShapeNameInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ContainerConfigType`<sup>Required</sup> <a name="ContainerConfigType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.containerConfigType"></a>

```go
func ContainerConfigType() *string
```

- *Type:* *string

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeName"></a>

```go
func ShapeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeployStageContainerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a>

---


### DevopsDeployStageContainerConfigShapeConfigOutputReference <a name="DevopsDeployStageContainerConfigShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageContainerConfigShapeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployStageContainerConfigShapeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.resetMemoryInGbs"></a>

```go
func ResetMemoryInGbs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.memoryInGbsInput"></a>

```go
func MemoryInGbsInput() *f64
```

- *Type:* *f64

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.ocpusInput"></a>

```go
func OcpusInput() *f64
```

- *Type:* *f64

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeployStageContainerConfigShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a>

---


### DevopsDeployStageDeployStagePredecessorCollectionItemsList <a name="DevopsDeployStageDeployStagePredecessorCollectionItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageDeployStagePredecessorCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsDeployStageDeployStagePredecessorCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.get"></a>

```go
func Get(index *f64) DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference <a name="DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsDeployStageDeployStagePredecessorCollectionOutputReference <a name="DevopsDeployStageDeployStagePredecessorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageDeployStagePredecessorCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployStageDeployStagePredecessorCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.putItems">PutItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList">DevopsDeployStageDeployStagePredecessorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.items"></a>

```go
func Items() DevopsDeployStageDeployStagePredecessorCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList">DevopsDeployStageDeployStagePredecessorCollectionItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeployStageDeployStagePredecessorCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a>

---


### DevopsDeployStageFailurePolicyOutputReference <a name="DevopsDeployStageFailurePolicyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageFailurePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployStageFailurePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resetFailureCount">ResetFailureCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resetFailurePercentage">ResetFailurePercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailureCount` <a name="ResetFailureCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resetFailureCount"></a>

```go
func ResetFailureCount()
```

##### `ResetFailurePercentage` <a name="ResetFailurePercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resetFailurePercentage"></a>

```go
func ResetFailurePercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failureCountInput">FailureCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failurePercentageInput">FailurePercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.policyTypeInput">PolicyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failureCount">FailureCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failurePercentage">FailurePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailureCountInput`<sup>Optional</sup> <a name="FailureCountInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failureCountInput"></a>

```go
func FailureCountInput() *f64
```

- *Type:* *f64

---

##### `FailurePercentageInput`<sup>Optional</sup> <a name="FailurePercentageInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failurePercentageInput"></a>

```go
func FailurePercentageInput() *f64
```

- *Type:* *f64

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.policyTypeInput"></a>

```go
func PolicyTypeInput() *string
```

- *Type:* *string

---

##### `FailureCount`<sup>Required</sup> <a name="FailureCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failureCount"></a>

```go
func FailureCount() *f64
```

- *Type:* *f64

---

##### `FailurePercentage`<sup>Required</sup> <a name="FailurePercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failurePercentage"></a>

```go
func FailurePercentage() *f64
```

- *Type:* *f64

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeployStageFailurePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a>

---


### DevopsDeployStageGreenBackendIpsOutputReference <a name="DevopsDeployStageGreenBackendIpsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageGreenBackendIpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployStageGreenBackendIpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetItems` <a name="ResetItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.itemsInput">ItemsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.items">Items</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.itemsInput"></a>

```go
func ItemsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.items"></a>

```go
func Items() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeployStageGreenBackendIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a>

---


### DevopsDeployStageLoadBalancerConfigOutputReference <a name="DevopsDeployStageLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageLoadBalancerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployStageLoadBalancerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetBackendPort">ResetBackendPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetListenerName">ResetListenerName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetLoadBalancerId">ResetLoadBalancerId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackendPort` <a name="ResetBackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetBackendPort"></a>

```go
func ResetBackendPort()
```

##### `ResetListenerName` <a name="ResetListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetListenerName"></a>

```go
func ResetListenerName()
```

##### `ResetLoadBalancerId` <a name="ResetLoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetLoadBalancerId"></a>

```go
func ResetLoadBalancerId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.backendPortInput">BackendPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.listenerNameInput">ListenerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.backendPort">BackendPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.listenerName">ListenerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `BackendPortInput`<sup>Optional</sup> <a name="BackendPortInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.backendPortInput"></a>

```go
func BackendPortInput() *f64
```

- *Type:* *f64

---

##### `ListenerNameInput`<sup>Optional</sup> <a name="ListenerNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.listenerNameInput"></a>

```go
func ListenerNameInput() *string
```

- *Type:* *string

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.loadBalancerIdInput"></a>

```go
func LoadBalancerIdInput() *string
```

- *Type:* *string

---

##### `BackendPort`<sup>Required</sup> <a name="BackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.backendPort"></a>

```go
func BackendPort() *f64
```

- *Type:* *f64

---

##### `ListenerName`<sup>Required</sup> <a name="ListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.listenerName"></a>

```go
func ListenerName() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeployStageLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a>

---


### DevopsDeployStageProductionLoadBalancerConfigOutputReference <a name="DevopsDeployStageProductionLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageProductionLoadBalancerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployStageProductionLoadBalancerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetBackendPort">ResetBackendPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetListenerName">ResetListenerName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetLoadBalancerId">ResetLoadBalancerId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackendPort` <a name="ResetBackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetBackendPort"></a>

```go
func ResetBackendPort()
```

##### `ResetListenerName` <a name="ResetListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetListenerName"></a>

```go
func ResetListenerName()
```

##### `ResetLoadBalancerId` <a name="ResetLoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetLoadBalancerId"></a>

```go
func ResetLoadBalancerId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.backendPortInput">BackendPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.listenerNameInput">ListenerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.backendPort">BackendPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.listenerName">ListenerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `BackendPortInput`<sup>Optional</sup> <a name="BackendPortInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.backendPortInput"></a>

```go
func BackendPortInput() *f64
```

- *Type:* *f64

---

##### `ListenerNameInput`<sup>Optional</sup> <a name="ListenerNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.listenerNameInput"></a>

```go
func ListenerNameInput() *string
```

- *Type:* *string

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.loadBalancerIdInput"></a>

```go
func LoadBalancerIdInput() *string
```

- *Type:* *string

---

##### `BackendPort`<sup>Required</sup> <a name="BackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.backendPort"></a>

```go
func BackendPort() *f64
```

- *Type:* *f64

---

##### `ListenerName`<sup>Required</sup> <a name="ListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.listenerName"></a>

```go
func ListenerName() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeployStageProductionLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a>

---


### DevopsDeployStageRollbackPolicyOutputReference <a name="DevopsDeployStageRollbackPolicyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageRollbackPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployStageRollbackPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.resetPolicyType">ResetPolicyType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPolicyType` <a name="ResetPolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.resetPolicyType"></a>

```go
func ResetPolicyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.policyTypeInput">PolicyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.policyTypeInput"></a>

```go
func PolicyTypeInput() *string
```

- *Type:* *string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeployStageRollbackPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a>

---


### DevopsDeployStageRolloutPolicyOutputReference <a name="DevopsDeployStageRolloutPolicyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageRolloutPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployStageRolloutPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchCount">ResetBatchCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchDelayInSeconds">ResetBatchDelayInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchPercentage">ResetBatchPercentage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetPolicyType">ResetPolicyType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetRampLimitPercent">ResetRampLimitPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchCount` <a name="ResetBatchCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchCount"></a>

```go
func ResetBatchCount()
```

##### `ResetBatchDelayInSeconds` <a name="ResetBatchDelayInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchDelayInSeconds"></a>

```go
func ResetBatchDelayInSeconds()
```

##### `ResetBatchPercentage` <a name="ResetBatchPercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchPercentage"></a>

```go
func ResetBatchPercentage()
```

##### `ResetPolicyType` <a name="ResetPolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetPolicyType"></a>

```go
func ResetPolicyType()
```

##### `ResetRampLimitPercent` <a name="ResetRampLimitPercent" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetRampLimitPercent"></a>

```go
func ResetRampLimitPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchCountInput">BatchCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchDelayInSecondsInput">BatchDelayInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchPercentageInput">BatchPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.policyTypeInput">PolicyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.rampLimitPercentInput">RampLimitPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchCount">BatchCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchDelayInSeconds">BatchDelayInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchPercentage">BatchPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.rampLimitPercent">RampLimitPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchCountInput`<sup>Optional</sup> <a name="BatchCountInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchCountInput"></a>

```go
func BatchCountInput() *f64
```

- *Type:* *f64

---

##### `BatchDelayInSecondsInput`<sup>Optional</sup> <a name="BatchDelayInSecondsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchDelayInSecondsInput"></a>

```go
func BatchDelayInSecondsInput() *f64
```

- *Type:* *f64

---

##### `BatchPercentageInput`<sup>Optional</sup> <a name="BatchPercentageInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchPercentageInput"></a>

```go
func BatchPercentageInput() *f64
```

- *Type:* *f64

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.policyTypeInput"></a>

```go
func PolicyTypeInput() *string
```

- *Type:* *string

---

##### `RampLimitPercentInput`<sup>Optional</sup> <a name="RampLimitPercentInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.rampLimitPercentInput"></a>

```go
func RampLimitPercentInput() *f64
```

- *Type:* *f64

---

##### `BatchCount`<sup>Required</sup> <a name="BatchCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchCount"></a>

```go
func BatchCount() *f64
```

- *Type:* *f64

---

##### `BatchDelayInSeconds`<sup>Required</sup> <a name="BatchDelayInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchDelayInSeconds"></a>

```go
func BatchDelayInSeconds() *f64
```

- *Type:* *f64

---

##### `BatchPercentage`<sup>Required</sup> <a name="BatchPercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchPercentage"></a>

```go
func BatchPercentage() *f64
```

- *Type:* *f64

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `RampLimitPercent`<sup>Required</sup> <a name="RampLimitPercent" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.rampLimitPercent"></a>

```go
func RampLimitPercent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeployStageRolloutPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a>

---


### DevopsDeployStageSetStringItemsList <a name="DevopsDeployStageSetStringItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageSetStringItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsDeployStageSetStringItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.get"></a>

```go
func Get(index *f64) DevopsDeployStageSetStringItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsDeployStageSetStringItemsOutputReference <a name="DevopsDeployStageSetStringItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageSetStringItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsDeployStageSetStringItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsDeployStageSetStringOutputReference <a name="DevopsDeployStageSetStringOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageSetStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployStageSetStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetItems` <a name="ResetItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList">DevopsDeployStageSetStringItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.items"></a>

```go
func Items() DevopsDeployStageSetStringItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList">DevopsDeployStageSetStringItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeployStageSetString
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a>

---


### DevopsDeployStageSetValuesItemsList <a name="DevopsDeployStageSetValuesItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageSetValuesItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsDeployStageSetValuesItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.get"></a>

```go
func Get(index *f64) DevopsDeployStageSetValuesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsDeployStageSetValuesItemsOutputReference <a name="DevopsDeployStageSetValuesItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageSetValuesItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsDeployStageSetValuesItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsDeployStageSetValuesOutputReference <a name="DevopsDeployStageSetValuesOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageSetValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployStageSetValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetItems` <a name="ResetItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList">DevopsDeployStageSetValuesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.items"></a>

```go
func Items() DevopsDeployStageSetValuesItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList">DevopsDeployStageSetValuesItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeployStageSetValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a>

---


### DevopsDeployStageTestLoadBalancerConfigOutputReference <a name="DevopsDeployStageTestLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageTestLoadBalancerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployStageTestLoadBalancerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetBackendPort">ResetBackendPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetListenerName">ResetListenerName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetLoadBalancerId">ResetLoadBalancerId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackendPort` <a name="ResetBackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetBackendPort"></a>

```go
func ResetBackendPort()
```

##### `ResetListenerName` <a name="ResetListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetListenerName"></a>

```go
func ResetListenerName()
```

##### `ResetLoadBalancerId` <a name="ResetLoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetLoadBalancerId"></a>

```go
func ResetLoadBalancerId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.backendPortInput">BackendPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.listenerNameInput">ListenerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.backendPort">BackendPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.listenerName">ListenerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `BackendPortInput`<sup>Optional</sup> <a name="BackendPortInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.backendPortInput"></a>

```go
func BackendPortInput() *f64
```

- *Type:* *f64

---

##### `ListenerNameInput`<sup>Optional</sup> <a name="ListenerNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.listenerNameInput"></a>

```go
func ListenerNameInput() *string
```

- *Type:* *string

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.loadBalancerIdInput"></a>

```go
func LoadBalancerIdInput() *string
```

- *Type:* *string

---

##### `BackendPort`<sup>Required</sup> <a name="BackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.backendPort"></a>

```go
func BackendPort() *f64
```

- *Type:* *f64

---

##### `ListenerName`<sup>Required</sup> <a name="ListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.listenerName"></a>

```go
func ListenerName() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeployStageTestLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a>

---


### DevopsDeployStageTimeoutsOutputReference <a name="DevopsDeployStageTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployStageTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsDeployStageWaitCriteriaOutputReference <a name="DevopsDeployStageWaitCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeploystage"

devopsdeploystage.NewDevopsDeployStageWaitCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployStageWaitCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitDurationInput">WaitDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitTypeInput">WaitTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitDuration">WaitDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitType">WaitType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WaitDurationInput`<sup>Optional</sup> <a name="WaitDurationInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitDurationInput"></a>

```go
func WaitDurationInput() *string
```

- *Type:* *string

---

##### `WaitTypeInput`<sup>Optional</sup> <a name="WaitTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitTypeInput"></a>

```go
func WaitTypeInput() *string
```

- *Type:* *string

---

##### `WaitDuration`<sup>Required</sup> <a name="WaitDuration" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitDuration"></a>

```go
func WaitDuration() *string
```

- *Type:* *string

---

##### `WaitType`<sup>Required</sup> <a name="WaitType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitType"></a>

```go
func WaitType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeployStageWaitCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a>

---



