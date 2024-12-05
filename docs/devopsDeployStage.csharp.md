# `devopsDeployStage` Submodule <a name="`devopsDeployStage` Submodule" id="rhizo-co-terraform-provider-oci.devopsDeployStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsDeployStage <a name="DevopsDeployStage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage oci_devops_deploy_stage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStage(Construct Scope, string Id, DevopsDeployStageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig">DevopsDeployStageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApprovalPolicy` <a name="PutApprovalPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putApprovalPolicy"></a>

```csharp
private void PutApprovalPolicy(DevopsDeployStageApprovalPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putApprovalPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a>

---

##### `PutBlueBackendIps` <a name="PutBlueBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueBackendIps"></a>

```csharp
private void PutBlueBackendIps(DevopsDeployStageBlueBackendIps Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueBackendIps.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a>

---

##### `PutBlueGreenStrategy` <a name="PutBlueGreenStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueGreenStrategy"></a>

```csharp
private void PutBlueGreenStrategy(DevopsDeployStageBlueGreenStrategy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueGreenStrategy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a>

---

##### `PutCanaryStrategy` <a name="PutCanaryStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putCanaryStrategy"></a>

```csharp
private void PutCanaryStrategy(DevopsDeployStageCanaryStrategy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putCanaryStrategy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a>

---

##### `PutContainerConfig` <a name="PutContainerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putContainerConfig"></a>

```csharp
private void PutContainerConfig(DevopsDeployStageContainerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putContainerConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a>

---

##### `PutDeployStagePredecessorCollection` <a name="PutDeployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putDeployStagePredecessorCollection"></a>

```csharp
private void PutDeployStagePredecessorCollection(DevopsDeployStageDeployStagePredecessorCollection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putDeployStagePredecessorCollection.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a>

---

##### `PutFailurePolicy` <a name="PutFailurePolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putFailurePolicy"></a>

```csharp
private void PutFailurePolicy(DevopsDeployStageFailurePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putFailurePolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a>

---

##### `PutGreenBackendIps` <a name="PutGreenBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putGreenBackendIps"></a>

```csharp
private void PutGreenBackendIps(DevopsDeployStageGreenBackendIps Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putGreenBackendIps.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a>

---

##### `PutLoadBalancerConfig` <a name="PutLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putLoadBalancerConfig"></a>

```csharp
private void PutLoadBalancerConfig(DevopsDeployStageLoadBalancerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putLoadBalancerConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a>

---

##### `PutProductionLoadBalancerConfig` <a name="PutProductionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putProductionLoadBalancerConfig"></a>

```csharp
private void PutProductionLoadBalancerConfig(DevopsDeployStageProductionLoadBalancerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putProductionLoadBalancerConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a>

---

##### `PutRollbackPolicy` <a name="PutRollbackPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRollbackPolicy"></a>

```csharp
private void PutRollbackPolicy(DevopsDeployStageRollbackPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRollbackPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a>

---

##### `PutRolloutPolicy` <a name="PutRolloutPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRolloutPolicy"></a>

```csharp
private void PutRolloutPolicy(DevopsDeployStageRolloutPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRolloutPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a>

---

##### `PutSetString` <a name="PutSetString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetString"></a>

```csharp
private void PutSetString(DevopsDeployStageSetString Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetString.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a>

---

##### `PutSetValues` <a name="PutSetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetValues"></a>

```csharp
private void PutSetValues(DevopsDeployStageSetValues Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetValues.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a>

---

##### `PutTestLoadBalancerConfig` <a name="PutTestLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTestLoadBalancerConfig"></a>

```csharp
private void PutTestLoadBalancerConfig(DevopsDeployStageTestLoadBalancerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTestLoadBalancerConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTimeouts"></a>

```csharp
private void PutTimeouts(DevopsDeployStageTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a>

---

##### `PutWaitCriteria` <a name="PutWaitCriteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putWaitCriteria"></a>

```csharp
private void PutWaitCriteria(DevopsDeployStageWaitCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putWaitCriteria.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a>

---

##### `ResetApprovalPolicy` <a name="ResetApprovalPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetApprovalPolicy"></a>

```csharp
private void ResetApprovalPolicy()
```

##### `ResetAreHooksEnabled` <a name="ResetAreHooksEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetAreHooksEnabled"></a>

```csharp
private void ResetAreHooksEnabled()
```

##### `ResetBlueBackendIps` <a name="ResetBlueBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetBlueBackendIps"></a>

```csharp
private void ResetBlueBackendIps()
```

##### `ResetBlueGreenStrategy` <a name="ResetBlueGreenStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetBlueGreenStrategy"></a>

```csharp
private void ResetBlueGreenStrategy()
```

##### `ResetCanaryStrategy` <a name="ResetCanaryStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetCanaryStrategy"></a>

```csharp
private void ResetCanaryStrategy()
```

##### `ResetCommandSpecDeployArtifactId` <a name="ResetCommandSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetCommandSpecDeployArtifactId"></a>

```csharp
private void ResetCommandSpecDeployArtifactId()
```

##### `ResetComputeInstanceGroupBlueGreenDeploymentDeployStageId` <a name="ResetComputeInstanceGroupBlueGreenDeploymentDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupBlueGreenDeploymentDeployStageId"></a>

```csharp
private void ResetComputeInstanceGroupBlueGreenDeploymentDeployStageId()
```

##### `ResetComputeInstanceGroupCanaryDeployStageId` <a name="ResetComputeInstanceGroupCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupCanaryDeployStageId"></a>

```csharp
private void ResetComputeInstanceGroupCanaryDeployStageId()
```

##### `ResetComputeInstanceGroupCanaryTrafficShiftDeployStageId` <a name="ResetComputeInstanceGroupCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupCanaryTrafficShiftDeployStageId"></a>

```csharp
private void ResetComputeInstanceGroupCanaryTrafficShiftDeployStageId()
```

##### `ResetComputeInstanceGroupDeployEnvironmentId` <a name="ResetComputeInstanceGroupDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupDeployEnvironmentId"></a>

```csharp
private void ResetComputeInstanceGroupDeployEnvironmentId()
```

##### `ResetConfig` <a name="ResetConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetContainerConfig` <a name="ResetContainerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetContainerConfig"></a>

```csharp
private void ResetContainerConfig()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDeployArtifactId` <a name="ResetDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployArtifactId"></a>

```csharp
private void ResetDeployArtifactId()
```

##### `ResetDeployArtifactIds` <a name="ResetDeployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployArtifactIds"></a>

```csharp
private void ResetDeployArtifactIds()
```

##### `ResetDeployEnvironmentIdA` <a name="ResetDeployEnvironmentIdA" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployEnvironmentIdA"></a>

```csharp
private void ResetDeployEnvironmentIdA()
```

##### `ResetDeployEnvironmentIdB` <a name="ResetDeployEnvironmentIdB" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployEnvironmentIdB"></a>

```csharp
private void ResetDeployEnvironmentIdB()
```

##### `ResetDeploymentSpecDeployArtifactId` <a name="ResetDeploymentSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeploymentSpecDeployArtifactId"></a>

```csharp
private void ResetDeploymentSpecDeployArtifactId()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDockerImageDeployArtifactId` <a name="ResetDockerImageDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDockerImageDeployArtifactId"></a>

```csharp
private void ResetDockerImageDeployArtifactId()
```

##### `ResetFailurePolicy` <a name="ResetFailurePolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFailurePolicy"></a>

```csharp
private void ResetFailurePolicy()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetFunctionDeployEnvironmentId` <a name="ResetFunctionDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFunctionDeployEnvironmentId"></a>

```csharp
private void ResetFunctionDeployEnvironmentId()
```

##### `ResetFunctionTimeoutInSeconds` <a name="ResetFunctionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFunctionTimeoutInSeconds"></a>

```csharp
private void ResetFunctionTimeoutInSeconds()
```

##### `ResetGreenBackendIps` <a name="ResetGreenBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetGreenBackendIps"></a>

```csharp
private void ResetGreenBackendIps()
```

##### `ResetHelmChartDeployArtifactId` <a name="ResetHelmChartDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetHelmChartDeployArtifactId"></a>

```csharp
private void ResetHelmChartDeployArtifactId()
```

##### `ResetHelmCommandArtifactIds` <a name="ResetHelmCommandArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetHelmCommandArtifactIds"></a>

```csharp
private void ResetHelmCommandArtifactIds()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsAsync` <a name="ResetIsAsync" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsAsync"></a>

```csharp
private void ResetIsAsync()
```

##### `ResetIsDebugEnabled` <a name="ResetIsDebugEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsDebugEnabled"></a>

```csharp
private void ResetIsDebugEnabled()
```

##### `ResetIsForceEnabled` <a name="ResetIsForceEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsForceEnabled"></a>

```csharp
private void ResetIsForceEnabled()
```

##### `ResetIsUninstallOnStageDelete` <a name="ResetIsUninstallOnStageDelete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsUninstallOnStageDelete"></a>

```csharp
private void ResetIsUninstallOnStageDelete()
```

##### `ResetIsValidationEnabled` <a name="ResetIsValidationEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsValidationEnabled"></a>

```csharp
private void ResetIsValidationEnabled()
```

##### `ResetKubernetesManifestDeployArtifactIds` <a name="ResetKubernetesManifestDeployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetKubernetesManifestDeployArtifactIds"></a>

```csharp
private void ResetKubernetesManifestDeployArtifactIds()
```

##### `ResetLoadBalancerConfig` <a name="ResetLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetLoadBalancerConfig"></a>

```csharp
private void ResetLoadBalancerConfig()
```

##### `ResetMaxHistory` <a name="ResetMaxHistory" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetMaxHistory"></a>

```csharp
private void ResetMaxHistory()
```

##### `ResetMaxMemoryInMbs` <a name="ResetMaxMemoryInMbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetMaxMemoryInMbs"></a>

```csharp
private void ResetMaxMemoryInMbs()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOkeBlueGreenDeployStageId` <a name="ResetOkeBlueGreenDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeBlueGreenDeployStageId"></a>

```csharp
private void ResetOkeBlueGreenDeployStageId()
```

##### `ResetOkeCanaryDeployStageId` <a name="ResetOkeCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeCanaryDeployStageId"></a>

```csharp
private void ResetOkeCanaryDeployStageId()
```

##### `ResetOkeCanaryTrafficShiftDeployStageId` <a name="ResetOkeCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeCanaryTrafficShiftDeployStageId"></a>

```csharp
private void ResetOkeCanaryTrafficShiftDeployStageId()
```

##### `ResetOkeClusterDeployEnvironmentId` <a name="ResetOkeClusterDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeClusterDeployEnvironmentId"></a>

```csharp
private void ResetOkeClusterDeployEnvironmentId()
```

##### `ResetProductionLoadBalancerConfig` <a name="ResetProductionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetProductionLoadBalancerConfig"></a>

```csharp
private void ResetProductionLoadBalancerConfig()
```

##### `ResetPurpose` <a name="ResetPurpose" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetPurpose"></a>

```csharp
private void ResetPurpose()
```

##### `ResetReleaseName` <a name="ResetReleaseName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetReleaseName"></a>

```csharp
private void ResetReleaseName()
```

##### `ResetRollbackPolicy` <a name="ResetRollbackPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetRollbackPolicy"></a>

```csharp
private void ResetRollbackPolicy()
```

##### `ResetRolloutPolicy` <a name="ResetRolloutPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetRolloutPolicy"></a>

```csharp
private void ResetRolloutPolicy()
```

##### `ResetSetString` <a name="ResetSetString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetSetString"></a>

```csharp
private void ResetSetString()
```

##### `ResetSetValues` <a name="ResetSetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetSetValues"></a>

```csharp
private void ResetSetValues()
```

##### `ResetShouldCleanupOnFail` <a name="ResetShouldCleanupOnFail" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldCleanupOnFail"></a>

```csharp
private void ResetShouldCleanupOnFail()
```

##### `ResetShouldNotWait` <a name="ResetShouldNotWait" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldNotWait"></a>

```csharp
private void ResetShouldNotWait()
```

##### `ResetShouldResetValues` <a name="ResetShouldResetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldResetValues"></a>

```csharp
private void ResetShouldResetValues()
```

##### `ResetShouldReuseValues` <a name="ResetShouldReuseValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldReuseValues"></a>

```csharp
private void ResetShouldReuseValues()
```

##### `ResetShouldSkipCrds` <a name="ResetShouldSkipCrds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldSkipCrds"></a>

```csharp
private void ResetShouldSkipCrds()
```

##### `ResetShouldSkipRenderSubchartNotes` <a name="ResetShouldSkipRenderSubchartNotes" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldSkipRenderSubchartNotes"></a>

```csharp
private void ResetShouldSkipRenderSubchartNotes()
```

##### `ResetTestLoadBalancerConfig` <a name="ResetTestLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTestLoadBalancerConfig"></a>

```csharp
private void ResetTestLoadBalancerConfig()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTimeoutInSeconds"></a>

```csharp
private void ResetTimeoutInSeconds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTrafficShiftTarget` <a name="ResetTrafficShiftTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTrafficShiftTarget"></a>

```csharp
private void ResetTrafficShiftTarget()
```

##### `ResetValuesArtifactIds` <a name="ResetValuesArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetValuesArtifactIds"></a>

```csharp
private void ResetValuesArtifactIds()
```

##### `ResetWaitCriteria` <a name="ResetWaitCriteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetWaitCriteria"></a>

```csharp
private void ResetWaitCriteria()
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

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsDeployStage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsDeployStage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsDeployStage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DevopsDeployStage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DevopsDeployStage resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsDeployStage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsDeployStage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DevopsDeployStage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.approvalPolicy">ApprovalPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference">DevopsDeployStageApprovalPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueBackendIps">BlueBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference">DevopsDeployStageBlueBackendIpsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueGreenStrategy">BlueGreenStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference">DevopsDeployStageBlueGreenStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.canaryStrategy">CanaryStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference">DevopsDeployStageCanaryStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.containerConfig">ContainerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference">DevopsDeployStageContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStagePredecessorCollection">DeployStagePredecessorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference">DevopsDeployStageDeployStagePredecessorCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.failurePolicy">FailurePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference">DevopsDeployStageFailurePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.greenBackendIps">GreenBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference">DevopsDeployStageGreenBackendIpsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.loadBalancerConfig">LoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference">DevopsDeployStageLoadBalancerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.productionLoadBalancerConfig">ProductionLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference">DevopsDeployStageProductionLoadBalancerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rollbackPolicy">RollbackPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference">DevopsDeployStageRollbackPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rolloutPolicy">RolloutPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference">DevopsDeployStageRolloutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setString">SetString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference">DevopsDeployStageSetStringOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setValues">SetValues</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference">DevopsDeployStageSetValuesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.testLoadBalancerConfig">TestLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference">DevopsDeployStageTestLoadBalancerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference">DevopsDeployStageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.waitCriteria">WaitCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference">DevopsDeployStageWaitCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.approvalPolicyInput">ApprovalPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.areHooksEnabledInput">AreHooksEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueBackendIpsInput">BlueBackendIpsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueGreenStrategyInput">BlueGreenStrategyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.canaryStrategyInput">CanaryStrategyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.commandSpecDeployArtifactIdInput">CommandSpecDeployArtifactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupBlueGreenDeploymentDeployStageIdInput">ComputeInstanceGroupBlueGreenDeploymentDeployStageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryDeployStageIdInput">ComputeInstanceGroupCanaryDeployStageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryTrafficShiftDeployStageIdInput">ComputeInstanceGroupCanaryTrafficShiftDeployStageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupDeployEnvironmentIdInput">ComputeInstanceGroupDeployEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.configInput">ConfigInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.containerConfigInput">ContainerConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIdInput">DeployArtifactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIdsInput">DeployArtifactIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdAInput">DeployEnvironmentIdAInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdBInput">DeployEnvironmentIdBInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deploymentSpecDeployArtifactIdInput">DeploymentSpecDeployArtifactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployPipelineIdInput">DeployPipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStagePredecessorCollectionInput">DeployStagePredecessorCollectionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStageTypeInput">DeployStageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dockerImageDeployArtifactIdInput">DockerImageDeployArtifactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.failurePolicyInput">FailurePolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionDeployEnvironmentIdInput">FunctionDeployEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionTimeoutInSecondsInput">FunctionTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.greenBackendIpsInput">GreenBackendIpsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmChartDeployArtifactIdInput">HelmChartDeployArtifactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmCommandArtifactIdsInput">HelmCommandArtifactIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isAsyncInput">IsAsyncInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isDebugEnabledInput">IsDebugEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isForceEnabledInput">IsForceEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isUninstallOnStageDeleteInput">IsUninstallOnStageDeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isValidationEnabledInput">IsValidationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.kubernetesManifestDeployArtifactIdsInput">KubernetesManifestDeployArtifactIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.loadBalancerConfigInput">LoadBalancerConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxHistoryInput">MaxHistoryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxMemoryInMbsInput">MaxMemoryInMbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeBlueGreenDeployStageIdInput">OkeBlueGreenDeployStageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryDeployStageIdInput">OkeCanaryDeployStageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryTrafficShiftDeployStageIdInput">OkeCanaryTrafficShiftDeployStageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeClusterDeployEnvironmentIdInput">OkeClusterDeployEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.productionLoadBalancerConfigInput">ProductionLoadBalancerConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.purposeInput">PurposeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.releaseNameInput">ReleaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rollbackPolicyInput">RollbackPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rolloutPolicyInput">RolloutPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setStringInput">SetStringInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setValuesInput">SetValuesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldCleanupOnFailInput">ShouldCleanupOnFailInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldNotWaitInput">ShouldNotWaitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldResetValuesInput">ShouldResetValuesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldReuseValuesInput">ShouldReuseValuesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipCrdsInput">ShouldSkipCrdsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipRenderSubchartNotesInput">ShouldSkipRenderSubchartNotesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.testLoadBalancerConfigInput">TestLoadBalancerConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.trafficShiftTargetInput">TrafficShiftTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.valuesArtifactIdsInput">ValuesArtifactIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.waitCriteriaInput">WaitCriteriaInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.areHooksEnabled">AreHooksEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.commandSpecDeployArtifactId">CommandSpecDeployArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupBlueGreenDeploymentDeployStageId">ComputeInstanceGroupBlueGreenDeploymentDeployStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryDeployStageId">ComputeInstanceGroupCanaryDeployStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryTrafficShiftDeployStageId">ComputeInstanceGroupCanaryTrafficShiftDeployStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupDeployEnvironmentId">ComputeInstanceGroupDeployEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.config">Config</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactId">DeployArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIds">DeployArtifactIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdA">DeployEnvironmentIdA</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdB">DeployEnvironmentIdB</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deploymentSpecDeployArtifactId">DeploymentSpecDeployArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployPipelineId">DeployPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStageType">DeployStageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dockerImageDeployArtifactId">DockerImageDeployArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionDeployEnvironmentId">FunctionDeployEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionTimeoutInSeconds">FunctionTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmChartDeployArtifactId">HelmChartDeployArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmCommandArtifactIds">HelmCommandArtifactIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isAsync">IsAsync</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isDebugEnabled">IsDebugEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isForceEnabled">IsForceEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isUninstallOnStageDelete">IsUninstallOnStageDelete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isValidationEnabled">IsValidationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.kubernetesManifestDeployArtifactIds">KubernetesManifestDeployArtifactIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxHistory">MaxHistory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxMemoryInMbs">MaxMemoryInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeBlueGreenDeployStageId">OkeBlueGreenDeployStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryDeployStageId">OkeCanaryDeployStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryTrafficShiftDeployStageId">OkeCanaryTrafficShiftDeployStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeClusterDeployEnvironmentId">OkeClusterDeployEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.purpose">Purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.releaseName">ReleaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldCleanupOnFail">ShouldCleanupOnFail</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldNotWait">ShouldNotWait</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldResetValues">ShouldResetValues</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldReuseValues">ShouldReuseValues</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipCrds">ShouldSkipCrds</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipRenderSubchartNotes">ShouldSkipRenderSubchartNotes</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.trafficShiftTarget">TrafficShiftTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.valuesArtifactIds">ValuesArtifactIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApprovalPolicy`<sup>Required</sup> <a name="ApprovalPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.approvalPolicy"></a>

```csharp
public DevopsDeployStageApprovalPolicyOutputReference ApprovalPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference">DevopsDeployStageApprovalPolicyOutputReference</a>

---

##### `BlueBackendIps`<sup>Required</sup> <a name="BlueBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueBackendIps"></a>

```csharp
public DevopsDeployStageBlueBackendIpsOutputReference BlueBackendIps { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference">DevopsDeployStageBlueBackendIpsOutputReference</a>

---

##### `BlueGreenStrategy`<sup>Required</sup> <a name="BlueGreenStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueGreenStrategy"></a>

```csharp
public DevopsDeployStageBlueGreenStrategyOutputReference BlueGreenStrategy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference">DevopsDeployStageBlueGreenStrategyOutputReference</a>

---

##### `CanaryStrategy`<sup>Required</sup> <a name="CanaryStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.canaryStrategy"></a>

```csharp
public DevopsDeployStageCanaryStrategyOutputReference CanaryStrategy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference">DevopsDeployStageCanaryStrategyOutputReference</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ContainerConfig`<sup>Required</sup> <a name="ContainerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.containerConfig"></a>

```csharp
public DevopsDeployStageContainerConfigOutputReference ContainerConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference">DevopsDeployStageContainerConfigOutputReference</a>

---

##### `DeployStagePredecessorCollection`<sup>Required</sup> <a name="DeployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStagePredecessorCollection"></a>

```csharp
public DevopsDeployStageDeployStagePredecessorCollectionOutputReference DeployStagePredecessorCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference">DevopsDeployStageDeployStagePredecessorCollectionOutputReference</a>

---

##### `FailurePolicy`<sup>Required</sup> <a name="FailurePolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.failurePolicy"></a>

```csharp
public DevopsDeployStageFailurePolicyOutputReference FailurePolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference">DevopsDeployStageFailurePolicyOutputReference</a>

---

##### `GreenBackendIps`<sup>Required</sup> <a name="GreenBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.greenBackendIps"></a>

```csharp
public DevopsDeployStageGreenBackendIpsOutputReference GreenBackendIps { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference">DevopsDeployStageGreenBackendIpsOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LoadBalancerConfig`<sup>Required</sup> <a name="LoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.loadBalancerConfig"></a>

```csharp
public DevopsDeployStageLoadBalancerConfigOutputReference LoadBalancerConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference">DevopsDeployStageLoadBalancerConfigOutputReference</a>

---

##### `ProductionLoadBalancerConfig`<sup>Required</sup> <a name="ProductionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.productionLoadBalancerConfig"></a>

```csharp
public DevopsDeployStageProductionLoadBalancerConfigOutputReference ProductionLoadBalancerConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference">DevopsDeployStageProductionLoadBalancerConfigOutputReference</a>

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `RollbackPolicy`<sup>Required</sup> <a name="RollbackPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rollbackPolicy"></a>

```csharp
public DevopsDeployStageRollbackPolicyOutputReference RollbackPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference">DevopsDeployStageRollbackPolicyOutputReference</a>

---

##### `RolloutPolicy`<sup>Required</sup> <a name="RolloutPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rolloutPolicy"></a>

```csharp
public DevopsDeployStageRolloutPolicyOutputReference RolloutPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference">DevopsDeployStageRolloutPolicyOutputReference</a>

---

##### `SetString`<sup>Required</sup> <a name="SetString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setString"></a>

```csharp
public DevopsDeployStageSetStringOutputReference SetString { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference">DevopsDeployStageSetStringOutputReference</a>

---

##### `SetValues`<sup>Required</sup> <a name="SetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setValues"></a>

```csharp
public DevopsDeployStageSetValuesOutputReference SetValues { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference">DevopsDeployStageSetValuesOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TestLoadBalancerConfig`<sup>Required</sup> <a name="TestLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.testLoadBalancerConfig"></a>

```csharp
public DevopsDeployStageTestLoadBalancerConfigOutputReference TestLoadBalancerConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference">DevopsDeployStageTestLoadBalancerConfigOutputReference</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeouts"></a>

```csharp
public DevopsDeployStageTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference">DevopsDeployStageTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `WaitCriteria`<sup>Required</sup> <a name="WaitCriteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.waitCriteria"></a>

```csharp
public DevopsDeployStageWaitCriteriaOutputReference WaitCriteria { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference">DevopsDeployStageWaitCriteriaOutputReference</a>

---

##### `ApprovalPolicyInput`<sup>Optional</sup> <a name="ApprovalPolicyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.approvalPolicyInput"></a>

```csharp
public DevopsDeployStageApprovalPolicy ApprovalPolicyInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a>

---

##### `AreHooksEnabledInput`<sup>Optional</sup> <a name="AreHooksEnabledInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.areHooksEnabledInput"></a>

```csharp
public object AreHooksEnabledInput { get; }
```

- *Type:* object

---

##### `BlueBackendIpsInput`<sup>Optional</sup> <a name="BlueBackendIpsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueBackendIpsInput"></a>

```csharp
public DevopsDeployStageBlueBackendIps BlueBackendIpsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a>

---

##### `BlueGreenStrategyInput`<sup>Optional</sup> <a name="BlueGreenStrategyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueGreenStrategyInput"></a>

```csharp
public DevopsDeployStageBlueGreenStrategy BlueGreenStrategyInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a>

---

##### `CanaryStrategyInput`<sup>Optional</sup> <a name="CanaryStrategyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.canaryStrategyInput"></a>

```csharp
public DevopsDeployStageCanaryStrategy CanaryStrategyInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a>

---

##### `CommandSpecDeployArtifactIdInput`<sup>Optional</sup> <a name="CommandSpecDeployArtifactIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.commandSpecDeployArtifactIdInput"></a>

```csharp
public string CommandSpecDeployArtifactIdInput { get; }
```

- *Type:* string

---

##### `ComputeInstanceGroupBlueGreenDeploymentDeployStageIdInput`<sup>Optional</sup> <a name="ComputeInstanceGroupBlueGreenDeploymentDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupBlueGreenDeploymentDeployStageIdInput"></a>

```csharp
public string ComputeInstanceGroupBlueGreenDeploymentDeployStageIdInput { get; }
```

- *Type:* string

---

##### `ComputeInstanceGroupCanaryDeployStageIdInput`<sup>Optional</sup> <a name="ComputeInstanceGroupCanaryDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryDeployStageIdInput"></a>

```csharp
public string ComputeInstanceGroupCanaryDeployStageIdInput { get; }
```

- *Type:* string

---

##### `ComputeInstanceGroupCanaryTrafficShiftDeployStageIdInput`<sup>Optional</sup> <a name="ComputeInstanceGroupCanaryTrafficShiftDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryTrafficShiftDeployStageIdInput"></a>

```csharp
public string ComputeInstanceGroupCanaryTrafficShiftDeployStageIdInput { get; }
```

- *Type:* string

---

##### `ComputeInstanceGroupDeployEnvironmentIdInput`<sup>Optional</sup> <a name="ComputeInstanceGroupDeployEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupDeployEnvironmentIdInput"></a>

```csharp
public string ComputeInstanceGroupDeployEnvironmentIdInput { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.configInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConfigInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ContainerConfigInput`<sup>Optional</sup> <a name="ContainerConfigInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.containerConfigInput"></a>

```csharp
public DevopsDeployStageContainerConfig ContainerConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeployArtifactIdInput`<sup>Optional</sup> <a name="DeployArtifactIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIdInput"></a>

```csharp
public string DeployArtifactIdInput { get; }
```

- *Type:* string

---

##### `DeployArtifactIdsInput`<sup>Optional</sup> <a name="DeployArtifactIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIdsInput"></a>

```csharp
public string[] DeployArtifactIdsInput { get; }
```

- *Type:* string[]

---

##### `DeployEnvironmentIdAInput`<sup>Optional</sup> <a name="DeployEnvironmentIdAInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdAInput"></a>

```csharp
public string DeployEnvironmentIdAInput { get; }
```

- *Type:* string

---

##### `DeployEnvironmentIdBInput`<sup>Optional</sup> <a name="DeployEnvironmentIdBInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdBInput"></a>

```csharp
public string DeployEnvironmentIdBInput { get; }
```

- *Type:* string

---

##### `DeploymentSpecDeployArtifactIdInput`<sup>Optional</sup> <a name="DeploymentSpecDeployArtifactIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deploymentSpecDeployArtifactIdInput"></a>

```csharp
public string DeploymentSpecDeployArtifactIdInput { get; }
```

- *Type:* string

---

##### `DeployPipelineIdInput`<sup>Optional</sup> <a name="DeployPipelineIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployPipelineIdInput"></a>

```csharp
public string DeployPipelineIdInput { get; }
```

- *Type:* string

---

##### `DeployStagePredecessorCollectionInput`<sup>Optional</sup> <a name="DeployStagePredecessorCollectionInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStagePredecessorCollectionInput"></a>

```csharp
public DevopsDeployStageDeployStagePredecessorCollection DeployStagePredecessorCollectionInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a>

---

##### `DeployStageTypeInput`<sup>Optional</sup> <a name="DeployStageTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStageTypeInput"></a>

```csharp
public string DeployStageTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DockerImageDeployArtifactIdInput`<sup>Optional</sup> <a name="DockerImageDeployArtifactIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dockerImageDeployArtifactIdInput"></a>

```csharp
public string DockerImageDeployArtifactIdInput { get; }
```

- *Type:* string

---

##### `FailurePolicyInput`<sup>Optional</sup> <a name="FailurePolicyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.failurePolicyInput"></a>

```csharp
public DevopsDeployStageFailurePolicy FailurePolicyInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FunctionDeployEnvironmentIdInput`<sup>Optional</sup> <a name="FunctionDeployEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionDeployEnvironmentIdInput"></a>

```csharp
public string FunctionDeployEnvironmentIdInput { get; }
```

- *Type:* string

---

##### `FunctionTimeoutInSecondsInput`<sup>Optional</sup> <a name="FunctionTimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionTimeoutInSecondsInput"></a>

```csharp
public double FunctionTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `GreenBackendIpsInput`<sup>Optional</sup> <a name="GreenBackendIpsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.greenBackendIpsInput"></a>

```csharp
public DevopsDeployStageGreenBackendIps GreenBackendIpsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a>

---

##### `HelmChartDeployArtifactIdInput`<sup>Optional</sup> <a name="HelmChartDeployArtifactIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmChartDeployArtifactIdInput"></a>

```csharp
public string HelmChartDeployArtifactIdInput { get; }
```

- *Type:* string

---

##### `HelmCommandArtifactIdsInput`<sup>Optional</sup> <a name="HelmCommandArtifactIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmCommandArtifactIdsInput"></a>

```csharp
public string[] HelmCommandArtifactIdsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsAsyncInput`<sup>Optional</sup> <a name="IsAsyncInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isAsyncInput"></a>

```csharp
public object IsAsyncInput { get; }
```

- *Type:* object

---

##### `IsDebugEnabledInput`<sup>Optional</sup> <a name="IsDebugEnabledInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isDebugEnabledInput"></a>

```csharp
public object IsDebugEnabledInput { get; }
```

- *Type:* object

---

##### `IsForceEnabledInput`<sup>Optional</sup> <a name="IsForceEnabledInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isForceEnabledInput"></a>

```csharp
public object IsForceEnabledInput { get; }
```

- *Type:* object

---

##### `IsUninstallOnStageDeleteInput`<sup>Optional</sup> <a name="IsUninstallOnStageDeleteInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isUninstallOnStageDeleteInput"></a>

```csharp
public object IsUninstallOnStageDeleteInput { get; }
```

- *Type:* object

---

##### `IsValidationEnabledInput`<sup>Optional</sup> <a name="IsValidationEnabledInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isValidationEnabledInput"></a>

```csharp
public object IsValidationEnabledInput { get; }
```

- *Type:* object

---

##### `KubernetesManifestDeployArtifactIdsInput`<sup>Optional</sup> <a name="KubernetesManifestDeployArtifactIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.kubernetesManifestDeployArtifactIdsInput"></a>

```csharp
public string[] KubernetesManifestDeployArtifactIdsInput { get; }
```

- *Type:* string[]

---

##### `LoadBalancerConfigInput`<sup>Optional</sup> <a name="LoadBalancerConfigInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.loadBalancerConfigInput"></a>

```csharp
public DevopsDeployStageLoadBalancerConfig LoadBalancerConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a>

---

##### `MaxHistoryInput`<sup>Optional</sup> <a name="MaxHistoryInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxHistoryInput"></a>

```csharp
public double MaxHistoryInput { get; }
```

- *Type:* double

---

##### `MaxMemoryInMbsInput`<sup>Optional</sup> <a name="MaxMemoryInMbsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxMemoryInMbsInput"></a>

```csharp
public string MaxMemoryInMbsInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OkeBlueGreenDeployStageIdInput`<sup>Optional</sup> <a name="OkeBlueGreenDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeBlueGreenDeployStageIdInput"></a>

```csharp
public string OkeBlueGreenDeployStageIdInput { get; }
```

- *Type:* string

---

##### `OkeCanaryDeployStageIdInput`<sup>Optional</sup> <a name="OkeCanaryDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryDeployStageIdInput"></a>

```csharp
public string OkeCanaryDeployStageIdInput { get; }
```

- *Type:* string

---

##### `OkeCanaryTrafficShiftDeployStageIdInput`<sup>Optional</sup> <a name="OkeCanaryTrafficShiftDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryTrafficShiftDeployStageIdInput"></a>

```csharp
public string OkeCanaryTrafficShiftDeployStageIdInput { get; }
```

- *Type:* string

---

##### `OkeClusterDeployEnvironmentIdInput`<sup>Optional</sup> <a name="OkeClusterDeployEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeClusterDeployEnvironmentIdInput"></a>

```csharp
public string OkeClusterDeployEnvironmentIdInput { get; }
```

- *Type:* string

---

##### `ProductionLoadBalancerConfigInput`<sup>Optional</sup> <a name="ProductionLoadBalancerConfigInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.productionLoadBalancerConfigInput"></a>

```csharp
public DevopsDeployStageProductionLoadBalancerConfig ProductionLoadBalancerConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a>

---

##### `PurposeInput`<sup>Optional</sup> <a name="PurposeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.purposeInput"></a>

```csharp
public string PurposeInput { get; }
```

- *Type:* string

---

##### `ReleaseNameInput`<sup>Optional</sup> <a name="ReleaseNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.releaseNameInput"></a>

```csharp
public string ReleaseNameInput { get; }
```

- *Type:* string

---

##### `RollbackPolicyInput`<sup>Optional</sup> <a name="RollbackPolicyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rollbackPolicyInput"></a>

```csharp
public DevopsDeployStageRollbackPolicy RollbackPolicyInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a>

---

##### `RolloutPolicyInput`<sup>Optional</sup> <a name="RolloutPolicyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rolloutPolicyInput"></a>

```csharp
public DevopsDeployStageRolloutPolicy RolloutPolicyInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a>

---

##### `SetStringInput`<sup>Optional</sup> <a name="SetStringInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setStringInput"></a>

```csharp
public DevopsDeployStageSetString SetStringInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a>

---

##### `SetValuesInput`<sup>Optional</sup> <a name="SetValuesInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setValuesInput"></a>

```csharp
public DevopsDeployStageSetValues SetValuesInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a>

---

##### `ShouldCleanupOnFailInput`<sup>Optional</sup> <a name="ShouldCleanupOnFailInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldCleanupOnFailInput"></a>

```csharp
public object ShouldCleanupOnFailInput { get; }
```

- *Type:* object

---

##### `ShouldNotWaitInput`<sup>Optional</sup> <a name="ShouldNotWaitInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldNotWaitInput"></a>

```csharp
public object ShouldNotWaitInput { get; }
```

- *Type:* object

---

##### `ShouldResetValuesInput`<sup>Optional</sup> <a name="ShouldResetValuesInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldResetValuesInput"></a>

```csharp
public object ShouldResetValuesInput { get; }
```

- *Type:* object

---

##### `ShouldReuseValuesInput`<sup>Optional</sup> <a name="ShouldReuseValuesInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldReuseValuesInput"></a>

```csharp
public object ShouldReuseValuesInput { get; }
```

- *Type:* object

---

##### `ShouldSkipCrdsInput`<sup>Optional</sup> <a name="ShouldSkipCrdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipCrdsInput"></a>

```csharp
public object ShouldSkipCrdsInput { get; }
```

- *Type:* object

---

##### `ShouldSkipRenderSubchartNotesInput`<sup>Optional</sup> <a name="ShouldSkipRenderSubchartNotesInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipRenderSubchartNotesInput"></a>

```csharp
public object ShouldSkipRenderSubchartNotesInput { get; }
```

- *Type:* object

---

##### `TestLoadBalancerConfigInput`<sup>Optional</sup> <a name="TestLoadBalancerConfigInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.testLoadBalancerConfigInput"></a>

```csharp
public DevopsDeployStageTestLoadBalancerConfig TestLoadBalancerConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a>

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutInSecondsInput"></a>

```csharp
public double TimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TrafficShiftTargetInput`<sup>Optional</sup> <a name="TrafficShiftTargetInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.trafficShiftTargetInput"></a>

```csharp
public string TrafficShiftTargetInput { get; }
```

- *Type:* string

---

##### `ValuesArtifactIdsInput`<sup>Optional</sup> <a name="ValuesArtifactIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.valuesArtifactIdsInput"></a>

```csharp
public string[] ValuesArtifactIdsInput { get; }
```

- *Type:* string[]

---

##### `WaitCriteriaInput`<sup>Optional</sup> <a name="WaitCriteriaInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.waitCriteriaInput"></a>

```csharp
public DevopsDeployStageWaitCriteria WaitCriteriaInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a>

---

##### `AreHooksEnabled`<sup>Required</sup> <a name="AreHooksEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.areHooksEnabled"></a>

```csharp
public object AreHooksEnabled { get; }
```

- *Type:* object

---

##### `CommandSpecDeployArtifactId`<sup>Required</sup> <a name="CommandSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.commandSpecDeployArtifactId"></a>

```csharp
public string CommandSpecDeployArtifactId { get; }
```

- *Type:* string

---

##### `ComputeInstanceGroupBlueGreenDeploymentDeployStageId`<sup>Required</sup> <a name="ComputeInstanceGroupBlueGreenDeploymentDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupBlueGreenDeploymentDeployStageId"></a>

```csharp
public string ComputeInstanceGroupBlueGreenDeploymentDeployStageId { get; }
```

- *Type:* string

---

##### `ComputeInstanceGroupCanaryDeployStageId`<sup>Required</sup> <a name="ComputeInstanceGroupCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryDeployStageId"></a>

```csharp
public string ComputeInstanceGroupCanaryDeployStageId { get; }
```

- *Type:* string

---

##### `ComputeInstanceGroupCanaryTrafficShiftDeployStageId`<sup>Required</sup> <a name="ComputeInstanceGroupCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryTrafficShiftDeployStageId"></a>

```csharp
public string ComputeInstanceGroupCanaryTrafficShiftDeployStageId { get; }
```

- *Type:* string

---

##### `ComputeInstanceGroupDeployEnvironmentId`<sup>Required</sup> <a name="ComputeInstanceGroupDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupDeployEnvironmentId"></a>

```csharp
public string ComputeInstanceGroupDeployEnvironmentId { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.config"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Config { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeployArtifactId`<sup>Required</sup> <a name="DeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactId"></a>

```csharp
public string DeployArtifactId { get; }
```

- *Type:* string

---

##### `DeployArtifactIds`<sup>Required</sup> <a name="DeployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIds"></a>

```csharp
public string[] DeployArtifactIds { get; }
```

- *Type:* string[]

---

##### `DeployEnvironmentIdA`<sup>Required</sup> <a name="DeployEnvironmentIdA" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdA"></a>

```csharp
public string DeployEnvironmentIdA { get; }
```

- *Type:* string

---

##### `DeployEnvironmentIdB`<sup>Required</sup> <a name="DeployEnvironmentIdB" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdB"></a>

```csharp
public string DeployEnvironmentIdB { get; }
```

- *Type:* string

---

##### `DeploymentSpecDeployArtifactId`<sup>Required</sup> <a name="DeploymentSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deploymentSpecDeployArtifactId"></a>

```csharp
public string DeploymentSpecDeployArtifactId { get; }
```

- *Type:* string

---

##### `DeployPipelineId`<sup>Required</sup> <a name="DeployPipelineId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployPipelineId"></a>

```csharp
public string DeployPipelineId { get; }
```

- *Type:* string

---

##### `DeployStageType`<sup>Required</sup> <a name="DeployStageType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStageType"></a>

```csharp
public string DeployStageType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DockerImageDeployArtifactId`<sup>Required</sup> <a name="DockerImageDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dockerImageDeployArtifactId"></a>

```csharp
public string DockerImageDeployArtifactId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FunctionDeployEnvironmentId`<sup>Required</sup> <a name="FunctionDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionDeployEnvironmentId"></a>

```csharp
public string FunctionDeployEnvironmentId { get; }
```

- *Type:* string

---

##### `FunctionTimeoutInSeconds`<sup>Required</sup> <a name="FunctionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionTimeoutInSeconds"></a>

```csharp
public double FunctionTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `HelmChartDeployArtifactId`<sup>Required</sup> <a name="HelmChartDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmChartDeployArtifactId"></a>

```csharp
public string HelmChartDeployArtifactId { get; }
```

- *Type:* string

---

##### `HelmCommandArtifactIds`<sup>Required</sup> <a name="HelmCommandArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmCommandArtifactIds"></a>

```csharp
public string[] HelmCommandArtifactIds { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAsync`<sup>Required</sup> <a name="IsAsync" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isAsync"></a>

```csharp
public object IsAsync { get; }
```

- *Type:* object

---

##### `IsDebugEnabled`<sup>Required</sup> <a name="IsDebugEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isDebugEnabled"></a>

```csharp
public object IsDebugEnabled { get; }
```

- *Type:* object

---

##### `IsForceEnabled`<sup>Required</sup> <a name="IsForceEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isForceEnabled"></a>

```csharp
public object IsForceEnabled { get; }
```

- *Type:* object

---

##### `IsUninstallOnStageDelete`<sup>Required</sup> <a name="IsUninstallOnStageDelete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isUninstallOnStageDelete"></a>

```csharp
public object IsUninstallOnStageDelete { get; }
```

- *Type:* object

---

##### `IsValidationEnabled`<sup>Required</sup> <a name="IsValidationEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isValidationEnabled"></a>

```csharp
public object IsValidationEnabled { get; }
```

- *Type:* object

---

##### `KubernetesManifestDeployArtifactIds`<sup>Required</sup> <a name="KubernetesManifestDeployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.kubernetesManifestDeployArtifactIds"></a>

```csharp
public string[] KubernetesManifestDeployArtifactIds { get; }
```

- *Type:* string[]

---

##### `MaxHistory`<sup>Required</sup> <a name="MaxHistory" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxHistory"></a>

```csharp
public double MaxHistory { get; }
```

- *Type:* double

---

##### `MaxMemoryInMbs`<sup>Required</sup> <a name="MaxMemoryInMbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxMemoryInMbs"></a>

```csharp
public string MaxMemoryInMbs { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OkeBlueGreenDeployStageId`<sup>Required</sup> <a name="OkeBlueGreenDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeBlueGreenDeployStageId"></a>

```csharp
public string OkeBlueGreenDeployStageId { get; }
```

- *Type:* string

---

##### `OkeCanaryDeployStageId`<sup>Required</sup> <a name="OkeCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryDeployStageId"></a>

```csharp
public string OkeCanaryDeployStageId { get; }
```

- *Type:* string

---

##### `OkeCanaryTrafficShiftDeployStageId`<sup>Required</sup> <a name="OkeCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryTrafficShiftDeployStageId"></a>

```csharp
public string OkeCanaryTrafficShiftDeployStageId { get; }
```

- *Type:* string

---

##### `OkeClusterDeployEnvironmentId`<sup>Required</sup> <a name="OkeClusterDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeClusterDeployEnvironmentId"></a>

```csharp
public string OkeClusterDeployEnvironmentId { get; }
```

- *Type:* string

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.purpose"></a>

```csharp
public string Purpose { get; }
```

- *Type:* string

---

##### `ReleaseName`<sup>Required</sup> <a name="ReleaseName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.releaseName"></a>

```csharp
public string ReleaseName { get; }
```

- *Type:* string

---

##### `ShouldCleanupOnFail`<sup>Required</sup> <a name="ShouldCleanupOnFail" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldCleanupOnFail"></a>

```csharp
public object ShouldCleanupOnFail { get; }
```

- *Type:* object

---

##### `ShouldNotWait`<sup>Required</sup> <a name="ShouldNotWait" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldNotWait"></a>

```csharp
public object ShouldNotWait { get; }
```

- *Type:* object

---

##### `ShouldResetValues`<sup>Required</sup> <a name="ShouldResetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldResetValues"></a>

```csharp
public object ShouldResetValues { get; }
```

- *Type:* object

---

##### `ShouldReuseValues`<sup>Required</sup> <a name="ShouldReuseValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldReuseValues"></a>

```csharp
public object ShouldReuseValues { get; }
```

- *Type:* object

---

##### `ShouldSkipCrds`<sup>Required</sup> <a name="ShouldSkipCrds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipCrds"></a>

```csharp
public object ShouldSkipCrds { get; }
```

- *Type:* object

---

##### `ShouldSkipRenderSubchartNotes`<sup>Required</sup> <a name="ShouldSkipRenderSubchartNotes" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipRenderSubchartNotes"></a>

```csharp
public object ShouldSkipRenderSubchartNotes { get; }
```

- *Type:* object

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `TrafficShiftTarget`<sup>Required</sup> <a name="TrafficShiftTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.trafficShiftTarget"></a>

```csharp
public string TrafficShiftTarget { get; }
```

- *Type:* string

---

##### `ValuesArtifactIds`<sup>Required</sup> <a name="ValuesArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.valuesArtifactIds"></a>

```csharp
public string[] ValuesArtifactIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsDeployStageApprovalPolicy <a name="DevopsDeployStageApprovalPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageApprovalPolicy {
    string ApprovalPolicyType,
    double NumberOfApprovalsRequired
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.property.approvalPolicyType">ApprovalPolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#approval_policy_type DevopsDeployStage#approval_policy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.property.numberOfApprovalsRequired">NumberOfApprovalsRequired</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#number_of_approvals_required DevopsDeployStage#number_of_approvals_required}. |

---

##### `ApprovalPolicyType`<sup>Required</sup> <a name="ApprovalPolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.property.approvalPolicyType"></a>

```csharp
public string ApprovalPolicyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#approval_policy_type DevopsDeployStage#approval_policy_type}.

---

##### `NumberOfApprovalsRequired`<sup>Required</sup> <a name="NumberOfApprovalsRequired" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.property.numberOfApprovalsRequired"></a>

```csharp
public double NumberOfApprovalsRequired { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#number_of_approvals_required DevopsDeployStage#number_of_approvals_required}.

---

### DevopsDeployStageBlueBackendIps <a name="DevopsDeployStageBlueBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageBlueBackendIps {
    string[] Items = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps.property.items">Items</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps.property.items"></a>

```csharp
public string[] Items { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}.

---

### DevopsDeployStageBlueGreenStrategy <a name="DevopsDeployStageBlueGreenStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageBlueGreenStrategy {
    string IngressName,
    string NamespaceA,
    string NamespaceB,
    string StrategyType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.ingressName">IngressName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.namespaceA">NamespaceA</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace_a DevopsDeployStage#namespace_a}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.namespaceB">NamespaceB</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace_b DevopsDeployStage#namespace_b}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.strategyType">StrategyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}. |

---

##### `IngressName`<sup>Required</sup> <a name="IngressName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.ingressName"></a>

```csharp
public string IngressName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}.

---

##### `NamespaceA`<sup>Required</sup> <a name="NamespaceA" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.namespaceA"></a>

```csharp
public string NamespaceA { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace_a DevopsDeployStage#namespace_a}.

---

##### `NamespaceB`<sup>Required</sup> <a name="NamespaceB" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.namespaceB"></a>

```csharp
public string NamespaceB { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace_b DevopsDeployStage#namespace_b}.

---

##### `StrategyType`<sup>Required</sup> <a name="StrategyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.strategyType"></a>

```csharp
public string StrategyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}.

---

### DevopsDeployStageCanaryStrategy <a name="DevopsDeployStageCanaryStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageCanaryStrategy {
    string IngressName,
    string Namespace,
    string StrategyType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.ingressName">IngressName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.strategyType">StrategyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}. |

---

##### `IngressName`<sup>Required</sup> <a name="IngressName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.ingressName"></a>

```csharp
public string IngressName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}.

---

##### `StrategyType`<sup>Required</sup> <a name="StrategyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.strategyType"></a>

```csharp
public string StrategyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}.

---

### DevopsDeployStageConfig <a name="DevopsDeployStageConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DeployPipelineId,
    DevopsDeployStageDeployStagePredecessorCollection DeployStagePredecessorCollection,
    string DeployStageType,
    DevopsDeployStageApprovalPolicy ApprovalPolicy = null,
    object AreHooksEnabled = null,
    DevopsDeployStageBlueBackendIps BlueBackendIps = null,
    DevopsDeployStageBlueGreenStrategy BlueGreenStrategy = null,
    DevopsDeployStageCanaryStrategy CanaryStrategy = null,
    string CommandSpecDeployArtifactId = null,
    string ComputeInstanceGroupBlueGreenDeploymentDeployStageId = null,
    string ComputeInstanceGroupCanaryDeployStageId = null,
    string ComputeInstanceGroupCanaryTrafficShiftDeployStageId = null,
    string ComputeInstanceGroupDeployEnvironmentId = null,
    System.Collections.Generic.IDictionary<string, string> Config = null,
    DevopsDeployStageContainerConfig ContainerConfig = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DeployArtifactId = null,
    string[] DeployArtifactIds = null,
    string DeployEnvironmentIdA = null,
    string DeployEnvironmentIdB = null,
    string DeploymentSpecDeployArtifactId = null,
    string Description = null,
    string DisplayName = null,
    string DockerImageDeployArtifactId = null,
    DevopsDeployStageFailurePolicy FailurePolicy = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string FunctionDeployEnvironmentId = null,
    double FunctionTimeoutInSeconds = null,
    DevopsDeployStageGreenBackendIps GreenBackendIps = null,
    string HelmChartDeployArtifactId = null,
    string[] HelmCommandArtifactIds = null,
    string Id = null,
    object IsAsync = null,
    object IsDebugEnabled = null,
    object IsForceEnabled = null,
    object IsUninstallOnStageDelete = null,
    object IsValidationEnabled = null,
    string[] KubernetesManifestDeployArtifactIds = null,
    DevopsDeployStageLoadBalancerConfig LoadBalancerConfig = null,
    double MaxHistory = null,
    string MaxMemoryInMbs = null,
    string Namespace = null,
    string OkeBlueGreenDeployStageId = null,
    string OkeCanaryDeployStageId = null,
    string OkeCanaryTrafficShiftDeployStageId = null,
    string OkeClusterDeployEnvironmentId = null,
    DevopsDeployStageProductionLoadBalancerConfig ProductionLoadBalancerConfig = null,
    string Purpose = null,
    string ReleaseName = null,
    DevopsDeployStageRollbackPolicy RollbackPolicy = null,
    DevopsDeployStageRolloutPolicy RolloutPolicy = null,
    DevopsDeployStageSetString SetString = null,
    DevopsDeployStageSetValues SetValues = null,
    object ShouldCleanupOnFail = null,
    object ShouldNotWait = null,
    object ShouldResetValues = null,
    object ShouldReuseValues = null,
    object ShouldSkipCrds = null,
    object ShouldSkipRenderSubchartNotes = null,
    DevopsDeployStageTestLoadBalancerConfig TestLoadBalancerConfig = null,
    double TimeoutInSeconds = null,
    DevopsDeployStageTimeouts Timeouts = null,
    string TrafficShiftTarget = null,
    string[] ValuesArtifactIds = null,
    DevopsDeployStageWaitCriteria WaitCriteria = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployPipelineId">DeployPipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_pipeline_id DevopsDeployStage#deploy_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployStagePredecessorCollection">DeployStagePredecessorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a></code> | deploy_stage_predecessor_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployStageType">DeployStageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_stage_type DevopsDeployStage#deploy_stage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.approvalPolicy">ApprovalPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a></code> | approval_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.areHooksEnabled">AreHooksEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#are_hooks_enabled DevopsDeployStage#are_hooks_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.blueBackendIps">BlueBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a></code> | blue_backend_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.blueGreenStrategy">BlueGreenStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a></code> | blue_green_strategy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.canaryStrategy">CanaryStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a></code> | canary_strategy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.commandSpecDeployArtifactId">CommandSpecDeployArtifactId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#command_spec_deploy_artifact_id DevopsDeployStage#command_spec_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupBlueGreenDeploymentDeployStageId">ComputeInstanceGroupBlueGreenDeploymentDeployStageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_blue_green_deployment_deploy_stage_id DevopsDeployStage#compute_instance_group_blue_green_deployment_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupCanaryDeployStageId">ComputeInstanceGroupCanaryDeployStageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupCanaryTrafficShiftDeployStageId">ComputeInstanceGroupCanaryTrafficShiftDeployStageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_traffic_shift_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_traffic_shift_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupDeployEnvironmentId">ComputeInstanceGroupDeployEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_deploy_environment_id DevopsDeployStage#compute_instance_group_deploy_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.config">Config</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#config DevopsDeployStage#config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.containerConfig">ContainerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a></code> | container_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#defined_tags DevopsDeployStage#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployArtifactId">DeployArtifactId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_id DevopsDeployStage#deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployArtifactIds">DeployArtifactIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_ids DevopsDeployStage#deploy_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployEnvironmentIdA">DeployEnvironmentIdA</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_a DevopsDeployStage#deploy_environment_id_a}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployEnvironmentIdB">DeployEnvironmentIdB</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_b DevopsDeployStage#deploy_environment_id_b}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deploymentSpecDeployArtifactId">DeploymentSpecDeployArtifactId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deployment_spec_deploy_artifact_id DevopsDeployStage#deployment_spec_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#description DevopsDeployStage#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#display_name DevopsDeployStage#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.dockerImageDeployArtifactId">DockerImageDeployArtifactId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#docker_image_deploy_artifact_id DevopsDeployStage#docker_image_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.failurePolicy">FailurePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a></code> | failure_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#freeform_tags DevopsDeployStage#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.functionDeployEnvironmentId">FunctionDeployEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_deploy_environment_id DevopsDeployStage#function_deploy_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.functionTimeoutInSeconds">FunctionTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_timeout_in_seconds DevopsDeployStage#function_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.greenBackendIps">GreenBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a></code> | green_backend_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.helmChartDeployArtifactId">HelmChartDeployArtifactId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_chart_deploy_artifact_id DevopsDeployStage#helm_chart_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.helmCommandArtifactIds">HelmCommandArtifactIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_command_artifact_ids DevopsDeployStage#helm_command_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isAsync">IsAsync</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_async DevopsDeployStage#is_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isDebugEnabled">IsDebugEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_debug_enabled DevopsDeployStage#is_debug_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isForceEnabled">IsForceEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_force_enabled DevopsDeployStage#is_force_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isUninstallOnStageDelete">IsUninstallOnStageDelete</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_uninstall_on_stage_delete DevopsDeployStage#is_uninstall_on_stage_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isValidationEnabled">IsValidationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_validation_enabled DevopsDeployStage#is_validation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.kubernetesManifestDeployArtifactIds">KubernetesManifestDeployArtifactIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#kubernetes_manifest_deploy_artifact_ids DevopsDeployStage#kubernetes_manifest_deploy_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.loadBalancerConfig">LoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a></code> | load_balancer_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.maxHistory">MaxHistory</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_history DevopsDeployStage#max_history}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.maxMemoryInMbs">MaxMemoryInMbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_memory_in_mbs DevopsDeployStage#max_memory_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeBlueGreenDeployStageId">OkeBlueGreenDeployStageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_blue_green_deploy_stage_id DevopsDeployStage#oke_blue_green_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeCanaryDeployStageId">OkeCanaryDeployStageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_deploy_stage_id DevopsDeployStage#oke_canary_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeCanaryTrafficShiftDeployStageId">OkeCanaryTrafficShiftDeployStageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_traffic_shift_deploy_stage_id DevopsDeployStage#oke_canary_traffic_shift_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeClusterDeployEnvironmentId">OkeClusterDeployEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_cluster_deploy_environment_id DevopsDeployStage#oke_cluster_deploy_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.productionLoadBalancerConfig">ProductionLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a></code> | production_load_balancer_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.purpose">Purpose</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#purpose DevopsDeployStage#purpose}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.releaseName">ReleaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#release_name DevopsDeployStage#release_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.rollbackPolicy">RollbackPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a></code> | rollback_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.rolloutPolicy">RolloutPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a></code> | rollout_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.setString">SetString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a></code> | set_string block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.setValues">SetValues</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a></code> | set_values block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldCleanupOnFail">ShouldCleanupOnFail</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_cleanup_on_fail DevopsDeployStage#should_cleanup_on_fail}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldNotWait">ShouldNotWait</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_not_wait DevopsDeployStage#should_not_wait}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldResetValues">ShouldResetValues</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reset_values DevopsDeployStage#should_reset_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldReuseValues">ShouldReuseValues</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reuse_values DevopsDeployStage#should_reuse_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldSkipCrds">ShouldSkipCrds</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_crds DevopsDeployStage#should_skip_crds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldSkipRenderSubchartNotes">ShouldSkipRenderSubchartNotes</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_render_subchart_notes DevopsDeployStage#should_skip_render_subchart_notes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.testLoadBalancerConfig">TestLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a></code> | test_load_balancer_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#timeout_in_seconds DevopsDeployStage#timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.trafficShiftTarget">TrafficShiftTarget</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#traffic_shift_target DevopsDeployStage#traffic_shift_target}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.valuesArtifactIds">ValuesArtifactIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#values_artifact_ids DevopsDeployStage#values_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.waitCriteria">WaitCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a></code> | wait_criteria block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DeployPipelineId`<sup>Required</sup> <a name="DeployPipelineId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployPipelineId"></a>

```csharp
public string DeployPipelineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_pipeline_id DevopsDeployStage#deploy_pipeline_id}.

---

##### `DeployStagePredecessorCollection`<sup>Required</sup> <a name="DeployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployStagePredecessorCollection"></a>

```csharp
public DevopsDeployStageDeployStagePredecessorCollection DeployStagePredecessorCollection { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a>

deploy_stage_predecessor_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_stage_predecessor_collection DevopsDeployStage#deploy_stage_predecessor_collection}

---

##### `DeployStageType`<sup>Required</sup> <a name="DeployStageType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployStageType"></a>

```csharp
public string DeployStageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_stage_type DevopsDeployStage#deploy_stage_type}.

---

##### `ApprovalPolicy`<sup>Optional</sup> <a name="ApprovalPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.approvalPolicy"></a>

```csharp
public DevopsDeployStageApprovalPolicy ApprovalPolicy { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a>

approval_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#approval_policy DevopsDeployStage#approval_policy}

---

##### `AreHooksEnabled`<sup>Optional</sup> <a name="AreHooksEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.areHooksEnabled"></a>

```csharp
public object AreHooksEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#are_hooks_enabled DevopsDeployStage#are_hooks_enabled}.

---

##### `BlueBackendIps`<sup>Optional</sup> <a name="BlueBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.blueBackendIps"></a>

```csharp
public DevopsDeployStageBlueBackendIps BlueBackendIps { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a>

blue_backend_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#blue_backend_ips DevopsDeployStage#blue_backend_ips}

---

##### `BlueGreenStrategy`<sup>Optional</sup> <a name="BlueGreenStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.blueGreenStrategy"></a>

```csharp
public DevopsDeployStageBlueGreenStrategy BlueGreenStrategy { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a>

blue_green_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#blue_green_strategy DevopsDeployStage#blue_green_strategy}

---

##### `CanaryStrategy`<sup>Optional</sup> <a name="CanaryStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.canaryStrategy"></a>

```csharp
public DevopsDeployStageCanaryStrategy CanaryStrategy { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a>

canary_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#canary_strategy DevopsDeployStage#canary_strategy}

---

##### `CommandSpecDeployArtifactId`<sup>Optional</sup> <a name="CommandSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.commandSpecDeployArtifactId"></a>

```csharp
public string CommandSpecDeployArtifactId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#command_spec_deploy_artifact_id DevopsDeployStage#command_spec_deploy_artifact_id}.

---

##### `ComputeInstanceGroupBlueGreenDeploymentDeployStageId`<sup>Optional</sup> <a name="ComputeInstanceGroupBlueGreenDeploymentDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupBlueGreenDeploymentDeployStageId"></a>

```csharp
public string ComputeInstanceGroupBlueGreenDeploymentDeployStageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_blue_green_deployment_deploy_stage_id DevopsDeployStage#compute_instance_group_blue_green_deployment_deploy_stage_id}.

---

##### `ComputeInstanceGroupCanaryDeployStageId`<sup>Optional</sup> <a name="ComputeInstanceGroupCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupCanaryDeployStageId"></a>

```csharp
public string ComputeInstanceGroupCanaryDeployStageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_deploy_stage_id}.

---

##### `ComputeInstanceGroupCanaryTrafficShiftDeployStageId`<sup>Optional</sup> <a name="ComputeInstanceGroupCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupCanaryTrafficShiftDeployStageId"></a>

```csharp
public string ComputeInstanceGroupCanaryTrafficShiftDeployStageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_traffic_shift_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_traffic_shift_deploy_stage_id}.

---

##### `ComputeInstanceGroupDeployEnvironmentId`<sup>Optional</sup> <a name="ComputeInstanceGroupDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupDeployEnvironmentId"></a>

```csharp
public string ComputeInstanceGroupDeployEnvironmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_deploy_environment_id DevopsDeployStage#compute_instance_group_deploy_environment_id}.

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.config"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Config { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#config DevopsDeployStage#config}.

---

##### `ContainerConfig`<sup>Optional</sup> <a name="ContainerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.containerConfig"></a>

```csharp
public DevopsDeployStageContainerConfig ContainerConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a>

container_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#container_config DevopsDeployStage#container_config}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#defined_tags DevopsDeployStage#defined_tags}.

---

##### `DeployArtifactId`<sup>Optional</sup> <a name="DeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployArtifactId"></a>

```csharp
public string DeployArtifactId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_id DevopsDeployStage#deploy_artifact_id}.

---

##### `DeployArtifactIds`<sup>Optional</sup> <a name="DeployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployArtifactIds"></a>

```csharp
public string[] DeployArtifactIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_ids DevopsDeployStage#deploy_artifact_ids}.

---

##### `DeployEnvironmentIdA`<sup>Optional</sup> <a name="DeployEnvironmentIdA" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployEnvironmentIdA"></a>

```csharp
public string DeployEnvironmentIdA { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_a DevopsDeployStage#deploy_environment_id_a}.

---

##### `DeployEnvironmentIdB`<sup>Optional</sup> <a name="DeployEnvironmentIdB" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployEnvironmentIdB"></a>

```csharp
public string DeployEnvironmentIdB { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_b DevopsDeployStage#deploy_environment_id_b}.

---

##### `DeploymentSpecDeployArtifactId`<sup>Optional</sup> <a name="DeploymentSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deploymentSpecDeployArtifactId"></a>

```csharp
public string DeploymentSpecDeployArtifactId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deployment_spec_deploy_artifact_id DevopsDeployStage#deployment_spec_deploy_artifact_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#description DevopsDeployStage#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#display_name DevopsDeployStage#display_name}.

---

##### `DockerImageDeployArtifactId`<sup>Optional</sup> <a name="DockerImageDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.dockerImageDeployArtifactId"></a>

```csharp
public string DockerImageDeployArtifactId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#docker_image_deploy_artifact_id DevopsDeployStage#docker_image_deploy_artifact_id}.

---

##### `FailurePolicy`<sup>Optional</sup> <a name="FailurePolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.failurePolicy"></a>

```csharp
public DevopsDeployStageFailurePolicy FailurePolicy { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a>

failure_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_policy DevopsDeployStage#failure_policy}

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#freeform_tags DevopsDeployStage#freeform_tags}.

---

##### `FunctionDeployEnvironmentId`<sup>Optional</sup> <a name="FunctionDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.functionDeployEnvironmentId"></a>

```csharp
public string FunctionDeployEnvironmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_deploy_environment_id DevopsDeployStage#function_deploy_environment_id}.

---

##### `FunctionTimeoutInSeconds`<sup>Optional</sup> <a name="FunctionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.functionTimeoutInSeconds"></a>

```csharp
public double FunctionTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_timeout_in_seconds DevopsDeployStage#function_timeout_in_seconds}.

---

##### `GreenBackendIps`<sup>Optional</sup> <a name="GreenBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.greenBackendIps"></a>

```csharp
public DevopsDeployStageGreenBackendIps GreenBackendIps { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a>

green_backend_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#green_backend_ips DevopsDeployStage#green_backend_ips}

---

##### `HelmChartDeployArtifactId`<sup>Optional</sup> <a name="HelmChartDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.helmChartDeployArtifactId"></a>

```csharp
public string HelmChartDeployArtifactId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_chart_deploy_artifact_id DevopsDeployStage#helm_chart_deploy_artifact_id}.

---

##### `HelmCommandArtifactIds`<sup>Optional</sup> <a name="HelmCommandArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.helmCommandArtifactIds"></a>

```csharp
public string[] HelmCommandArtifactIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_command_artifact_ids DevopsDeployStage#helm_command_artifact_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAsync`<sup>Optional</sup> <a name="IsAsync" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isAsync"></a>

```csharp
public object IsAsync { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_async DevopsDeployStage#is_async}.

---

##### `IsDebugEnabled`<sup>Optional</sup> <a name="IsDebugEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isDebugEnabled"></a>

```csharp
public object IsDebugEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_debug_enabled DevopsDeployStage#is_debug_enabled}.

---

##### `IsForceEnabled`<sup>Optional</sup> <a name="IsForceEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isForceEnabled"></a>

```csharp
public object IsForceEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_force_enabled DevopsDeployStage#is_force_enabled}.

---

##### `IsUninstallOnStageDelete`<sup>Optional</sup> <a name="IsUninstallOnStageDelete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isUninstallOnStageDelete"></a>

```csharp
public object IsUninstallOnStageDelete { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_uninstall_on_stage_delete DevopsDeployStage#is_uninstall_on_stage_delete}.

---

##### `IsValidationEnabled`<sup>Optional</sup> <a name="IsValidationEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isValidationEnabled"></a>

```csharp
public object IsValidationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_validation_enabled DevopsDeployStage#is_validation_enabled}.

---

##### `KubernetesManifestDeployArtifactIds`<sup>Optional</sup> <a name="KubernetesManifestDeployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.kubernetesManifestDeployArtifactIds"></a>

```csharp
public string[] KubernetesManifestDeployArtifactIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#kubernetes_manifest_deploy_artifact_ids DevopsDeployStage#kubernetes_manifest_deploy_artifact_ids}.

---

##### `LoadBalancerConfig`<sup>Optional</sup> <a name="LoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.loadBalancerConfig"></a>

```csharp
public DevopsDeployStageLoadBalancerConfig LoadBalancerConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a>

load_balancer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_config DevopsDeployStage#load_balancer_config}

---

##### `MaxHistory`<sup>Optional</sup> <a name="MaxHistory" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.maxHistory"></a>

```csharp
public double MaxHistory { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_history DevopsDeployStage#max_history}.

---

##### `MaxMemoryInMbs`<sup>Optional</sup> <a name="MaxMemoryInMbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.maxMemoryInMbs"></a>

```csharp
public string MaxMemoryInMbs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_memory_in_mbs DevopsDeployStage#max_memory_in_mbs}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}.

---

##### `OkeBlueGreenDeployStageId`<sup>Optional</sup> <a name="OkeBlueGreenDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeBlueGreenDeployStageId"></a>

```csharp
public string OkeBlueGreenDeployStageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_blue_green_deploy_stage_id DevopsDeployStage#oke_blue_green_deploy_stage_id}.

---

##### `OkeCanaryDeployStageId`<sup>Optional</sup> <a name="OkeCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeCanaryDeployStageId"></a>

```csharp
public string OkeCanaryDeployStageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_deploy_stage_id DevopsDeployStage#oke_canary_deploy_stage_id}.

---

##### `OkeCanaryTrafficShiftDeployStageId`<sup>Optional</sup> <a name="OkeCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeCanaryTrafficShiftDeployStageId"></a>

```csharp
public string OkeCanaryTrafficShiftDeployStageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_traffic_shift_deploy_stage_id DevopsDeployStage#oke_canary_traffic_shift_deploy_stage_id}.

---

##### `OkeClusterDeployEnvironmentId`<sup>Optional</sup> <a name="OkeClusterDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeClusterDeployEnvironmentId"></a>

```csharp
public string OkeClusterDeployEnvironmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_cluster_deploy_environment_id DevopsDeployStage#oke_cluster_deploy_environment_id}.

---

##### `ProductionLoadBalancerConfig`<sup>Optional</sup> <a name="ProductionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.productionLoadBalancerConfig"></a>

```csharp
public DevopsDeployStageProductionLoadBalancerConfig ProductionLoadBalancerConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a>

production_load_balancer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#production_load_balancer_config DevopsDeployStage#production_load_balancer_config}

---

##### `Purpose`<sup>Optional</sup> <a name="Purpose" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.purpose"></a>

```csharp
public string Purpose { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#purpose DevopsDeployStage#purpose}.

---

##### `ReleaseName`<sup>Optional</sup> <a name="ReleaseName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.releaseName"></a>

```csharp
public string ReleaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#release_name DevopsDeployStage#release_name}.

---

##### `RollbackPolicy`<sup>Optional</sup> <a name="RollbackPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.rollbackPolicy"></a>

```csharp
public DevopsDeployStageRollbackPolicy RollbackPolicy { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a>

rollback_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#rollback_policy DevopsDeployStage#rollback_policy}

---

##### `RolloutPolicy`<sup>Optional</sup> <a name="RolloutPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.rolloutPolicy"></a>

```csharp
public DevopsDeployStageRolloutPolicy RolloutPolicy { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a>

rollout_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#rollout_policy DevopsDeployStage#rollout_policy}

---

##### `SetString`<sup>Optional</sup> <a name="SetString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.setString"></a>

```csharp
public DevopsDeployStageSetString SetString { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a>

set_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#set_string DevopsDeployStage#set_string}

---

##### `SetValues`<sup>Optional</sup> <a name="SetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.setValues"></a>

```csharp
public DevopsDeployStageSetValues SetValues { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a>

set_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#set_values DevopsDeployStage#set_values}

---

##### `ShouldCleanupOnFail`<sup>Optional</sup> <a name="ShouldCleanupOnFail" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldCleanupOnFail"></a>

```csharp
public object ShouldCleanupOnFail { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_cleanup_on_fail DevopsDeployStage#should_cleanup_on_fail}.

---

##### `ShouldNotWait`<sup>Optional</sup> <a name="ShouldNotWait" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldNotWait"></a>

```csharp
public object ShouldNotWait { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_not_wait DevopsDeployStage#should_not_wait}.

---

##### `ShouldResetValues`<sup>Optional</sup> <a name="ShouldResetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldResetValues"></a>

```csharp
public object ShouldResetValues { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reset_values DevopsDeployStage#should_reset_values}.

---

##### `ShouldReuseValues`<sup>Optional</sup> <a name="ShouldReuseValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldReuseValues"></a>

```csharp
public object ShouldReuseValues { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reuse_values DevopsDeployStage#should_reuse_values}.

---

##### `ShouldSkipCrds`<sup>Optional</sup> <a name="ShouldSkipCrds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldSkipCrds"></a>

```csharp
public object ShouldSkipCrds { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_crds DevopsDeployStage#should_skip_crds}.

---

##### `ShouldSkipRenderSubchartNotes`<sup>Optional</sup> <a name="ShouldSkipRenderSubchartNotes" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldSkipRenderSubchartNotes"></a>

```csharp
public object ShouldSkipRenderSubchartNotes { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_render_subchart_notes DevopsDeployStage#should_skip_render_subchart_notes}.

---

##### `TestLoadBalancerConfig`<sup>Optional</sup> <a name="TestLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.testLoadBalancerConfig"></a>

```csharp
public DevopsDeployStageTestLoadBalancerConfig TestLoadBalancerConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a>

test_load_balancer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#test_load_balancer_config DevopsDeployStage#test_load_balancer_config}

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#timeout_in_seconds DevopsDeployStage#timeout_in_seconds}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.timeouts"></a>

```csharp
public DevopsDeployStageTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#timeouts DevopsDeployStage#timeouts}

---

##### `TrafficShiftTarget`<sup>Optional</sup> <a name="TrafficShiftTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.trafficShiftTarget"></a>

```csharp
public string TrafficShiftTarget { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#traffic_shift_target DevopsDeployStage#traffic_shift_target}.

---

##### `ValuesArtifactIds`<sup>Optional</sup> <a name="ValuesArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.valuesArtifactIds"></a>

```csharp
public string[] ValuesArtifactIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#values_artifact_ids DevopsDeployStage#values_artifact_ids}.

---

##### `WaitCriteria`<sup>Optional</sup> <a name="WaitCriteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.waitCriteria"></a>

```csharp
public DevopsDeployStageWaitCriteria WaitCriteria { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a>

wait_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_criteria DevopsDeployStage#wait_criteria}

---

### DevopsDeployStageContainerConfig <a name="DevopsDeployStageContainerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageContainerConfig {
    string ContainerConfigType,
    DevopsDeployStageContainerConfigNetworkChannel NetworkChannel,
    DevopsDeployStageContainerConfigShapeConfig ShapeConfig,
    string ShapeName,
    string AvailabilityDomain = null,
    string CompartmentId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.containerConfigType">ContainerConfigType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#container_config_type DevopsDeployStage#container_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.networkChannel">NetworkChannel</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a></code> | network_channel block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.shapeName">ShapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#shape_name DevopsDeployStage#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#availability_domain DevopsDeployStage#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compartment_id DevopsDeployStage#compartment_id}. |

---

##### `ContainerConfigType`<sup>Required</sup> <a name="ContainerConfigType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.containerConfigType"></a>

```csharp
public string ContainerConfigType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#container_config_type DevopsDeployStage#container_config_type}.

---

##### `NetworkChannel`<sup>Required</sup> <a name="NetworkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.networkChannel"></a>

```csharp
public DevopsDeployStageContainerConfigNetworkChannel NetworkChannel { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a>

network_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#network_channel DevopsDeployStage#network_channel}

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.shapeConfig"></a>

```csharp
public DevopsDeployStageContainerConfigShapeConfig ShapeConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#shape_config DevopsDeployStage#shape_config}

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.shapeName"></a>

```csharp
public string ShapeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#shape_name DevopsDeployStage#shape_name}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#availability_domain DevopsDeployStage#availability_domain}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compartment_id DevopsDeployStage#compartment_id}.

---

### DevopsDeployStageContainerConfigNetworkChannel <a name="DevopsDeployStageContainerConfigNetworkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageContainerConfigNetworkChannel {
    string NetworkChannelType,
    string SubnetId,
    string[] NsgIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.networkChannelType">NetworkChannelType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#network_channel_type DevopsDeployStage#network_channel_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#subnet_id DevopsDeployStage#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#nsg_ids DevopsDeployStage#nsg_ids}. |

---

##### `NetworkChannelType`<sup>Required</sup> <a name="NetworkChannelType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.networkChannelType"></a>

```csharp
public string NetworkChannelType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#network_channel_type DevopsDeployStage#network_channel_type}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#subnet_id DevopsDeployStage#subnet_id}.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#nsg_ids DevopsDeployStage#nsg_ids}.

---

### DevopsDeployStageContainerConfigShapeConfig <a name="DevopsDeployStageContainerConfigShapeConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageContainerConfigShapeConfig {
    double Ocpus,
    double MemoryInGbs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.property.ocpus">Ocpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ocpus DevopsDeployStage#ocpus}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#memory_in_gbs DevopsDeployStage#memory_in_gbs}. |

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.property.ocpus"></a>

```csharp
public double Ocpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ocpus DevopsDeployStage#ocpus}.

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#memory_in_gbs DevopsDeployStage#memory_in_gbs}.

---

### DevopsDeployStageDeployStagePredecessorCollection <a name="DevopsDeployStageDeployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageDeployStagePredecessorCollection {
    object Items
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection.property.items">Items</a></code> | <code>object</code> | items block. |

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection.property.items"></a>

```csharp
public object Items { get; set; }
```

- *Type:* object

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}

---

### DevopsDeployStageDeployStagePredecessorCollectionItems <a name="DevopsDeployStageDeployStagePredecessorCollectionItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageDeployStagePredecessorCollectionItems {
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DevopsDeployStageFailurePolicy <a name="DevopsDeployStageFailurePolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageFailurePolicy {
    string PolicyType,
    double FailureCount = null,
    double FailurePercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.policyType">PolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.failureCount">FailureCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_count DevopsDeployStage#failure_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.failurePercentage">FailurePercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_percentage DevopsDeployStage#failure_percentage}. |

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.policyType"></a>

```csharp
public string PolicyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}.

---

##### `FailureCount`<sup>Optional</sup> <a name="FailureCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.failureCount"></a>

```csharp
public double FailureCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_count DevopsDeployStage#failure_count}.

---

##### `FailurePercentage`<sup>Optional</sup> <a name="FailurePercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.failurePercentage"></a>

```csharp
public double FailurePercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_percentage DevopsDeployStage#failure_percentage}.

---

### DevopsDeployStageGreenBackendIps <a name="DevopsDeployStageGreenBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageGreenBackendIps {
    string[] Items = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps.property.items">Items</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps.property.items"></a>

```csharp
public string[] Items { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}.

---

### DevopsDeployStageLoadBalancerConfig <a name="DevopsDeployStageLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageLoadBalancerConfig {
    double BackendPort = null,
    string ListenerName = null,
    string LoadBalancerId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.backendPort">BackendPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.listenerName">ListenerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}. |

---

##### `BackendPort`<sup>Optional</sup> <a name="BackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.backendPort"></a>

```csharp
public double BackendPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}.

---

##### `ListenerName`<sup>Optional</sup> <a name="ListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.listenerName"></a>

```csharp
public string ListenerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}.

---

##### `LoadBalancerId`<sup>Optional</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}.

---

### DevopsDeployStageProductionLoadBalancerConfig <a name="DevopsDeployStageProductionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageProductionLoadBalancerConfig {
    double BackendPort = null,
    string ListenerName = null,
    string LoadBalancerId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.backendPort">BackendPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.listenerName">ListenerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}. |

---

##### `BackendPort`<sup>Optional</sup> <a name="BackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.backendPort"></a>

```csharp
public double BackendPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}.

---

##### `ListenerName`<sup>Optional</sup> <a name="ListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.listenerName"></a>

```csharp
public string ListenerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}.

---

##### `LoadBalancerId`<sup>Optional</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}.

---

### DevopsDeployStageRollbackPolicy <a name="DevopsDeployStageRollbackPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageRollbackPolicy {
    string PolicyType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy.property.policyType">PolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}. |

---

##### `PolicyType`<sup>Optional</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy.property.policyType"></a>

```csharp
public string PolicyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}.

---

### DevopsDeployStageRolloutPolicy <a name="DevopsDeployStageRolloutPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageRolloutPolicy {
    double BatchCount = null,
    double BatchDelayInSeconds = null,
    double BatchPercentage = null,
    string PolicyType = null,
    double RampLimitPercent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchCount">BatchCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_count DevopsDeployStage#batch_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchDelayInSeconds">BatchDelayInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_delay_in_seconds DevopsDeployStage#batch_delay_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchPercentage">BatchPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_percentage DevopsDeployStage#batch_percentage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.policyType">PolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.rampLimitPercent">RampLimitPercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ramp_limit_percent DevopsDeployStage#ramp_limit_percent}. |

---

##### `BatchCount`<sup>Optional</sup> <a name="BatchCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchCount"></a>

```csharp
public double BatchCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_count DevopsDeployStage#batch_count}.

---

##### `BatchDelayInSeconds`<sup>Optional</sup> <a name="BatchDelayInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchDelayInSeconds"></a>

```csharp
public double BatchDelayInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_delay_in_seconds DevopsDeployStage#batch_delay_in_seconds}.

---

##### `BatchPercentage`<sup>Optional</sup> <a name="BatchPercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchPercentage"></a>

```csharp
public double BatchPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_percentage DevopsDeployStage#batch_percentage}.

---

##### `PolicyType`<sup>Optional</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.policyType"></a>

```csharp
public string PolicyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}.

---

##### `RampLimitPercent`<sup>Optional</sup> <a name="RampLimitPercent" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.rampLimitPercent"></a>

```csharp
public double RampLimitPercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ramp_limit_percent DevopsDeployStage#ramp_limit_percent}.

---

### DevopsDeployStageSetString <a name="DevopsDeployStageSetString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageSetString {
    object Items = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString.property.items">Items</a></code> | <code>object</code> | items block. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString.property.items"></a>

```csharp
public object Items { get; set; }
```

- *Type:* object

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}

---

### DevopsDeployStageSetStringItems <a name="DevopsDeployStageSetStringItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageSetStringItems {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#name DevopsDeployStage#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#value DevopsDeployStage#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#name DevopsDeployStage#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#value DevopsDeployStage#value}.

---

### DevopsDeployStageSetValues <a name="DevopsDeployStageSetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageSetValues {
    object Items = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues.property.items">Items</a></code> | <code>object</code> | items block. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues.property.items"></a>

```csharp
public object Items { get; set; }
```

- *Type:* object

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}

---

### DevopsDeployStageSetValuesItems <a name="DevopsDeployStageSetValuesItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageSetValuesItems {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#name DevopsDeployStage#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#value DevopsDeployStage#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#name DevopsDeployStage#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#value DevopsDeployStage#value}.

---

### DevopsDeployStageTestLoadBalancerConfig <a name="DevopsDeployStageTestLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageTestLoadBalancerConfig {
    double BackendPort = null,
    string ListenerName = null,
    string LoadBalancerId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.backendPort">BackendPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.listenerName">ListenerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}. |

---

##### `BackendPort`<sup>Optional</sup> <a name="BackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.backendPort"></a>

```csharp
public double BackendPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}.

---

##### `ListenerName`<sup>Optional</sup> <a name="ListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.listenerName"></a>

```csharp
public string ListenerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}.

---

##### `LoadBalancerId`<sup>Optional</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}.

---

### DevopsDeployStageTimeouts <a name="DevopsDeployStageTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#create DevopsDeployStage#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#delete DevopsDeployStage#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#update DevopsDeployStage#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#create DevopsDeployStage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#delete DevopsDeployStage#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#update DevopsDeployStage#update}.

---

### DevopsDeployStageWaitCriteria <a name="DevopsDeployStageWaitCriteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageWaitCriteria {
    string WaitDuration,
    string WaitType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.property.waitDuration">WaitDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_duration DevopsDeployStage#wait_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.property.waitType">WaitType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_type DevopsDeployStage#wait_type}. |

---

##### `WaitDuration`<sup>Required</sup> <a name="WaitDuration" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.property.waitDuration"></a>

```csharp
public string WaitDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_duration DevopsDeployStage#wait_duration}.

---

##### `WaitType`<sup>Required</sup> <a name="WaitType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.property.waitType"></a>

```csharp
public string WaitType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_type DevopsDeployStage#wait_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsDeployStageApprovalPolicyOutputReference <a name="DevopsDeployStageApprovalPolicyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageApprovalPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.approvalPolicyTypeInput">ApprovalPolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.numberOfApprovalsRequiredInput">NumberOfApprovalsRequiredInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.approvalPolicyType">ApprovalPolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.numberOfApprovalsRequired">NumberOfApprovalsRequired</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApprovalPolicyTypeInput`<sup>Optional</sup> <a name="ApprovalPolicyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.approvalPolicyTypeInput"></a>

```csharp
public string ApprovalPolicyTypeInput { get; }
```

- *Type:* string

---

##### `NumberOfApprovalsRequiredInput`<sup>Optional</sup> <a name="NumberOfApprovalsRequiredInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.numberOfApprovalsRequiredInput"></a>

```csharp
public double NumberOfApprovalsRequiredInput { get; }
```

- *Type:* double

---

##### `ApprovalPolicyType`<sup>Required</sup> <a name="ApprovalPolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.approvalPolicyType"></a>

```csharp
public string ApprovalPolicyType { get; }
```

- *Type:* string

---

##### `NumberOfApprovalsRequired`<sup>Required</sup> <a name="NumberOfApprovalsRequired" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.numberOfApprovalsRequired"></a>

```csharp
public double NumberOfApprovalsRequired { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployStageApprovalPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a>

---


### DevopsDeployStageBlueBackendIpsOutputReference <a name="DevopsDeployStageBlueBackendIpsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageBlueBackendIpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetItems` <a name="ResetItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.resetItems"></a>

```csharp
private void ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.itemsInput">ItemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.items">Items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.itemsInput"></a>

```csharp
public string[] ItemsInput { get; }
```

- *Type:* string[]

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.items"></a>

```csharp
public string[] Items { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployStageBlueBackendIps InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a>

---


### DevopsDeployStageBlueGreenStrategyOutputReference <a name="DevopsDeployStageBlueGreenStrategyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageBlueGreenStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.ingressNameInput">IngressNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceAInput">NamespaceAInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceBInput">NamespaceBInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.strategyTypeInput">StrategyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.ingressName">IngressName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceA">NamespaceA</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceB">NamespaceB</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.strategyType">StrategyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IngressNameInput`<sup>Optional</sup> <a name="IngressNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.ingressNameInput"></a>

```csharp
public string IngressNameInput { get; }
```

- *Type:* string

---

##### `NamespaceAInput`<sup>Optional</sup> <a name="NamespaceAInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceAInput"></a>

```csharp
public string NamespaceAInput { get; }
```

- *Type:* string

---

##### `NamespaceBInput`<sup>Optional</sup> <a name="NamespaceBInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceBInput"></a>

```csharp
public string NamespaceBInput { get; }
```

- *Type:* string

---

##### `StrategyTypeInput`<sup>Optional</sup> <a name="StrategyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.strategyTypeInput"></a>

```csharp
public string StrategyTypeInput { get; }
```

- *Type:* string

---

##### `IngressName`<sup>Required</sup> <a name="IngressName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.ingressName"></a>

```csharp
public string IngressName { get; }
```

- *Type:* string

---

##### `NamespaceA`<sup>Required</sup> <a name="NamespaceA" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceA"></a>

```csharp
public string NamespaceA { get; }
```

- *Type:* string

---

##### `NamespaceB`<sup>Required</sup> <a name="NamespaceB" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceB"></a>

```csharp
public string NamespaceB { get; }
```

- *Type:* string

---

##### `StrategyType`<sup>Required</sup> <a name="StrategyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.strategyType"></a>

```csharp
public string StrategyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployStageBlueGreenStrategy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a>

---


### DevopsDeployStageCanaryStrategyOutputReference <a name="DevopsDeployStageCanaryStrategyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageCanaryStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.ingressNameInput">IngressNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.strategyTypeInput">StrategyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.ingressName">IngressName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.strategyType">StrategyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IngressNameInput`<sup>Optional</sup> <a name="IngressNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.ingressNameInput"></a>

```csharp
public string IngressNameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `StrategyTypeInput`<sup>Optional</sup> <a name="StrategyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.strategyTypeInput"></a>

```csharp
public string StrategyTypeInput { get; }
```

- *Type:* string

---

##### `IngressName`<sup>Required</sup> <a name="IngressName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.ingressName"></a>

```csharp
public string IngressName { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `StrategyType`<sup>Required</sup> <a name="StrategyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.strategyType"></a>

```csharp
public string StrategyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployStageCanaryStrategy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a>

---


### DevopsDeployStageContainerConfigNetworkChannelOutputReference <a name="DevopsDeployStageContainerConfigNetworkChannelOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageContainerConfigNetworkChannelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.resetNsgIds"></a>

```csharp
private void ResetNsgIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.networkChannelTypeInput">NetworkChannelTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.nsgIdsInput">NsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.networkChannelType">NetworkChannelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkChannelTypeInput`<sup>Optional</sup> <a name="NetworkChannelTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.networkChannelTypeInput"></a>

```csharp
public string NetworkChannelTypeInput { get; }
```

- *Type:* string

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.nsgIdsInput"></a>

```csharp
public string[] NsgIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `NetworkChannelType`<sup>Required</sup> <a name="NetworkChannelType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.networkChannelType"></a>

```csharp
public string NetworkChannelType { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployStageContainerConfigNetworkChannel InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a>

---


### DevopsDeployStageContainerConfigOutputReference <a name="DevopsDeployStageContainerConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageContainerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkChannel` <a name="PutNetworkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putNetworkChannel"></a>

```csharp
private void PutNetworkChannel(DevopsDeployStageContainerConfigNetworkChannel Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putNetworkChannel.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a>

---

##### `PutShapeConfig` <a name="PutShapeConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putShapeConfig"></a>

```csharp
private void PutShapeConfig(DevopsDeployStageContainerConfigShapeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a>

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resetAvailabilityDomain"></a>

```csharp
private void ResetAvailabilityDomain()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.networkChannel">NetworkChannel</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference">DevopsDeployStageContainerConfigNetworkChannelOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference">DevopsDeployStageContainerConfigShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.containerConfigTypeInput">ContainerConfigTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.networkChannelInput">NetworkChannelInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeConfigInput">ShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeNameInput">ShapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.containerConfigType">ContainerConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeName">ShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkChannel`<sup>Required</sup> <a name="NetworkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.networkChannel"></a>

```csharp
public DevopsDeployStageContainerConfigNetworkChannelOutputReference NetworkChannel { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference">DevopsDeployStageContainerConfigNetworkChannelOutputReference</a>

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeConfig"></a>

```csharp
public DevopsDeployStageContainerConfigShapeConfigOutputReference ShapeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference">DevopsDeployStageContainerConfigShapeConfigOutputReference</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ContainerConfigTypeInput`<sup>Optional</sup> <a name="ContainerConfigTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.containerConfigTypeInput"></a>

```csharp
public string ContainerConfigTypeInput { get; }
```

- *Type:* string

---

##### `NetworkChannelInput`<sup>Optional</sup> <a name="NetworkChannelInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.networkChannelInput"></a>

```csharp
public DevopsDeployStageContainerConfigNetworkChannel NetworkChannelInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a>

---

##### `ShapeConfigInput`<sup>Optional</sup> <a name="ShapeConfigInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeConfigInput"></a>

```csharp
public DevopsDeployStageContainerConfigShapeConfig ShapeConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a>

---

##### `ShapeNameInput`<sup>Optional</sup> <a name="ShapeNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeNameInput"></a>

```csharp
public string ShapeNameInput { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ContainerConfigType`<sup>Required</sup> <a name="ContainerConfigType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.containerConfigType"></a>

```csharp
public string ContainerConfigType { get; }
```

- *Type:* string

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeName"></a>

```csharp
public string ShapeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployStageContainerConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a>

---


### DevopsDeployStageContainerConfigShapeConfigOutputReference <a name="DevopsDeployStageContainerConfigShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageContainerConfigShapeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.resetMemoryInGbs"></a>

```csharp
private void ResetMemoryInGbs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.memoryInGbsInput"></a>

```csharp
public double MemoryInGbsInput { get; }
```

- *Type:* double

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.ocpusInput"></a>

```csharp
public double OcpusInput { get; }
```

- *Type:* double

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployStageContainerConfigShapeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a>

---


### DevopsDeployStageDeployStagePredecessorCollectionItemsList <a name="DevopsDeployStageDeployStagePredecessorCollectionItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageDeployStagePredecessorCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.get"></a>

```csharp
private DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference <a name="DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DevopsDeployStageDeployStagePredecessorCollectionOutputReference <a name="DevopsDeployStageDeployStagePredecessorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageDeployStagePredecessorCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.putItems"></a>

```csharp
private void PutItems(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.putItems.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList">DevopsDeployStageDeployStagePredecessorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.itemsInput">ItemsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.items"></a>

```csharp
public DevopsDeployStageDeployStagePredecessorCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList">DevopsDeployStageDeployStagePredecessorCollectionItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.itemsInput"></a>

```csharp
public object ItemsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployStageDeployStagePredecessorCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a>

---


### DevopsDeployStageFailurePolicyOutputReference <a name="DevopsDeployStageFailurePolicyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageFailurePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailureCount` <a name="ResetFailureCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resetFailureCount"></a>

```csharp
private void ResetFailureCount()
```

##### `ResetFailurePercentage` <a name="ResetFailurePercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resetFailurePercentage"></a>

```csharp
private void ResetFailurePercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failureCountInput">FailureCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failurePercentageInput">FailurePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.policyTypeInput">PolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failureCount">FailureCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failurePercentage">FailurePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailureCountInput`<sup>Optional</sup> <a name="FailureCountInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failureCountInput"></a>

```csharp
public double FailureCountInput { get; }
```

- *Type:* double

---

##### `FailurePercentageInput`<sup>Optional</sup> <a name="FailurePercentageInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failurePercentageInput"></a>

```csharp
public double FailurePercentageInput { get; }
```

- *Type:* double

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.policyTypeInput"></a>

```csharp
public string PolicyTypeInput { get; }
```

- *Type:* string

---

##### `FailureCount`<sup>Required</sup> <a name="FailureCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failureCount"></a>

```csharp
public double FailureCount { get; }
```

- *Type:* double

---

##### `FailurePercentage`<sup>Required</sup> <a name="FailurePercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failurePercentage"></a>

```csharp
public double FailurePercentage { get; }
```

- *Type:* double

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployStageFailurePolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a>

---


### DevopsDeployStageGreenBackendIpsOutputReference <a name="DevopsDeployStageGreenBackendIpsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageGreenBackendIpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetItems` <a name="ResetItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.resetItems"></a>

```csharp
private void ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.itemsInput">ItemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.items">Items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.itemsInput"></a>

```csharp
public string[] ItemsInput { get; }
```

- *Type:* string[]

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.items"></a>

```csharp
public string[] Items { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployStageGreenBackendIps InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a>

---


### DevopsDeployStageLoadBalancerConfigOutputReference <a name="DevopsDeployStageLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageLoadBalancerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackendPort` <a name="ResetBackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetBackendPort"></a>

```csharp
private void ResetBackendPort()
```

##### `ResetListenerName` <a name="ResetListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetListenerName"></a>

```csharp
private void ResetListenerName()
```

##### `ResetLoadBalancerId` <a name="ResetLoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetLoadBalancerId"></a>

```csharp
private void ResetLoadBalancerId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.backendPortInput">BackendPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.listenerNameInput">ListenerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.backendPort">BackendPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.listenerName">ListenerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `BackendPortInput`<sup>Optional</sup> <a name="BackendPortInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.backendPortInput"></a>

```csharp
public double BackendPortInput { get; }
```

- *Type:* double

---

##### `ListenerNameInput`<sup>Optional</sup> <a name="ListenerNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.listenerNameInput"></a>

```csharp
public string ListenerNameInput { get; }
```

- *Type:* string

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.loadBalancerIdInput"></a>

```csharp
public string LoadBalancerIdInput { get; }
```

- *Type:* string

---

##### `BackendPort`<sup>Required</sup> <a name="BackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.backendPort"></a>

```csharp
public double BackendPort { get; }
```

- *Type:* double

---

##### `ListenerName`<sup>Required</sup> <a name="ListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.listenerName"></a>

```csharp
public string ListenerName { get; }
```

- *Type:* string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployStageLoadBalancerConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a>

---


### DevopsDeployStageProductionLoadBalancerConfigOutputReference <a name="DevopsDeployStageProductionLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageProductionLoadBalancerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackendPort` <a name="ResetBackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetBackendPort"></a>

```csharp
private void ResetBackendPort()
```

##### `ResetListenerName` <a name="ResetListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetListenerName"></a>

```csharp
private void ResetListenerName()
```

##### `ResetLoadBalancerId` <a name="ResetLoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetLoadBalancerId"></a>

```csharp
private void ResetLoadBalancerId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.backendPortInput">BackendPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.listenerNameInput">ListenerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.backendPort">BackendPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.listenerName">ListenerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `BackendPortInput`<sup>Optional</sup> <a name="BackendPortInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.backendPortInput"></a>

```csharp
public double BackendPortInput { get; }
```

- *Type:* double

---

##### `ListenerNameInput`<sup>Optional</sup> <a name="ListenerNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.listenerNameInput"></a>

```csharp
public string ListenerNameInput { get; }
```

- *Type:* string

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.loadBalancerIdInput"></a>

```csharp
public string LoadBalancerIdInput { get; }
```

- *Type:* string

---

##### `BackendPort`<sup>Required</sup> <a name="BackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.backendPort"></a>

```csharp
public double BackendPort { get; }
```

- *Type:* double

---

##### `ListenerName`<sup>Required</sup> <a name="ListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.listenerName"></a>

```csharp
public string ListenerName { get; }
```

- *Type:* string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployStageProductionLoadBalancerConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a>

---


### DevopsDeployStageRollbackPolicyOutputReference <a name="DevopsDeployStageRollbackPolicyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageRollbackPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPolicyType` <a name="ResetPolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.resetPolicyType"></a>

```csharp
private void ResetPolicyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.policyTypeInput">PolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.policyTypeInput"></a>

```csharp
public string PolicyTypeInput { get; }
```

- *Type:* string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployStageRollbackPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a>

---


### DevopsDeployStageRolloutPolicyOutputReference <a name="DevopsDeployStageRolloutPolicyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageRolloutPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchCount` <a name="ResetBatchCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchCount"></a>

```csharp
private void ResetBatchCount()
```

##### `ResetBatchDelayInSeconds` <a name="ResetBatchDelayInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchDelayInSeconds"></a>

```csharp
private void ResetBatchDelayInSeconds()
```

##### `ResetBatchPercentage` <a name="ResetBatchPercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchPercentage"></a>

```csharp
private void ResetBatchPercentage()
```

##### `ResetPolicyType` <a name="ResetPolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetPolicyType"></a>

```csharp
private void ResetPolicyType()
```

##### `ResetRampLimitPercent` <a name="ResetRampLimitPercent" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetRampLimitPercent"></a>

```csharp
private void ResetRampLimitPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchCountInput">BatchCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchDelayInSecondsInput">BatchDelayInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchPercentageInput">BatchPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.policyTypeInput">PolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.rampLimitPercentInput">RampLimitPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchCount">BatchCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchDelayInSeconds">BatchDelayInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchPercentage">BatchPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.rampLimitPercent">RampLimitPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchCountInput`<sup>Optional</sup> <a name="BatchCountInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchCountInput"></a>

```csharp
public double BatchCountInput { get; }
```

- *Type:* double

---

##### `BatchDelayInSecondsInput`<sup>Optional</sup> <a name="BatchDelayInSecondsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchDelayInSecondsInput"></a>

```csharp
public double BatchDelayInSecondsInput { get; }
```

- *Type:* double

---

##### `BatchPercentageInput`<sup>Optional</sup> <a name="BatchPercentageInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchPercentageInput"></a>

```csharp
public double BatchPercentageInput { get; }
```

- *Type:* double

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.policyTypeInput"></a>

```csharp
public string PolicyTypeInput { get; }
```

- *Type:* string

---

##### `RampLimitPercentInput`<sup>Optional</sup> <a name="RampLimitPercentInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.rampLimitPercentInput"></a>

```csharp
public double RampLimitPercentInput { get; }
```

- *Type:* double

---

##### `BatchCount`<sup>Required</sup> <a name="BatchCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchCount"></a>

```csharp
public double BatchCount { get; }
```

- *Type:* double

---

##### `BatchDelayInSeconds`<sup>Required</sup> <a name="BatchDelayInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchDelayInSeconds"></a>

```csharp
public double BatchDelayInSeconds { get; }
```

- *Type:* double

---

##### `BatchPercentage`<sup>Required</sup> <a name="BatchPercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchPercentage"></a>

```csharp
public double BatchPercentage { get; }
```

- *Type:* double

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `RampLimitPercent`<sup>Required</sup> <a name="RampLimitPercent" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.rampLimitPercent"></a>

```csharp
public double RampLimitPercent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployStageRolloutPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a>

---


### DevopsDeployStageSetStringItemsList <a name="DevopsDeployStageSetStringItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageSetStringItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.get"></a>

```csharp
private DevopsDeployStageSetStringItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DevopsDeployStageSetStringItemsOutputReference <a name="DevopsDeployStageSetStringItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageSetStringItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DevopsDeployStageSetStringOutputReference <a name="DevopsDeployStageSetStringOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageSetStringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.putItems"></a>

```csharp
private void PutItems(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.putItems.parameter.value"></a>

- *Type:* object

---

##### `ResetItems` <a name="ResetItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.resetItems"></a>

```csharp
private void ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList">DevopsDeployStageSetStringItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.itemsInput">ItemsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.items"></a>

```csharp
public DevopsDeployStageSetStringItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList">DevopsDeployStageSetStringItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.itemsInput"></a>

```csharp
public object ItemsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployStageSetString InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a>

---


### DevopsDeployStageSetValuesItemsList <a name="DevopsDeployStageSetValuesItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageSetValuesItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.get"></a>

```csharp
private DevopsDeployStageSetValuesItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DevopsDeployStageSetValuesItemsOutputReference <a name="DevopsDeployStageSetValuesItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageSetValuesItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DevopsDeployStageSetValuesOutputReference <a name="DevopsDeployStageSetValuesOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageSetValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.putItems"></a>

```csharp
private void PutItems(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.putItems.parameter.value"></a>

- *Type:* object

---

##### `ResetItems` <a name="ResetItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.resetItems"></a>

```csharp
private void ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList">DevopsDeployStageSetValuesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.itemsInput">ItemsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.items"></a>

```csharp
public DevopsDeployStageSetValuesItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList">DevopsDeployStageSetValuesItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.itemsInput"></a>

```csharp
public object ItemsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployStageSetValues InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a>

---


### DevopsDeployStageTestLoadBalancerConfigOutputReference <a name="DevopsDeployStageTestLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageTestLoadBalancerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackendPort` <a name="ResetBackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetBackendPort"></a>

```csharp
private void ResetBackendPort()
```

##### `ResetListenerName` <a name="ResetListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetListenerName"></a>

```csharp
private void ResetListenerName()
```

##### `ResetLoadBalancerId` <a name="ResetLoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetLoadBalancerId"></a>

```csharp
private void ResetLoadBalancerId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.backendPortInput">BackendPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.listenerNameInput">ListenerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.backendPort">BackendPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.listenerName">ListenerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `BackendPortInput`<sup>Optional</sup> <a name="BackendPortInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.backendPortInput"></a>

```csharp
public double BackendPortInput { get; }
```

- *Type:* double

---

##### `ListenerNameInput`<sup>Optional</sup> <a name="ListenerNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.listenerNameInput"></a>

```csharp
public string ListenerNameInput { get; }
```

- *Type:* string

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.loadBalancerIdInput"></a>

```csharp
public string LoadBalancerIdInput { get; }
```

- *Type:* string

---

##### `BackendPort`<sup>Required</sup> <a name="BackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.backendPort"></a>

```csharp
public double BackendPort { get; }
```

- *Type:* double

---

##### `ListenerName`<sup>Required</sup> <a name="ListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.listenerName"></a>

```csharp
public string ListenerName { get; }
```

- *Type:* string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployStageTestLoadBalancerConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a>

---


### DevopsDeployStageTimeoutsOutputReference <a name="DevopsDeployStageTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DevopsDeployStageWaitCriteriaOutputReference <a name="DevopsDeployStageWaitCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DevopsDeployStageWaitCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitDurationInput">WaitDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitTypeInput">WaitTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitDuration">WaitDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitType">WaitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WaitDurationInput`<sup>Optional</sup> <a name="WaitDurationInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitDurationInput"></a>

```csharp
public string WaitDurationInput { get; }
```

- *Type:* string

---

##### `WaitTypeInput`<sup>Optional</sup> <a name="WaitTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitTypeInput"></a>

```csharp
public string WaitTypeInput { get; }
```

- *Type:* string

---

##### `WaitDuration`<sup>Required</sup> <a name="WaitDuration" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitDuration"></a>

```csharp
public string WaitDuration { get; }
```

- *Type:* string

---

##### `WaitType`<sup>Required</sup> <a name="WaitType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitType"></a>

```csharp
public string WaitType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.internalValue"></a>

```csharp
public DevopsDeployStageWaitCriteria InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a>

---



