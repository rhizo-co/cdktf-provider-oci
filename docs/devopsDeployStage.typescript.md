# `devopsDeployStage` Submodule <a name="`devopsDeployStage` Submodule" id="rhizo-co-terraform-provider-oci.devopsDeployStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsDeployStage <a name="DevopsDeployStage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage oci_devops_deploy_stage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStage(scope: Construct, id: string, config: DevopsDeployStageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig">DevopsDeployStageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig">DevopsDeployStageConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApprovalPolicy` <a name="putApprovalPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putApprovalPolicy"></a>

```typescript
public putApprovalPolicy(value: DevopsDeployStageApprovalPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putApprovalPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a>

---

##### `putBlueBackendIps` <a name="putBlueBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueBackendIps"></a>

```typescript
public putBlueBackendIps(value: DevopsDeployStageBlueBackendIps): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueBackendIps.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a>

---

##### `putBlueGreenStrategy` <a name="putBlueGreenStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueGreenStrategy"></a>

```typescript
public putBlueGreenStrategy(value: DevopsDeployStageBlueGreenStrategy): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putBlueGreenStrategy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a>

---

##### `putCanaryStrategy` <a name="putCanaryStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putCanaryStrategy"></a>

```typescript
public putCanaryStrategy(value: DevopsDeployStageCanaryStrategy): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putCanaryStrategy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a>

---

##### `putContainerConfig` <a name="putContainerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putContainerConfig"></a>

```typescript
public putContainerConfig(value: DevopsDeployStageContainerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putContainerConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a>

---

##### `putDeployStagePredecessorCollection` <a name="putDeployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putDeployStagePredecessorCollection"></a>

```typescript
public putDeployStagePredecessorCollection(value: DevopsDeployStageDeployStagePredecessorCollection): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putDeployStagePredecessorCollection.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a>

---

##### `putFailurePolicy` <a name="putFailurePolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putFailurePolicy"></a>

```typescript
public putFailurePolicy(value: DevopsDeployStageFailurePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putFailurePolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a>

---

##### `putGreenBackendIps` <a name="putGreenBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putGreenBackendIps"></a>

```typescript
public putGreenBackendIps(value: DevopsDeployStageGreenBackendIps): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putGreenBackendIps.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a>

---

##### `putLoadBalancerConfig` <a name="putLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putLoadBalancerConfig"></a>

```typescript
public putLoadBalancerConfig(value: DevopsDeployStageLoadBalancerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putLoadBalancerConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a>

---

##### `putProductionLoadBalancerConfig` <a name="putProductionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putProductionLoadBalancerConfig"></a>

```typescript
public putProductionLoadBalancerConfig(value: DevopsDeployStageProductionLoadBalancerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putProductionLoadBalancerConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a>

---

##### `putRollbackPolicy` <a name="putRollbackPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRollbackPolicy"></a>

```typescript
public putRollbackPolicy(value: DevopsDeployStageRollbackPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRollbackPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a>

---

##### `putRolloutPolicy` <a name="putRolloutPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRolloutPolicy"></a>

```typescript
public putRolloutPolicy(value: DevopsDeployStageRolloutPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putRolloutPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a>

---

##### `putSetString` <a name="putSetString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetString"></a>

```typescript
public putSetString(value: DevopsDeployStageSetString): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetString.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a>

---

##### `putSetValues` <a name="putSetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetValues"></a>

```typescript
public putSetValues(value: DevopsDeployStageSetValues): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putSetValues.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a>

---

##### `putTestLoadBalancerConfig` <a name="putTestLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTestLoadBalancerConfig"></a>

```typescript
public putTestLoadBalancerConfig(value: DevopsDeployStageTestLoadBalancerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTestLoadBalancerConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTimeouts"></a>

```typescript
public putTimeouts(value: DevopsDeployStageTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a>

---

##### `putWaitCriteria` <a name="putWaitCriteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putWaitCriteria"></a>

```typescript
public putWaitCriteria(value: DevopsDeployStageWaitCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.putWaitCriteria.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a>

---

##### `resetApprovalPolicy` <a name="resetApprovalPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetApprovalPolicy"></a>

```typescript
public resetApprovalPolicy(): void
```

##### `resetAreHooksEnabled` <a name="resetAreHooksEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetAreHooksEnabled"></a>

```typescript
public resetAreHooksEnabled(): void
```

##### `resetBlueBackendIps` <a name="resetBlueBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetBlueBackendIps"></a>

```typescript
public resetBlueBackendIps(): void
```

##### `resetBlueGreenStrategy` <a name="resetBlueGreenStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetBlueGreenStrategy"></a>

```typescript
public resetBlueGreenStrategy(): void
```

##### `resetCanaryStrategy` <a name="resetCanaryStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetCanaryStrategy"></a>

```typescript
public resetCanaryStrategy(): void
```

##### `resetCommandSpecDeployArtifactId` <a name="resetCommandSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetCommandSpecDeployArtifactId"></a>

```typescript
public resetCommandSpecDeployArtifactId(): void
```

##### `resetComputeInstanceGroupBlueGreenDeploymentDeployStageId` <a name="resetComputeInstanceGroupBlueGreenDeploymentDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupBlueGreenDeploymentDeployStageId"></a>

```typescript
public resetComputeInstanceGroupBlueGreenDeploymentDeployStageId(): void
```

##### `resetComputeInstanceGroupCanaryDeployStageId` <a name="resetComputeInstanceGroupCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupCanaryDeployStageId"></a>

```typescript
public resetComputeInstanceGroupCanaryDeployStageId(): void
```

##### `resetComputeInstanceGroupCanaryTrafficShiftDeployStageId` <a name="resetComputeInstanceGroupCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupCanaryTrafficShiftDeployStageId"></a>

```typescript
public resetComputeInstanceGroupCanaryTrafficShiftDeployStageId(): void
```

##### `resetComputeInstanceGroupDeployEnvironmentId` <a name="resetComputeInstanceGroupDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetComputeInstanceGroupDeployEnvironmentId"></a>

```typescript
public resetComputeInstanceGroupDeployEnvironmentId(): void
```

##### `resetConfig` <a name="resetConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetContainerConfig` <a name="resetContainerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetContainerConfig"></a>

```typescript
public resetContainerConfig(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDeployArtifactId` <a name="resetDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployArtifactId"></a>

```typescript
public resetDeployArtifactId(): void
```

##### `resetDeployArtifactIds` <a name="resetDeployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployArtifactIds"></a>

```typescript
public resetDeployArtifactIds(): void
```

##### `resetDeployEnvironmentIdA` <a name="resetDeployEnvironmentIdA" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployEnvironmentIdA"></a>

```typescript
public resetDeployEnvironmentIdA(): void
```

##### `resetDeployEnvironmentIdB` <a name="resetDeployEnvironmentIdB" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeployEnvironmentIdB"></a>

```typescript
public resetDeployEnvironmentIdB(): void
```

##### `resetDeploymentSpecDeployArtifactId` <a name="resetDeploymentSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDeploymentSpecDeployArtifactId"></a>

```typescript
public resetDeploymentSpecDeployArtifactId(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDockerImageDeployArtifactId` <a name="resetDockerImageDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetDockerImageDeployArtifactId"></a>

```typescript
public resetDockerImageDeployArtifactId(): void
```

##### `resetFailurePolicy` <a name="resetFailurePolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFailurePolicy"></a>

```typescript
public resetFailurePolicy(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetFunctionDeployEnvironmentId` <a name="resetFunctionDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFunctionDeployEnvironmentId"></a>

```typescript
public resetFunctionDeployEnvironmentId(): void
```

##### `resetFunctionTimeoutInSeconds` <a name="resetFunctionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetFunctionTimeoutInSeconds"></a>

```typescript
public resetFunctionTimeoutInSeconds(): void
```

##### `resetGreenBackendIps` <a name="resetGreenBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetGreenBackendIps"></a>

```typescript
public resetGreenBackendIps(): void
```

##### `resetHelmChartDeployArtifactId` <a name="resetHelmChartDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetHelmChartDeployArtifactId"></a>

```typescript
public resetHelmChartDeployArtifactId(): void
```

##### `resetHelmCommandArtifactIds` <a name="resetHelmCommandArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetHelmCommandArtifactIds"></a>

```typescript
public resetHelmCommandArtifactIds(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsAsync` <a name="resetIsAsync" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsAsync"></a>

```typescript
public resetIsAsync(): void
```

##### `resetIsDebugEnabled` <a name="resetIsDebugEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsDebugEnabled"></a>

```typescript
public resetIsDebugEnabled(): void
```

##### `resetIsForceEnabled` <a name="resetIsForceEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsForceEnabled"></a>

```typescript
public resetIsForceEnabled(): void
```

##### `resetIsUninstallOnStageDelete` <a name="resetIsUninstallOnStageDelete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsUninstallOnStageDelete"></a>

```typescript
public resetIsUninstallOnStageDelete(): void
```

##### `resetIsValidationEnabled` <a name="resetIsValidationEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetIsValidationEnabled"></a>

```typescript
public resetIsValidationEnabled(): void
```

##### `resetKubernetesManifestDeployArtifactIds` <a name="resetKubernetesManifestDeployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetKubernetesManifestDeployArtifactIds"></a>

```typescript
public resetKubernetesManifestDeployArtifactIds(): void
```

##### `resetLoadBalancerConfig` <a name="resetLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetLoadBalancerConfig"></a>

```typescript
public resetLoadBalancerConfig(): void
```

##### `resetMaxHistory` <a name="resetMaxHistory" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetMaxHistory"></a>

```typescript
public resetMaxHistory(): void
```

##### `resetMaxMemoryInMbs` <a name="resetMaxMemoryInMbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetMaxMemoryInMbs"></a>

```typescript
public resetMaxMemoryInMbs(): void
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOkeBlueGreenDeployStageId` <a name="resetOkeBlueGreenDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeBlueGreenDeployStageId"></a>

```typescript
public resetOkeBlueGreenDeployStageId(): void
```

##### `resetOkeCanaryDeployStageId` <a name="resetOkeCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeCanaryDeployStageId"></a>

```typescript
public resetOkeCanaryDeployStageId(): void
```

##### `resetOkeCanaryTrafficShiftDeployStageId` <a name="resetOkeCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeCanaryTrafficShiftDeployStageId"></a>

```typescript
public resetOkeCanaryTrafficShiftDeployStageId(): void
```

##### `resetOkeClusterDeployEnvironmentId` <a name="resetOkeClusterDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetOkeClusterDeployEnvironmentId"></a>

```typescript
public resetOkeClusterDeployEnvironmentId(): void
```

##### `resetProductionLoadBalancerConfig` <a name="resetProductionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetProductionLoadBalancerConfig"></a>

```typescript
public resetProductionLoadBalancerConfig(): void
```

##### `resetPurpose` <a name="resetPurpose" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetPurpose"></a>

```typescript
public resetPurpose(): void
```

##### `resetReleaseName` <a name="resetReleaseName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetReleaseName"></a>

```typescript
public resetReleaseName(): void
```

##### `resetRollbackPolicy` <a name="resetRollbackPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetRollbackPolicy"></a>

```typescript
public resetRollbackPolicy(): void
```

##### `resetRolloutPolicy` <a name="resetRolloutPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetRolloutPolicy"></a>

```typescript
public resetRolloutPolicy(): void
```

##### `resetSetString` <a name="resetSetString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetSetString"></a>

```typescript
public resetSetString(): void
```

##### `resetSetValues` <a name="resetSetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetSetValues"></a>

```typescript
public resetSetValues(): void
```

##### `resetShouldCleanupOnFail` <a name="resetShouldCleanupOnFail" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldCleanupOnFail"></a>

```typescript
public resetShouldCleanupOnFail(): void
```

##### `resetShouldNotWait` <a name="resetShouldNotWait" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldNotWait"></a>

```typescript
public resetShouldNotWait(): void
```

##### `resetShouldResetValues` <a name="resetShouldResetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldResetValues"></a>

```typescript
public resetShouldResetValues(): void
```

##### `resetShouldReuseValues` <a name="resetShouldReuseValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldReuseValues"></a>

```typescript
public resetShouldReuseValues(): void
```

##### `resetShouldSkipCrds` <a name="resetShouldSkipCrds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldSkipCrds"></a>

```typescript
public resetShouldSkipCrds(): void
```

##### `resetShouldSkipRenderSubchartNotes` <a name="resetShouldSkipRenderSubchartNotes" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetShouldSkipRenderSubchartNotes"></a>

```typescript
public resetShouldSkipRenderSubchartNotes(): void
```

##### `resetTestLoadBalancerConfig` <a name="resetTestLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTestLoadBalancerConfig"></a>

```typescript
public resetTestLoadBalancerConfig(): void
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTimeoutInSeconds"></a>

```typescript
public resetTimeoutInSeconds(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTrafficShiftTarget` <a name="resetTrafficShiftTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetTrafficShiftTarget"></a>

```typescript
public resetTrafficShiftTarget(): void
```

##### `resetValuesArtifactIds` <a name="resetValuesArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetValuesArtifactIds"></a>

```typescript
public resetValuesArtifactIds(): void
```

##### `resetWaitCriteria` <a name="resetWaitCriteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.resetWaitCriteria"></a>

```typescript
public resetWaitCriteria(): void
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

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

devopsDeployStage.DevopsDeployStage.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformElement"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

devopsDeployStage.DevopsDeployStage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformResource"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

devopsDeployStage.DevopsDeployStage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

devopsDeployStage.DevopsDeployStage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DevopsDeployStage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsDeployStage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

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
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.approvalPolicy">approvalPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference">DevopsDeployStageApprovalPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueBackendIps">blueBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference">DevopsDeployStageBlueBackendIpsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueGreenStrategy">blueGreenStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference">DevopsDeployStageBlueGreenStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.canaryStrategy">canaryStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference">DevopsDeployStageCanaryStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.containerConfig">containerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference">DevopsDeployStageContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStagePredecessorCollection">deployStagePredecessorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference">DevopsDeployStageDeployStagePredecessorCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.failurePolicy">failurePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference">DevopsDeployStageFailurePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.greenBackendIps">greenBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference">DevopsDeployStageGreenBackendIpsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.loadBalancerConfig">loadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference">DevopsDeployStageLoadBalancerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.productionLoadBalancerConfig">productionLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference">DevopsDeployStageProductionLoadBalancerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rollbackPolicy">rollbackPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference">DevopsDeployStageRollbackPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rolloutPolicy">rolloutPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference">DevopsDeployStageRolloutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setString">setString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference">DevopsDeployStageSetStringOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setValues">setValues</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference">DevopsDeployStageSetValuesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.testLoadBalancerConfig">testLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference">DevopsDeployStageTestLoadBalancerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference">DevopsDeployStageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.waitCriteria">waitCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference">DevopsDeployStageWaitCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.approvalPolicyInput">approvalPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.areHooksEnabledInput">areHooksEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueBackendIpsInput">blueBackendIpsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueGreenStrategyInput">blueGreenStrategyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.canaryStrategyInput">canaryStrategyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.commandSpecDeployArtifactIdInput">commandSpecDeployArtifactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupBlueGreenDeploymentDeployStageIdInput">computeInstanceGroupBlueGreenDeploymentDeployStageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryDeployStageIdInput">computeInstanceGroupCanaryDeployStageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryTrafficShiftDeployStageIdInput">computeInstanceGroupCanaryTrafficShiftDeployStageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupDeployEnvironmentIdInput">computeInstanceGroupDeployEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.configInput">configInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.containerConfigInput">containerConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIdInput">deployArtifactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIdsInput">deployArtifactIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdAInput">deployEnvironmentIdAInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdBInput">deployEnvironmentIdBInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deploymentSpecDeployArtifactIdInput">deploymentSpecDeployArtifactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployPipelineIdInput">deployPipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStagePredecessorCollectionInput">deployStagePredecessorCollectionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStageTypeInput">deployStageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dockerImageDeployArtifactIdInput">dockerImageDeployArtifactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.failurePolicyInput">failurePolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionDeployEnvironmentIdInput">functionDeployEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionTimeoutInSecondsInput">functionTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.greenBackendIpsInput">greenBackendIpsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmChartDeployArtifactIdInput">helmChartDeployArtifactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmCommandArtifactIdsInput">helmCommandArtifactIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isAsyncInput">isAsyncInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isDebugEnabledInput">isDebugEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isForceEnabledInput">isForceEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isUninstallOnStageDeleteInput">isUninstallOnStageDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isValidationEnabledInput">isValidationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.kubernetesManifestDeployArtifactIdsInput">kubernetesManifestDeployArtifactIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.loadBalancerConfigInput">loadBalancerConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxHistoryInput">maxHistoryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxMemoryInMbsInput">maxMemoryInMbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeBlueGreenDeployStageIdInput">okeBlueGreenDeployStageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryDeployStageIdInput">okeCanaryDeployStageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryTrafficShiftDeployStageIdInput">okeCanaryTrafficShiftDeployStageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeClusterDeployEnvironmentIdInput">okeClusterDeployEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.productionLoadBalancerConfigInput">productionLoadBalancerConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.purposeInput">purposeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.releaseNameInput">releaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rollbackPolicyInput">rollbackPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rolloutPolicyInput">rolloutPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setStringInput">setStringInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setValuesInput">setValuesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldCleanupOnFailInput">shouldCleanupOnFailInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldNotWaitInput">shouldNotWaitInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldResetValuesInput">shouldResetValuesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldReuseValuesInput">shouldReuseValuesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipCrdsInput">shouldSkipCrdsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipRenderSubchartNotesInput">shouldSkipRenderSubchartNotesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.testLoadBalancerConfigInput">testLoadBalancerConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.trafficShiftTargetInput">trafficShiftTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.valuesArtifactIdsInput">valuesArtifactIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.waitCriteriaInput">waitCriteriaInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.areHooksEnabled">areHooksEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.commandSpecDeployArtifactId">commandSpecDeployArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupBlueGreenDeploymentDeployStageId">computeInstanceGroupBlueGreenDeploymentDeployStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryDeployStageId">computeInstanceGroupCanaryDeployStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryTrafficShiftDeployStageId">computeInstanceGroupCanaryTrafficShiftDeployStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupDeployEnvironmentId">computeInstanceGroupDeployEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.config">config</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactId">deployArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIds">deployArtifactIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdA">deployEnvironmentIdA</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdB">deployEnvironmentIdB</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deploymentSpecDeployArtifactId">deploymentSpecDeployArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployPipelineId">deployPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStageType">deployStageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dockerImageDeployArtifactId">dockerImageDeployArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionDeployEnvironmentId">functionDeployEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionTimeoutInSeconds">functionTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmChartDeployArtifactId">helmChartDeployArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmCommandArtifactIds">helmCommandArtifactIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isAsync">isAsync</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isDebugEnabled">isDebugEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isForceEnabled">isForceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isUninstallOnStageDelete">isUninstallOnStageDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isValidationEnabled">isValidationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.kubernetesManifestDeployArtifactIds">kubernetesManifestDeployArtifactIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxHistory">maxHistory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxMemoryInMbs">maxMemoryInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeBlueGreenDeployStageId">okeBlueGreenDeployStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryDeployStageId">okeCanaryDeployStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryTrafficShiftDeployStageId">okeCanaryTrafficShiftDeployStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeClusterDeployEnvironmentId">okeClusterDeployEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.purpose">purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.releaseName">releaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldCleanupOnFail">shouldCleanupOnFail</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldNotWait">shouldNotWait</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldResetValues">shouldResetValues</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldReuseValues">shouldReuseValues</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipCrds">shouldSkipCrds</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipRenderSubchartNotes">shouldSkipRenderSubchartNotes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.trafficShiftTarget">trafficShiftTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.valuesArtifactIds">valuesArtifactIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `approvalPolicy`<sup>Required</sup> <a name="approvalPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.approvalPolicy"></a>

```typescript
public readonly approvalPolicy: DevopsDeployStageApprovalPolicyOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference">DevopsDeployStageApprovalPolicyOutputReference</a>

---

##### `blueBackendIps`<sup>Required</sup> <a name="blueBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueBackendIps"></a>

```typescript
public readonly blueBackendIps: DevopsDeployStageBlueBackendIpsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference">DevopsDeployStageBlueBackendIpsOutputReference</a>

---

##### `blueGreenStrategy`<sup>Required</sup> <a name="blueGreenStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueGreenStrategy"></a>

```typescript
public readonly blueGreenStrategy: DevopsDeployStageBlueGreenStrategyOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference">DevopsDeployStageBlueGreenStrategyOutputReference</a>

---

##### `canaryStrategy`<sup>Required</sup> <a name="canaryStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.canaryStrategy"></a>

```typescript
public readonly canaryStrategy: DevopsDeployStageCanaryStrategyOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference">DevopsDeployStageCanaryStrategyOutputReference</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `containerConfig`<sup>Required</sup> <a name="containerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.containerConfig"></a>

```typescript
public readonly containerConfig: DevopsDeployStageContainerConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference">DevopsDeployStageContainerConfigOutputReference</a>

---

##### `deployStagePredecessorCollection`<sup>Required</sup> <a name="deployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStagePredecessorCollection"></a>

```typescript
public readonly deployStagePredecessorCollection: DevopsDeployStageDeployStagePredecessorCollectionOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference">DevopsDeployStageDeployStagePredecessorCollectionOutputReference</a>

---

##### `failurePolicy`<sup>Required</sup> <a name="failurePolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.failurePolicy"></a>

```typescript
public readonly failurePolicy: DevopsDeployStageFailurePolicyOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference">DevopsDeployStageFailurePolicyOutputReference</a>

---

##### `greenBackendIps`<sup>Required</sup> <a name="greenBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.greenBackendIps"></a>

```typescript
public readonly greenBackendIps: DevopsDeployStageGreenBackendIpsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference">DevopsDeployStageGreenBackendIpsOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `loadBalancerConfig`<sup>Required</sup> <a name="loadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.loadBalancerConfig"></a>

```typescript
public readonly loadBalancerConfig: DevopsDeployStageLoadBalancerConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference">DevopsDeployStageLoadBalancerConfigOutputReference</a>

---

##### `productionLoadBalancerConfig`<sup>Required</sup> <a name="productionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.productionLoadBalancerConfig"></a>

```typescript
public readonly productionLoadBalancerConfig: DevopsDeployStageProductionLoadBalancerConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference">DevopsDeployStageProductionLoadBalancerConfigOutputReference</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `rollbackPolicy`<sup>Required</sup> <a name="rollbackPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rollbackPolicy"></a>

```typescript
public readonly rollbackPolicy: DevopsDeployStageRollbackPolicyOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference">DevopsDeployStageRollbackPolicyOutputReference</a>

---

##### `rolloutPolicy`<sup>Required</sup> <a name="rolloutPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rolloutPolicy"></a>

```typescript
public readonly rolloutPolicy: DevopsDeployStageRolloutPolicyOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference">DevopsDeployStageRolloutPolicyOutputReference</a>

---

##### `setString`<sup>Required</sup> <a name="setString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setString"></a>

```typescript
public readonly setString: DevopsDeployStageSetStringOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference">DevopsDeployStageSetStringOutputReference</a>

---

##### `setValues`<sup>Required</sup> <a name="setValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setValues"></a>

```typescript
public readonly setValues: DevopsDeployStageSetValuesOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference">DevopsDeployStageSetValuesOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `testLoadBalancerConfig`<sup>Required</sup> <a name="testLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.testLoadBalancerConfig"></a>

```typescript
public readonly testLoadBalancerConfig: DevopsDeployStageTestLoadBalancerConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference">DevopsDeployStageTestLoadBalancerConfigOutputReference</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeouts"></a>

```typescript
public readonly timeouts: DevopsDeployStageTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference">DevopsDeployStageTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `waitCriteria`<sup>Required</sup> <a name="waitCriteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.waitCriteria"></a>

```typescript
public readonly waitCriteria: DevopsDeployStageWaitCriteriaOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference">DevopsDeployStageWaitCriteriaOutputReference</a>

---

##### `approvalPolicyInput`<sup>Optional</sup> <a name="approvalPolicyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.approvalPolicyInput"></a>

```typescript
public readonly approvalPolicyInput: DevopsDeployStageApprovalPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a>

---

##### `areHooksEnabledInput`<sup>Optional</sup> <a name="areHooksEnabledInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.areHooksEnabledInput"></a>

```typescript
public readonly areHooksEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `blueBackendIpsInput`<sup>Optional</sup> <a name="blueBackendIpsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueBackendIpsInput"></a>

```typescript
public readonly blueBackendIpsInput: DevopsDeployStageBlueBackendIps;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a>

---

##### `blueGreenStrategyInput`<sup>Optional</sup> <a name="blueGreenStrategyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.blueGreenStrategyInput"></a>

```typescript
public readonly blueGreenStrategyInput: DevopsDeployStageBlueGreenStrategy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a>

---

##### `canaryStrategyInput`<sup>Optional</sup> <a name="canaryStrategyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.canaryStrategyInput"></a>

```typescript
public readonly canaryStrategyInput: DevopsDeployStageCanaryStrategy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a>

---

##### `commandSpecDeployArtifactIdInput`<sup>Optional</sup> <a name="commandSpecDeployArtifactIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.commandSpecDeployArtifactIdInput"></a>

```typescript
public readonly commandSpecDeployArtifactIdInput: string;
```

- *Type:* string

---

##### `computeInstanceGroupBlueGreenDeploymentDeployStageIdInput`<sup>Optional</sup> <a name="computeInstanceGroupBlueGreenDeploymentDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupBlueGreenDeploymentDeployStageIdInput"></a>

```typescript
public readonly computeInstanceGroupBlueGreenDeploymentDeployStageIdInput: string;
```

- *Type:* string

---

##### `computeInstanceGroupCanaryDeployStageIdInput`<sup>Optional</sup> <a name="computeInstanceGroupCanaryDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryDeployStageIdInput"></a>

```typescript
public readonly computeInstanceGroupCanaryDeployStageIdInput: string;
```

- *Type:* string

---

##### `computeInstanceGroupCanaryTrafficShiftDeployStageIdInput`<sup>Optional</sup> <a name="computeInstanceGroupCanaryTrafficShiftDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryTrafficShiftDeployStageIdInput"></a>

```typescript
public readonly computeInstanceGroupCanaryTrafficShiftDeployStageIdInput: string;
```

- *Type:* string

---

##### `computeInstanceGroupDeployEnvironmentIdInput`<sup>Optional</sup> <a name="computeInstanceGroupDeployEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupDeployEnvironmentIdInput"></a>

```typescript
public readonly computeInstanceGroupDeployEnvironmentIdInput: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.configInput"></a>

```typescript
public readonly configInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `containerConfigInput`<sup>Optional</sup> <a name="containerConfigInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.containerConfigInput"></a>

```typescript
public readonly containerConfigInput: DevopsDeployStageContainerConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deployArtifactIdInput`<sup>Optional</sup> <a name="deployArtifactIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIdInput"></a>

```typescript
public readonly deployArtifactIdInput: string;
```

- *Type:* string

---

##### `deployArtifactIdsInput`<sup>Optional</sup> <a name="deployArtifactIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIdsInput"></a>

```typescript
public readonly deployArtifactIdsInput: string[];
```

- *Type:* string[]

---

##### `deployEnvironmentIdAInput`<sup>Optional</sup> <a name="deployEnvironmentIdAInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdAInput"></a>

```typescript
public readonly deployEnvironmentIdAInput: string;
```

- *Type:* string

---

##### `deployEnvironmentIdBInput`<sup>Optional</sup> <a name="deployEnvironmentIdBInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdBInput"></a>

```typescript
public readonly deployEnvironmentIdBInput: string;
```

- *Type:* string

---

##### `deploymentSpecDeployArtifactIdInput`<sup>Optional</sup> <a name="deploymentSpecDeployArtifactIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deploymentSpecDeployArtifactIdInput"></a>

```typescript
public readonly deploymentSpecDeployArtifactIdInput: string;
```

- *Type:* string

---

##### `deployPipelineIdInput`<sup>Optional</sup> <a name="deployPipelineIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployPipelineIdInput"></a>

```typescript
public readonly deployPipelineIdInput: string;
```

- *Type:* string

---

##### `deployStagePredecessorCollectionInput`<sup>Optional</sup> <a name="deployStagePredecessorCollectionInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStagePredecessorCollectionInput"></a>

```typescript
public readonly deployStagePredecessorCollectionInput: DevopsDeployStageDeployStagePredecessorCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a>

---

##### `deployStageTypeInput`<sup>Optional</sup> <a name="deployStageTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStageTypeInput"></a>

```typescript
public readonly deployStageTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `dockerImageDeployArtifactIdInput`<sup>Optional</sup> <a name="dockerImageDeployArtifactIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dockerImageDeployArtifactIdInput"></a>

```typescript
public readonly dockerImageDeployArtifactIdInput: string;
```

- *Type:* string

---

##### `failurePolicyInput`<sup>Optional</sup> <a name="failurePolicyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.failurePolicyInput"></a>

```typescript
public readonly failurePolicyInput: DevopsDeployStageFailurePolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `functionDeployEnvironmentIdInput`<sup>Optional</sup> <a name="functionDeployEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionDeployEnvironmentIdInput"></a>

```typescript
public readonly functionDeployEnvironmentIdInput: string;
```

- *Type:* string

---

##### `functionTimeoutInSecondsInput`<sup>Optional</sup> <a name="functionTimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionTimeoutInSecondsInput"></a>

```typescript
public readonly functionTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `greenBackendIpsInput`<sup>Optional</sup> <a name="greenBackendIpsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.greenBackendIpsInput"></a>

```typescript
public readonly greenBackendIpsInput: DevopsDeployStageGreenBackendIps;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a>

---

##### `helmChartDeployArtifactIdInput`<sup>Optional</sup> <a name="helmChartDeployArtifactIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmChartDeployArtifactIdInput"></a>

```typescript
public readonly helmChartDeployArtifactIdInput: string;
```

- *Type:* string

---

##### `helmCommandArtifactIdsInput`<sup>Optional</sup> <a name="helmCommandArtifactIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmCommandArtifactIdsInput"></a>

```typescript
public readonly helmCommandArtifactIdsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isAsyncInput`<sup>Optional</sup> <a name="isAsyncInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isAsyncInput"></a>

```typescript
public readonly isAsyncInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDebugEnabledInput`<sup>Optional</sup> <a name="isDebugEnabledInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isDebugEnabledInput"></a>

```typescript
public readonly isDebugEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isForceEnabledInput`<sup>Optional</sup> <a name="isForceEnabledInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isForceEnabledInput"></a>

```typescript
public readonly isForceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUninstallOnStageDeleteInput`<sup>Optional</sup> <a name="isUninstallOnStageDeleteInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isUninstallOnStageDeleteInput"></a>

```typescript
public readonly isUninstallOnStageDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isValidationEnabledInput`<sup>Optional</sup> <a name="isValidationEnabledInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isValidationEnabledInput"></a>

```typescript
public readonly isValidationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kubernetesManifestDeployArtifactIdsInput`<sup>Optional</sup> <a name="kubernetesManifestDeployArtifactIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.kubernetesManifestDeployArtifactIdsInput"></a>

```typescript
public readonly kubernetesManifestDeployArtifactIdsInput: string[];
```

- *Type:* string[]

---

##### `loadBalancerConfigInput`<sup>Optional</sup> <a name="loadBalancerConfigInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.loadBalancerConfigInput"></a>

```typescript
public readonly loadBalancerConfigInput: DevopsDeployStageLoadBalancerConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a>

---

##### `maxHistoryInput`<sup>Optional</sup> <a name="maxHistoryInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxHistoryInput"></a>

```typescript
public readonly maxHistoryInput: number;
```

- *Type:* number

---

##### `maxMemoryInMbsInput`<sup>Optional</sup> <a name="maxMemoryInMbsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxMemoryInMbsInput"></a>

```typescript
public readonly maxMemoryInMbsInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `okeBlueGreenDeployStageIdInput`<sup>Optional</sup> <a name="okeBlueGreenDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeBlueGreenDeployStageIdInput"></a>

```typescript
public readonly okeBlueGreenDeployStageIdInput: string;
```

- *Type:* string

---

##### `okeCanaryDeployStageIdInput`<sup>Optional</sup> <a name="okeCanaryDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryDeployStageIdInput"></a>

```typescript
public readonly okeCanaryDeployStageIdInput: string;
```

- *Type:* string

---

##### `okeCanaryTrafficShiftDeployStageIdInput`<sup>Optional</sup> <a name="okeCanaryTrafficShiftDeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryTrafficShiftDeployStageIdInput"></a>

```typescript
public readonly okeCanaryTrafficShiftDeployStageIdInput: string;
```

- *Type:* string

---

##### `okeClusterDeployEnvironmentIdInput`<sup>Optional</sup> <a name="okeClusterDeployEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeClusterDeployEnvironmentIdInput"></a>

```typescript
public readonly okeClusterDeployEnvironmentIdInput: string;
```

- *Type:* string

---

##### `productionLoadBalancerConfigInput`<sup>Optional</sup> <a name="productionLoadBalancerConfigInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.productionLoadBalancerConfigInput"></a>

```typescript
public readonly productionLoadBalancerConfigInput: DevopsDeployStageProductionLoadBalancerConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a>

---

##### `purposeInput`<sup>Optional</sup> <a name="purposeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.purposeInput"></a>

```typescript
public readonly purposeInput: string;
```

- *Type:* string

---

##### `releaseNameInput`<sup>Optional</sup> <a name="releaseNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.releaseNameInput"></a>

```typescript
public readonly releaseNameInput: string;
```

- *Type:* string

---

##### `rollbackPolicyInput`<sup>Optional</sup> <a name="rollbackPolicyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rollbackPolicyInput"></a>

```typescript
public readonly rollbackPolicyInput: DevopsDeployStageRollbackPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a>

---

##### `rolloutPolicyInput`<sup>Optional</sup> <a name="rolloutPolicyInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.rolloutPolicyInput"></a>

```typescript
public readonly rolloutPolicyInput: DevopsDeployStageRolloutPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a>

---

##### `setStringInput`<sup>Optional</sup> <a name="setStringInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setStringInput"></a>

```typescript
public readonly setStringInput: DevopsDeployStageSetString;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a>

---

##### `setValuesInput`<sup>Optional</sup> <a name="setValuesInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.setValuesInput"></a>

```typescript
public readonly setValuesInput: DevopsDeployStageSetValues;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a>

---

##### `shouldCleanupOnFailInput`<sup>Optional</sup> <a name="shouldCleanupOnFailInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldCleanupOnFailInput"></a>

```typescript
public readonly shouldCleanupOnFailInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldNotWaitInput`<sup>Optional</sup> <a name="shouldNotWaitInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldNotWaitInput"></a>

```typescript
public readonly shouldNotWaitInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldResetValuesInput`<sup>Optional</sup> <a name="shouldResetValuesInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldResetValuesInput"></a>

```typescript
public readonly shouldResetValuesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldReuseValuesInput`<sup>Optional</sup> <a name="shouldReuseValuesInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldReuseValuesInput"></a>

```typescript
public readonly shouldReuseValuesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldSkipCrdsInput`<sup>Optional</sup> <a name="shouldSkipCrdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipCrdsInput"></a>

```typescript
public readonly shouldSkipCrdsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldSkipRenderSubchartNotesInput`<sup>Optional</sup> <a name="shouldSkipRenderSubchartNotesInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipRenderSubchartNotesInput"></a>

```typescript
public readonly shouldSkipRenderSubchartNotesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `testLoadBalancerConfigInput`<sup>Optional</sup> <a name="testLoadBalancerConfigInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.testLoadBalancerConfigInput"></a>

```typescript
public readonly testLoadBalancerConfigInput: DevopsDeployStageTestLoadBalancerConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a>

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutInSecondsInput"></a>

```typescript
public readonly timeoutInSecondsInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DevopsDeployStageTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a>

---

##### `trafficShiftTargetInput`<sup>Optional</sup> <a name="trafficShiftTargetInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.trafficShiftTargetInput"></a>

```typescript
public readonly trafficShiftTargetInput: string;
```

- *Type:* string

---

##### `valuesArtifactIdsInput`<sup>Optional</sup> <a name="valuesArtifactIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.valuesArtifactIdsInput"></a>

```typescript
public readonly valuesArtifactIdsInput: string[];
```

- *Type:* string[]

---

##### `waitCriteriaInput`<sup>Optional</sup> <a name="waitCriteriaInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.waitCriteriaInput"></a>

```typescript
public readonly waitCriteriaInput: DevopsDeployStageWaitCriteria;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a>

---

##### `areHooksEnabled`<sup>Required</sup> <a name="areHooksEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.areHooksEnabled"></a>

```typescript
public readonly areHooksEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `commandSpecDeployArtifactId`<sup>Required</sup> <a name="commandSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.commandSpecDeployArtifactId"></a>

```typescript
public readonly commandSpecDeployArtifactId: string;
```

- *Type:* string

---

##### `computeInstanceGroupBlueGreenDeploymentDeployStageId`<sup>Required</sup> <a name="computeInstanceGroupBlueGreenDeploymentDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupBlueGreenDeploymentDeployStageId"></a>

```typescript
public readonly computeInstanceGroupBlueGreenDeploymentDeployStageId: string;
```

- *Type:* string

---

##### `computeInstanceGroupCanaryDeployStageId`<sup>Required</sup> <a name="computeInstanceGroupCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryDeployStageId"></a>

```typescript
public readonly computeInstanceGroupCanaryDeployStageId: string;
```

- *Type:* string

---

##### `computeInstanceGroupCanaryTrafficShiftDeployStageId`<sup>Required</sup> <a name="computeInstanceGroupCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupCanaryTrafficShiftDeployStageId"></a>

```typescript
public readonly computeInstanceGroupCanaryTrafficShiftDeployStageId: string;
```

- *Type:* string

---

##### `computeInstanceGroupDeployEnvironmentId`<sup>Required</sup> <a name="computeInstanceGroupDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.computeInstanceGroupDeployEnvironmentId"></a>

```typescript
public readonly computeInstanceGroupDeployEnvironmentId: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.config"></a>

```typescript
public readonly config: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deployArtifactId`<sup>Required</sup> <a name="deployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactId"></a>

```typescript
public readonly deployArtifactId: string;
```

- *Type:* string

---

##### `deployArtifactIds`<sup>Required</sup> <a name="deployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployArtifactIds"></a>

```typescript
public readonly deployArtifactIds: string[];
```

- *Type:* string[]

---

##### `deployEnvironmentIdA`<sup>Required</sup> <a name="deployEnvironmentIdA" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdA"></a>

```typescript
public readonly deployEnvironmentIdA: string;
```

- *Type:* string

---

##### `deployEnvironmentIdB`<sup>Required</sup> <a name="deployEnvironmentIdB" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployEnvironmentIdB"></a>

```typescript
public readonly deployEnvironmentIdB: string;
```

- *Type:* string

---

##### `deploymentSpecDeployArtifactId`<sup>Required</sup> <a name="deploymentSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deploymentSpecDeployArtifactId"></a>

```typescript
public readonly deploymentSpecDeployArtifactId: string;
```

- *Type:* string

---

##### `deployPipelineId`<sup>Required</sup> <a name="deployPipelineId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployPipelineId"></a>

```typescript
public readonly deployPipelineId: string;
```

- *Type:* string

---

##### `deployStageType`<sup>Required</sup> <a name="deployStageType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.deployStageType"></a>

```typescript
public readonly deployStageType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `dockerImageDeployArtifactId`<sup>Required</sup> <a name="dockerImageDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.dockerImageDeployArtifactId"></a>

```typescript
public readonly dockerImageDeployArtifactId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `functionDeployEnvironmentId`<sup>Required</sup> <a name="functionDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionDeployEnvironmentId"></a>

```typescript
public readonly functionDeployEnvironmentId: string;
```

- *Type:* string

---

##### `functionTimeoutInSeconds`<sup>Required</sup> <a name="functionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.functionTimeoutInSeconds"></a>

```typescript
public readonly functionTimeoutInSeconds: number;
```

- *Type:* number

---

##### `helmChartDeployArtifactId`<sup>Required</sup> <a name="helmChartDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmChartDeployArtifactId"></a>

```typescript
public readonly helmChartDeployArtifactId: string;
```

- *Type:* string

---

##### `helmCommandArtifactIds`<sup>Required</sup> <a name="helmCommandArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.helmCommandArtifactIds"></a>

```typescript
public readonly helmCommandArtifactIds: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAsync`<sup>Required</sup> <a name="isAsync" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isAsync"></a>

```typescript
public readonly isAsync: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDebugEnabled`<sup>Required</sup> <a name="isDebugEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isDebugEnabled"></a>

```typescript
public readonly isDebugEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isForceEnabled`<sup>Required</sup> <a name="isForceEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isForceEnabled"></a>

```typescript
public readonly isForceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUninstallOnStageDelete`<sup>Required</sup> <a name="isUninstallOnStageDelete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isUninstallOnStageDelete"></a>

```typescript
public readonly isUninstallOnStageDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isValidationEnabled`<sup>Required</sup> <a name="isValidationEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.isValidationEnabled"></a>

```typescript
public readonly isValidationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kubernetesManifestDeployArtifactIds`<sup>Required</sup> <a name="kubernetesManifestDeployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.kubernetesManifestDeployArtifactIds"></a>

```typescript
public readonly kubernetesManifestDeployArtifactIds: string[];
```

- *Type:* string[]

---

##### `maxHistory`<sup>Required</sup> <a name="maxHistory" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxHistory"></a>

```typescript
public readonly maxHistory: number;
```

- *Type:* number

---

##### `maxMemoryInMbs`<sup>Required</sup> <a name="maxMemoryInMbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.maxMemoryInMbs"></a>

```typescript
public readonly maxMemoryInMbs: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `okeBlueGreenDeployStageId`<sup>Required</sup> <a name="okeBlueGreenDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeBlueGreenDeployStageId"></a>

```typescript
public readonly okeBlueGreenDeployStageId: string;
```

- *Type:* string

---

##### `okeCanaryDeployStageId`<sup>Required</sup> <a name="okeCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryDeployStageId"></a>

```typescript
public readonly okeCanaryDeployStageId: string;
```

- *Type:* string

---

##### `okeCanaryTrafficShiftDeployStageId`<sup>Required</sup> <a name="okeCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeCanaryTrafficShiftDeployStageId"></a>

```typescript
public readonly okeCanaryTrafficShiftDeployStageId: string;
```

- *Type:* string

---

##### `okeClusterDeployEnvironmentId`<sup>Required</sup> <a name="okeClusterDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.okeClusterDeployEnvironmentId"></a>

```typescript
public readonly okeClusterDeployEnvironmentId: string;
```

- *Type:* string

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

---

##### `releaseName`<sup>Required</sup> <a name="releaseName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.releaseName"></a>

```typescript
public readonly releaseName: string;
```

- *Type:* string

---

##### `shouldCleanupOnFail`<sup>Required</sup> <a name="shouldCleanupOnFail" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldCleanupOnFail"></a>

```typescript
public readonly shouldCleanupOnFail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldNotWait`<sup>Required</sup> <a name="shouldNotWait" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldNotWait"></a>

```typescript
public readonly shouldNotWait: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldResetValues`<sup>Required</sup> <a name="shouldResetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldResetValues"></a>

```typescript
public readonly shouldResetValues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldReuseValues`<sup>Required</sup> <a name="shouldReuseValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldReuseValues"></a>

```typescript
public readonly shouldReuseValues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldSkipCrds`<sup>Required</sup> <a name="shouldSkipCrds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipCrds"></a>

```typescript
public readonly shouldSkipCrds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldSkipRenderSubchartNotes`<sup>Required</sup> <a name="shouldSkipRenderSubchartNotes" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.shouldSkipRenderSubchartNotes"></a>

```typescript
public readonly shouldSkipRenderSubchartNotes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `trafficShiftTarget`<sup>Required</sup> <a name="trafficShiftTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.trafficShiftTarget"></a>

```typescript
public readonly trafficShiftTarget: string;
```

- *Type:* string

---

##### `valuesArtifactIds`<sup>Required</sup> <a name="valuesArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.valuesArtifactIds"></a>

```typescript
public readonly valuesArtifactIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsDeployStageApprovalPolicy <a name="DevopsDeployStageApprovalPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

const devopsDeployStageApprovalPolicy: devopsDeployStage.DevopsDeployStageApprovalPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.property.approvalPolicyType">approvalPolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#approval_policy_type DevopsDeployStage#approval_policy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.property.numberOfApprovalsRequired">numberOfApprovalsRequired</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#number_of_approvals_required DevopsDeployStage#number_of_approvals_required}. |

---

##### `approvalPolicyType`<sup>Required</sup> <a name="approvalPolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.property.approvalPolicyType"></a>

```typescript
public readonly approvalPolicyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#approval_policy_type DevopsDeployStage#approval_policy_type}.

---

##### `numberOfApprovalsRequired`<sup>Required</sup> <a name="numberOfApprovalsRequired" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy.property.numberOfApprovalsRequired"></a>

```typescript
public readonly numberOfApprovalsRequired: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#number_of_approvals_required DevopsDeployStage#number_of_approvals_required}.

---

### DevopsDeployStageBlueBackendIps <a name="DevopsDeployStageBlueBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

const devopsDeployStageBlueBackendIps: devopsDeployStage.DevopsDeployStageBlueBackendIps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps.property.items">items</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}. |

---

##### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps.property.items"></a>

```typescript
public readonly items: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}.

---

### DevopsDeployStageBlueGreenStrategy <a name="DevopsDeployStageBlueGreenStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

const devopsDeployStageBlueGreenStrategy: devopsDeployStage.DevopsDeployStageBlueGreenStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.ingressName">ingressName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.namespaceA">namespaceA</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace_a DevopsDeployStage#namespace_a}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.namespaceB">namespaceB</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace_b DevopsDeployStage#namespace_b}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.strategyType">strategyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}. |

---

##### `ingressName`<sup>Required</sup> <a name="ingressName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.ingressName"></a>

```typescript
public readonly ingressName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}.

---

##### `namespaceA`<sup>Required</sup> <a name="namespaceA" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.namespaceA"></a>

```typescript
public readonly namespaceA: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace_a DevopsDeployStage#namespace_a}.

---

##### `namespaceB`<sup>Required</sup> <a name="namespaceB" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.namespaceB"></a>

```typescript
public readonly namespaceB: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace_b DevopsDeployStage#namespace_b}.

---

##### `strategyType`<sup>Required</sup> <a name="strategyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy.property.strategyType"></a>

```typescript
public readonly strategyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}.

---

### DevopsDeployStageCanaryStrategy <a name="DevopsDeployStageCanaryStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

const devopsDeployStageCanaryStrategy: devopsDeployStage.DevopsDeployStageCanaryStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.ingressName">ingressName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.strategyType">strategyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}. |

---

##### `ingressName`<sup>Required</sup> <a name="ingressName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.ingressName"></a>

```typescript
public readonly ingressName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}.

---

##### `strategyType`<sup>Required</sup> <a name="strategyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy.property.strategyType"></a>

```typescript
public readonly strategyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}.

---

### DevopsDeployStageConfig <a name="DevopsDeployStageConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

const devopsDeployStageConfig: devopsDeployStage.DevopsDeployStageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployPipelineId">deployPipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_pipeline_id DevopsDeployStage#deploy_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployStagePredecessorCollection">deployStagePredecessorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a></code> | deploy_stage_predecessor_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployStageType">deployStageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_stage_type DevopsDeployStage#deploy_stage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.approvalPolicy">approvalPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a></code> | approval_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.areHooksEnabled">areHooksEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#are_hooks_enabled DevopsDeployStage#are_hooks_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.blueBackendIps">blueBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a></code> | blue_backend_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.blueGreenStrategy">blueGreenStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a></code> | blue_green_strategy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.canaryStrategy">canaryStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a></code> | canary_strategy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.commandSpecDeployArtifactId">commandSpecDeployArtifactId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#command_spec_deploy_artifact_id DevopsDeployStage#command_spec_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupBlueGreenDeploymentDeployStageId">computeInstanceGroupBlueGreenDeploymentDeployStageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_blue_green_deployment_deploy_stage_id DevopsDeployStage#compute_instance_group_blue_green_deployment_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupCanaryDeployStageId">computeInstanceGroupCanaryDeployStageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupCanaryTrafficShiftDeployStageId">computeInstanceGroupCanaryTrafficShiftDeployStageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_traffic_shift_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_traffic_shift_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupDeployEnvironmentId">computeInstanceGroupDeployEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_deploy_environment_id DevopsDeployStage#compute_instance_group_deploy_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.config">config</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#config DevopsDeployStage#config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.containerConfig">containerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a></code> | container_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#defined_tags DevopsDeployStage#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployArtifactId">deployArtifactId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_id DevopsDeployStage#deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployArtifactIds">deployArtifactIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_ids DevopsDeployStage#deploy_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployEnvironmentIdA">deployEnvironmentIdA</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_a DevopsDeployStage#deploy_environment_id_a}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployEnvironmentIdB">deployEnvironmentIdB</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_b DevopsDeployStage#deploy_environment_id_b}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deploymentSpecDeployArtifactId">deploymentSpecDeployArtifactId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deployment_spec_deploy_artifact_id DevopsDeployStage#deployment_spec_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#description DevopsDeployStage#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#display_name DevopsDeployStage#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.dockerImageDeployArtifactId">dockerImageDeployArtifactId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#docker_image_deploy_artifact_id DevopsDeployStage#docker_image_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.failurePolicy">failurePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a></code> | failure_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#freeform_tags DevopsDeployStage#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.functionDeployEnvironmentId">functionDeployEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_deploy_environment_id DevopsDeployStage#function_deploy_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.functionTimeoutInSeconds">functionTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_timeout_in_seconds DevopsDeployStage#function_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.greenBackendIps">greenBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a></code> | green_backend_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.helmChartDeployArtifactId">helmChartDeployArtifactId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_chart_deploy_artifact_id DevopsDeployStage#helm_chart_deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.helmCommandArtifactIds">helmCommandArtifactIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_command_artifact_ids DevopsDeployStage#helm_command_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isAsync">isAsync</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_async DevopsDeployStage#is_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isDebugEnabled">isDebugEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_debug_enabled DevopsDeployStage#is_debug_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isForceEnabled">isForceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_force_enabled DevopsDeployStage#is_force_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isUninstallOnStageDelete">isUninstallOnStageDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_uninstall_on_stage_delete DevopsDeployStage#is_uninstall_on_stage_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isValidationEnabled">isValidationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_validation_enabled DevopsDeployStage#is_validation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.kubernetesManifestDeployArtifactIds">kubernetesManifestDeployArtifactIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#kubernetes_manifest_deploy_artifact_ids DevopsDeployStage#kubernetes_manifest_deploy_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.loadBalancerConfig">loadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a></code> | load_balancer_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.maxHistory">maxHistory</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_history DevopsDeployStage#max_history}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.maxMemoryInMbs">maxMemoryInMbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_memory_in_mbs DevopsDeployStage#max_memory_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeBlueGreenDeployStageId">okeBlueGreenDeployStageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_blue_green_deploy_stage_id DevopsDeployStage#oke_blue_green_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeCanaryDeployStageId">okeCanaryDeployStageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_deploy_stage_id DevopsDeployStage#oke_canary_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeCanaryTrafficShiftDeployStageId">okeCanaryTrafficShiftDeployStageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_traffic_shift_deploy_stage_id DevopsDeployStage#oke_canary_traffic_shift_deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeClusterDeployEnvironmentId">okeClusterDeployEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_cluster_deploy_environment_id DevopsDeployStage#oke_cluster_deploy_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.productionLoadBalancerConfig">productionLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a></code> | production_load_balancer_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.purpose">purpose</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#purpose DevopsDeployStage#purpose}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.releaseName">releaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#release_name DevopsDeployStage#release_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.rollbackPolicy">rollbackPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a></code> | rollback_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.rolloutPolicy">rolloutPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a></code> | rollout_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.setString">setString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a></code> | set_string block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.setValues">setValues</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a></code> | set_values block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldCleanupOnFail">shouldCleanupOnFail</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_cleanup_on_fail DevopsDeployStage#should_cleanup_on_fail}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldNotWait">shouldNotWait</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_not_wait DevopsDeployStage#should_not_wait}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldResetValues">shouldResetValues</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reset_values DevopsDeployStage#should_reset_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldReuseValues">shouldReuseValues</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reuse_values DevopsDeployStage#should_reuse_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldSkipCrds">shouldSkipCrds</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_crds DevopsDeployStage#should_skip_crds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldSkipRenderSubchartNotes">shouldSkipRenderSubchartNotes</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_render_subchart_notes DevopsDeployStage#should_skip_render_subchart_notes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.testLoadBalancerConfig">testLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a></code> | test_load_balancer_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#timeout_in_seconds DevopsDeployStage#timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.trafficShiftTarget">trafficShiftTarget</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#traffic_shift_target DevopsDeployStage#traffic_shift_target}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.valuesArtifactIds">valuesArtifactIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#values_artifact_ids DevopsDeployStage#values_artifact_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.waitCriteria">waitCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a></code> | wait_criteria block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deployPipelineId`<sup>Required</sup> <a name="deployPipelineId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployPipelineId"></a>

```typescript
public readonly deployPipelineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_pipeline_id DevopsDeployStage#deploy_pipeline_id}.

---

##### `deployStagePredecessorCollection`<sup>Required</sup> <a name="deployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployStagePredecessorCollection"></a>

```typescript
public readonly deployStagePredecessorCollection: DevopsDeployStageDeployStagePredecessorCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a>

deploy_stage_predecessor_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_stage_predecessor_collection DevopsDeployStage#deploy_stage_predecessor_collection}

---

##### `deployStageType`<sup>Required</sup> <a name="deployStageType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployStageType"></a>

```typescript
public readonly deployStageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_stage_type DevopsDeployStage#deploy_stage_type}.

---

##### `approvalPolicy`<sup>Optional</sup> <a name="approvalPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.approvalPolicy"></a>

```typescript
public readonly approvalPolicy: DevopsDeployStageApprovalPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a>

approval_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#approval_policy DevopsDeployStage#approval_policy}

---

##### `areHooksEnabled`<sup>Optional</sup> <a name="areHooksEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.areHooksEnabled"></a>

```typescript
public readonly areHooksEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#are_hooks_enabled DevopsDeployStage#are_hooks_enabled}.

---

##### `blueBackendIps`<sup>Optional</sup> <a name="blueBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.blueBackendIps"></a>

```typescript
public readonly blueBackendIps: DevopsDeployStageBlueBackendIps;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a>

blue_backend_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#blue_backend_ips DevopsDeployStage#blue_backend_ips}

---

##### `blueGreenStrategy`<sup>Optional</sup> <a name="blueGreenStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.blueGreenStrategy"></a>

```typescript
public readonly blueGreenStrategy: DevopsDeployStageBlueGreenStrategy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a>

blue_green_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#blue_green_strategy DevopsDeployStage#blue_green_strategy}

---

##### `canaryStrategy`<sup>Optional</sup> <a name="canaryStrategy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.canaryStrategy"></a>

```typescript
public readonly canaryStrategy: DevopsDeployStageCanaryStrategy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a>

canary_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#canary_strategy DevopsDeployStage#canary_strategy}

---

##### `commandSpecDeployArtifactId`<sup>Optional</sup> <a name="commandSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.commandSpecDeployArtifactId"></a>

```typescript
public readonly commandSpecDeployArtifactId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#command_spec_deploy_artifact_id DevopsDeployStage#command_spec_deploy_artifact_id}.

---

##### `computeInstanceGroupBlueGreenDeploymentDeployStageId`<sup>Optional</sup> <a name="computeInstanceGroupBlueGreenDeploymentDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupBlueGreenDeploymentDeployStageId"></a>

```typescript
public readonly computeInstanceGroupBlueGreenDeploymentDeployStageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_blue_green_deployment_deploy_stage_id DevopsDeployStage#compute_instance_group_blue_green_deployment_deploy_stage_id}.

---

##### `computeInstanceGroupCanaryDeployStageId`<sup>Optional</sup> <a name="computeInstanceGroupCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupCanaryDeployStageId"></a>

```typescript
public readonly computeInstanceGroupCanaryDeployStageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_deploy_stage_id}.

---

##### `computeInstanceGroupCanaryTrafficShiftDeployStageId`<sup>Optional</sup> <a name="computeInstanceGroupCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupCanaryTrafficShiftDeployStageId"></a>

```typescript
public readonly computeInstanceGroupCanaryTrafficShiftDeployStageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_traffic_shift_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_traffic_shift_deploy_stage_id}.

---

##### `computeInstanceGroupDeployEnvironmentId`<sup>Optional</sup> <a name="computeInstanceGroupDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.computeInstanceGroupDeployEnvironmentId"></a>

```typescript
public readonly computeInstanceGroupDeployEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compute_instance_group_deploy_environment_id DevopsDeployStage#compute_instance_group_deploy_environment_id}.

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.config"></a>

```typescript
public readonly config: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#config DevopsDeployStage#config}.

---

##### `containerConfig`<sup>Optional</sup> <a name="containerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.containerConfig"></a>

```typescript
public readonly containerConfig: DevopsDeployStageContainerConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a>

container_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#container_config DevopsDeployStage#container_config}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#defined_tags DevopsDeployStage#defined_tags}.

---

##### `deployArtifactId`<sup>Optional</sup> <a name="deployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployArtifactId"></a>

```typescript
public readonly deployArtifactId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_id DevopsDeployStage#deploy_artifact_id}.

---

##### `deployArtifactIds`<sup>Optional</sup> <a name="deployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployArtifactIds"></a>

```typescript
public readonly deployArtifactIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_artifact_ids DevopsDeployStage#deploy_artifact_ids}.

---

##### `deployEnvironmentIdA`<sup>Optional</sup> <a name="deployEnvironmentIdA" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployEnvironmentIdA"></a>

```typescript
public readonly deployEnvironmentIdA: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_a DevopsDeployStage#deploy_environment_id_a}.

---

##### `deployEnvironmentIdB`<sup>Optional</sup> <a name="deployEnvironmentIdB" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deployEnvironmentIdB"></a>

```typescript
public readonly deployEnvironmentIdB: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deploy_environment_id_b DevopsDeployStage#deploy_environment_id_b}.

---

##### `deploymentSpecDeployArtifactId`<sup>Optional</sup> <a name="deploymentSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.deploymentSpecDeployArtifactId"></a>

```typescript
public readonly deploymentSpecDeployArtifactId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#deployment_spec_deploy_artifact_id DevopsDeployStage#deployment_spec_deploy_artifact_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#description DevopsDeployStage#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#display_name DevopsDeployStage#display_name}.

---

##### `dockerImageDeployArtifactId`<sup>Optional</sup> <a name="dockerImageDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.dockerImageDeployArtifactId"></a>

```typescript
public readonly dockerImageDeployArtifactId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#docker_image_deploy_artifact_id DevopsDeployStage#docker_image_deploy_artifact_id}.

---

##### `failurePolicy`<sup>Optional</sup> <a name="failurePolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.failurePolicy"></a>

```typescript
public readonly failurePolicy: DevopsDeployStageFailurePolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a>

failure_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_policy DevopsDeployStage#failure_policy}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#freeform_tags DevopsDeployStage#freeform_tags}.

---

##### `functionDeployEnvironmentId`<sup>Optional</sup> <a name="functionDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.functionDeployEnvironmentId"></a>

```typescript
public readonly functionDeployEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_deploy_environment_id DevopsDeployStage#function_deploy_environment_id}.

---

##### `functionTimeoutInSeconds`<sup>Optional</sup> <a name="functionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.functionTimeoutInSeconds"></a>

```typescript
public readonly functionTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#function_timeout_in_seconds DevopsDeployStage#function_timeout_in_seconds}.

---

##### `greenBackendIps`<sup>Optional</sup> <a name="greenBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.greenBackendIps"></a>

```typescript
public readonly greenBackendIps: DevopsDeployStageGreenBackendIps;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a>

green_backend_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#green_backend_ips DevopsDeployStage#green_backend_ips}

---

##### `helmChartDeployArtifactId`<sup>Optional</sup> <a name="helmChartDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.helmChartDeployArtifactId"></a>

```typescript
public readonly helmChartDeployArtifactId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_chart_deploy_artifact_id DevopsDeployStage#helm_chart_deploy_artifact_id}.

---

##### `helmCommandArtifactIds`<sup>Optional</sup> <a name="helmCommandArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.helmCommandArtifactIds"></a>

```typescript
public readonly helmCommandArtifactIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#helm_command_artifact_ids DevopsDeployStage#helm_command_artifact_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAsync`<sup>Optional</sup> <a name="isAsync" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isAsync"></a>

```typescript
public readonly isAsync: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_async DevopsDeployStage#is_async}.

---

##### `isDebugEnabled`<sup>Optional</sup> <a name="isDebugEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isDebugEnabled"></a>

```typescript
public readonly isDebugEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_debug_enabled DevopsDeployStage#is_debug_enabled}.

---

##### `isForceEnabled`<sup>Optional</sup> <a name="isForceEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isForceEnabled"></a>

```typescript
public readonly isForceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_force_enabled DevopsDeployStage#is_force_enabled}.

---

##### `isUninstallOnStageDelete`<sup>Optional</sup> <a name="isUninstallOnStageDelete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isUninstallOnStageDelete"></a>

```typescript
public readonly isUninstallOnStageDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_uninstall_on_stage_delete DevopsDeployStage#is_uninstall_on_stage_delete}.

---

##### `isValidationEnabled`<sup>Optional</sup> <a name="isValidationEnabled" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.isValidationEnabled"></a>

```typescript
public readonly isValidationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#is_validation_enabled DevopsDeployStage#is_validation_enabled}.

---

##### `kubernetesManifestDeployArtifactIds`<sup>Optional</sup> <a name="kubernetesManifestDeployArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.kubernetesManifestDeployArtifactIds"></a>

```typescript
public readonly kubernetesManifestDeployArtifactIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#kubernetes_manifest_deploy_artifact_ids DevopsDeployStage#kubernetes_manifest_deploy_artifact_ids}.

---

##### `loadBalancerConfig`<sup>Optional</sup> <a name="loadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.loadBalancerConfig"></a>

```typescript
public readonly loadBalancerConfig: DevopsDeployStageLoadBalancerConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a>

load_balancer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_config DevopsDeployStage#load_balancer_config}

---

##### `maxHistory`<sup>Optional</sup> <a name="maxHistory" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.maxHistory"></a>

```typescript
public readonly maxHistory: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_history DevopsDeployStage#max_history}.

---

##### `maxMemoryInMbs`<sup>Optional</sup> <a name="maxMemoryInMbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.maxMemoryInMbs"></a>

```typescript
public readonly maxMemoryInMbs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#max_memory_in_mbs DevopsDeployStage#max_memory_in_mbs}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}.

---

##### `okeBlueGreenDeployStageId`<sup>Optional</sup> <a name="okeBlueGreenDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeBlueGreenDeployStageId"></a>

```typescript
public readonly okeBlueGreenDeployStageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_blue_green_deploy_stage_id DevopsDeployStage#oke_blue_green_deploy_stage_id}.

---

##### `okeCanaryDeployStageId`<sup>Optional</sup> <a name="okeCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeCanaryDeployStageId"></a>

```typescript
public readonly okeCanaryDeployStageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_deploy_stage_id DevopsDeployStage#oke_canary_deploy_stage_id}.

---

##### `okeCanaryTrafficShiftDeployStageId`<sup>Optional</sup> <a name="okeCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeCanaryTrafficShiftDeployStageId"></a>

```typescript
public readonly okeCanaryTrafficShiftDeployStageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_canary_traffic_shift_deploy_stage_id DevopsDeployStage#oke_canary_traffic_shift_deploy_stage_id}.

---

##### `okeClusterDeployEnvironmentId`<sup>Optional</sup> <a name="okeClusterDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.okeClusterDeployEnvironmentId"></a>

```typescript
public readonly okeClusterDeployEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#oke_cluster_deploy_environment_id DevopsDeployStage#oke_cluster_deploy_environment_id}.

---

##### `productionLoadBalancerConfig`<sup>Optional</sup> <a name="productionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.productionLoadBalancerConfig"></a>

```typescript
public readonly productionLoadBalancerConfig: DevopsDeployStageProductionLoadBalancerConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a>

production_load_balancer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#production_load_balancer_config DevopsDeployStage#production_load_balancer_config}

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#purpose DevopsDeployStage#purpose}.

---

##### `releaseName`<sup>Optional</sup> <a name="releaseName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.releaseName"></a>

```typescript
public readonly releaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#release_name DevopsDeployStage#release_name}.

---

##### `rollbackPolicy`<sup>Optional</sup> <a name="rollbackPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.rollbackPolicy"></a>

```typescript
public readonly rollbackPolicy: DevopsDeployStageRollbackPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a>

rollback_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#rollback_policy DevopsDeployStage#rollback_policy}

---

##### `rolloutPolicy`<sup>Optional</sup> <a name="rolloutPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.rolloutPolicy"></a>

```typescript
public readonly rolloutPolicy: DevopsDeployStageRolloutPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a>

rollout_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#rollout_policy DevopsDeployStage#rollout_policy}

---

##### `setString`<sup>Optional</sup> <a name="setString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.setString"></a>

```typescript
public readonly setString: DevopsDeployStageSetString;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a>

set_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#set_string DevopsDeployStage#set_string}

---

##### `setValues`<sup>Optional</sup> <a name="setValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.setValues"></a>

```typescript
public readonly setValues: DevopsDeployStageSetValues;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a>

set_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#set_values DevopsDeployStage#set_values}

---

##### `shouldCleanupOnFail`<sup>Optional</sup> <a name="shouldCleanupOnFail" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldCleanupOnFail"></a>

```typescript
public readonly shouldCleanupOnFail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_cleanup_on_fail DevopsDeployStage#should_cleanup_on_fail}.

---

##### `shouldNotWait`<sup>Optional</sup> <a name="shouldNotWait" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldNotWait"></a>

```typescript
public readonly shouldNotWait: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_not_wait DevopsDeployStage#should_not_wait}.

---

##### `shouldResetValues`<sup>Optional</sup> <a name="shouldResetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldResetValues"></a>

```typescript
public readonly shouldResetValues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reset_values DevopsDeployStage#should_reset_values}.

---

##### `shouldReuseValues`<sup>Optional</sup> <a name="shouldReuseValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldReuseValues"></a>

```typescript
public readonly shouldReuseValues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_reuse_values DevopsDeployStage#should_reuse_values}.

---

##### `shouldSkipCrds`<sup>Optional</sup> <a name="shouldSkipCrds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldSkipCrds"></a>

```typescript
public readonly shouldSkipCrds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_crds DevopsDeployStage#should_skip_crds}.

---

##### `shouldSkipRenderSubchartNotes`<sup>Optional</sup> <a name="shouldSkipRenderSubchartNotes" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.shouldSkipRenderSubchartNotes"></a>

```typescript
public readonly shouldSkipRenderSubchartNotes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#should_skip_render_subchart_notes DevopsDeployStage#should_skip_render_subchart_notes}.

---

##### `testLoadBalancerConfig`<sup>Optional</sup> <a name="testLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.testLoadBalancerConfig"></a>

```typescript
public readonly testLoadBalancerConfig: DevopsDeployStageTestLoadBalancerConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a>

test_load_balancer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#test_load_balancer_config DevopsDeployStage#test_load_balancer_config}

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#timeout_in_seconds DevopsDeployStage#timeout_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DevopsDeployStageTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#timeouts DevopsDeployStage#timeouts}

---

##### `trafficShiftTarget`<sup>Optional</sup> <a name="trafficShiftTarget" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.trafficShiftTarget"></a>

```typescript
public readonly trafficShiftTarget: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#traffic_shift_target DevopsDeployStage#traffic_shift_target}.

---

##### `valuesArtifactIds`<sup>Optional</sup> <a name="valuesArtifactIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.valuesArtifactIds"></a>

```typescript
public readonly valuesArtifactIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#values_artifact_ids DevopsDeployStage#values_artifact_ids}.

---

##### `waitCriteria`<sup>Optional</sup> <a name="waitCriteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageConfig.property.waitCriteria"></a>

```typescript
public readonly waitCriteria: DevopsDeployStageWaitCriteria;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a>

wait_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_criteria DevopsDeployStage#wait_criteria}

---

### DevopsDeployStageContainerConfig <a name="DevopsDeployStageContainerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

const devopsDeployStageContainerConfig: devopsDeployStage.DevopsDeployStageContainerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.containerConfigType">containerConfigType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#container_config_type DevopsDeployStage#container_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.networkChannel">networkChannel</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a></code> | network_channel block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.shapeName">shapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#shape_name DevopsDeployStage#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#availability_domain DevopsDeployStage#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compartment_id DevopsDeployStage#compartment_id}. |

---

##### `containerConfigType`<sup>Required</sup> <a name="containerConfigType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.containerConfigType"></a>

```typescript
public readonly containerConfigType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#container_config_type DevopsDeployStage#container_config_type}.

---

##### `networkChannel`<sup>Required</sup> <a name="networkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.networkChannel"></a>

```typescript
public readonly networkChannel: DevopsDeployStageContainerConfigNetworkChannel;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a>

network_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#network_channel DevopsDeployStage#network_channel}

---

##### `shapeConfig`<sup>Required</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.shapeConfig"></a>

```typescript
public readonly shapeConfig: DevopsDeployStageContainerConfigShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#shape_config DevopsDeployStage#shape_config}

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#shape_name DevopsDeployStage#shape_name}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#availability_domain DevopsDeployStage#availability_domain}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#compartment_id DevopsDeployStage#compartment_id}.

---

### DevopsDeployStageContainerConfigNetworkChannel <a name="DevopsDeployStageContainerConfigNetworkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

const devopsDeployStageContainerConfigNetworkChannel: devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.networkChannelType">networkChannelType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#network_channel_type DevopsDeployStage#network_channel_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#subnet_id DevopsDeployStage#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#nsg_ids DevopsDeployStage#nsg_ids}. |

---

##### `networkChannelType`<sup>Required</sup> <a name="networkChannelType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.networkChannelType"></a>

```typescript
public readonly networkChannelType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#network_channel_type DevopsDeployStage#network_channel_type}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#subnet_id DevopsDeployStage#subnet_id}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#nsg_ids DevopsDeployStage#nsg_ids}.

---

### DevopsDeployStageContainerConfigShapeConfig <a name="DevopsDeployStageContainerConfigShapeConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

const devopsDeployStageContainerConfigShapeConfig: devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.property.ocpus">ocpus</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ocpus DevopsDeployStage#ocpus}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#memory_in_gbs DevopsDeployStage#memory_in_gbs}. |

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ocpus DevopsDeployStage#ocpus}.

---

##### `memoryInGbs`<sup>Optional</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#memory_in_gbs DevopsDeployStage#memory_in_gbs}.

---

### DevopsDeployStageDeployStagePredecessorCollection <a name="DevopsDeployStageDeployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

const devopsDeployStageDeployStagePredecessorCollection: devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection.property.items">items</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>[]</code> | items block. |

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection.property.items"></a>

```typescript
public readonly items: IResolvable | DevopsDeployStageDeployStagePredecessorCollectionItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>[]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}

---

### DevopsDeployStageDeployStagePredecessorCollectionItems <a name="DevopsDeployStageDeployStagePredecessorCollectionItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

const devopsDeployStageDeployStagePredecessorCollectionItems: devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DevopsDeployStageFailurePolicy <a name="DevopsDeployStageFailurePolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

const devopsDeployStageFailurePolicy: devopsDeployStage.DevopsDeployStageFailurePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.policyType">policyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.failureCount">failureCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_count DevopsDeployStage#failure_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.failurePercentage">failurePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_percentage DevopsDeployStage#failure_percentage}. |

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}.

---

##### `failureCount`<sup>Optional</sup> <a name="failureCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.failureCount"></a>

```typescript
public readonly failureCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_count DevopsDeployStage#failure_count}.

---

##### `failurePercentage`<sup>Optional</sup> <a name="failurePercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy.property.failurePercentage"></a>

```typescript
public readonly failurePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#failure_percentage DevopsDeployStage#failure_percentage}.

---

### DevopsDeployStageGreenBackendIps <a name="DevopsDeployStageGreenBackendIps" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

const devopsDeployStageGreenBackendIps: devopsDeployStage.DevopsDeployStageGreenBackendIps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps.property.items">items</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}. |

---

##### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps.property.items"></a>

```typescript
public readonly items: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}.

---

### DevopsDeployStageLoadBalancerConfig <a name="DevopsDeployStageLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

const devopsDeployStageLoadBalancerConfig: devopsDeployStage.DevopsDeployStageLoadBalancerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.backendPort">backendPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.listenerName">listenerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}. |

---

##### `backendPort`<sup>Optional</sup> <a name="backendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.backendPort"></a>

```typescript
public readonly backendPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}.

---

##### `listenerName`<sup>Optional</sup> <a name="listenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.listenerName"></a>

```typescript
public readonly listenerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}.

---

##### `loadBalancerId`<sup>Optional</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}.

---

### DevopsDeployStageProductionLoadBalancerConfig <a name="DevopsDeployStageProductionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

const devopsDeployStageProductionLoadBalancerConfig: devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.backendPort">backendPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.listenerName">listenerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}. |

---

##### `backendPort`<sup>Optional</sup> <a name="backendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.backendPort"></a>

```typescript
public readonly backendPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}.

---

##### `listenerName`<sup>Optional</sup> <a name="listenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.listenerName"></a>

```typescript
public readonly listenerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}.

---

##### `loadBalancerId`<sup>Optional</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}.

---

### DevopsDeployStageRollbackPolicy <a name="DevopsDeployStageRollbackPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

const devopsDeployStageRollbackPolicy: devopsDeployStage.DevopsDeployStageRollbackPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy.property.policyType">policyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}. |

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}.

---

### DevopsDeployStageRolloutPolicy <a name="DevopsDeployStageRolloutPolicy" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

const devopsDeployStageRolloutPolicy: devopsDeployStage.DevopsDeployStageRolloutPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchCount">batchCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_count DevopsDeployStage#batch_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchDelayInSeconds">batchDelayInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_delay_in_seconds DevopsDeployStage#batch_delay_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchPercentage">batchPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_percentage DevopsDeployStage#batch_percentage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.policyType">policyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.rampLimitPercent">rampLimitPercent</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ramp_limit_percent DevopsDeployStage#ramp_limit_percent}. |

---

##### `batchCount`<sup>Optional</sup> <a name="batchCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchCount"></a>

```typescript
public readonly batchCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_count DevopsDeployStage#batch_count}.

---

##### `batchDelayInSeconds`<sup>Optional</sup> <a name="batchDelayInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchDelayInSeconds"></a>

```typescript
public readonly batchDelayInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_delay_in_seconds DevopsDeployStage#batch_delay_in_seconds}.

---

##### `batchPercentage`<sup>Optional</sup> <a name="batchPercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.batchPercentage"></a>

```typescript
public readonly batchPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#batch_percentage DevopsDeployStage#batch_percentage}.

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}.

---

##### `rampLimitPercent`<sup>Optional</sup> <a name="rampLimitPercent" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy.property.rampLimitPercent"></a>

```typescript
public readonly rampLimitPercent: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#ramp_limit_percent DevopsDeployStage#ramp_limit_percent}.

---

### DevopsDeployStageSetString <a name="DevopsDeployStageSetString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

const devopsDeployStageSetString: devopsDeployStage.DevopsDeployStageSetString = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString.property.items">items</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>[]</code> | items block. |

---

##### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString.property.items"></a>

```typescript
public readonly items: IResolvable | DevopsDeployStageSetStringItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>[]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}

---

### DevopsDeployStageSetStringItems <a name="DevopsDeployStageSetStringItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

const devopsDeployStageSetStringItems: devopsDeployStage.DevopsDeployStageSetStringItems = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#name DevopsDeployStage#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#value DevopsDeployStage#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#name DevopsDeployStage#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#value DevopsDeployStage#value}.

---

### DevopsDeployStageSetValues <a name="DevopsDeployStageSetValues" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

const devopsDeployStageSetValues: devopsDeployStage.DevopsDeployStageSetValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues.property.items">items</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>[]</code> | items block. |

---

##### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues.property.items"></a>

```typescript
public readonly items: IResolvable | DevopsDeployStageSetValuesItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>[]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}

---

### DevopsDeployStageSetValuesItems <a name="DevopsDeployStageSetValuesItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

const devopsDeployStageSetValuesItems: devopsDeployStage.DevopsDeployStageSetValuesItems = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#name DevopsDeployStage#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#value DevopsDeployStage#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#name DevopsDeployStage#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#value DevopsDeployStage#value}.

---

### DevopsDeployStageTestLoadBalancerConfig <a name="DevopsDeployStageTestLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

const devopsDeployStageTestLoadBalancerConfig: devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.backendPort">backendPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.listenerName">listenerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}. |

---

##### `backendPort`<sup>Optional</sup> <a name="backendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.backendPort"></a>

```typescript
public readonly backendPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}.

---

##### `listenerName`<sup>Optional</sup> <a name="listenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.listenerName"></a>

```typescript
public readonly listenerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}.

---

##### `loadBalancerId`<sup>Optional</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}.

---

### DevopsDeployStageTimeouts <a name="DevopsDeployStageTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

const devopsDeployStageTimeouts: devopsDeployStage.DevopsDeployStageTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#create DevopsDeployStage#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#delete DevopsDeployStage#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#update DevopsDeployStage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#create DevopsDeployStage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#delete DevopsDeployStage#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#update DevopsDeployStage#update}.

---

### DevopsDeployStageWaitCriteria <a name="DevopsDeployStageWaitCriteria" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

const devopsDeployStageWaitCriteria: devopsDeployStage.DevopsDeployStageWaitCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.property.waitDuration">waitDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_duration DevopsDeployStage#wait_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.property.waitType">waitType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_type DevopsDeployStage#wait_type}. |

---

##### `waitDuration`<sup>Required</sup> <a name="waitDuration" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.property.waitDuration"></a>

```typescript
public readonly waitDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_duration DevopsDeployStage#wait_duration}.

---

##### `waitType`<sup>Required</sup> <a name="waitType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria.property.waitType"></a>

```typescript
public readonly waitType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_stage#wait_type DevopsDeployStage#wait_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsDeployStageApprovalPolicyOutputReference <a name="DevopsDeployStageApprovalPolicyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.approvalPolicyTypeInput">approvalPolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.numberOfApprovalsRequiredInput">numberOfApprovalsRequiredInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.approvalPolicyType">approvalPolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.numberOfApprovalsRequired">numberOfApprovalsRequired</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approvalPolicyTypeInput`<sup>Optional</sup> <a name="approvalPolicyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.approvalPolicyTypeInput"></a>

```typescript
public readonly approvalPolicyTypeInput: string;
```

- *Type:* string

---

##### `numberOfApprovalsRequiredInput`<sup>Optional</sup> <a name="numberOfApprovalsRequiredInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.numberOfApprovalsRequiredInput"></a>

```typescript
public readonly numberOfApprovalsRequiredInput: number;
```

- *Type:* number

---

##### `approvalPolicyType`<sup>Required</sup> <a name="approvalPolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.approvalPolicyType"></a>

```typescript
public readonly approvalPolicyType: string;
```

- *Type:* string

---

##### `numberOfApprovalsRequired`<sup>Required</sup> <a name="numberOfApprovalsRequired" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.numberOfApprovalsRequired"></a>

```typescript
public readonly numberOfApprovalsRequired: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsDeployStageApprovalPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageApprovalPolicy">DevopsDeployStageApprovalPolicy</a>

---


### DevopsDeployStageBlueBackendIpsOutputReference <a name="DevopsDeployStageBlueBackendIpsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetItems` <a name="resetItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.resetItems"></a>

```typescript
public resetItems(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.itemsInput">itemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.items">items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.itemsInput"></a>

```typescript
public readonly itemsInput: string[];
```

- *Type:* string[]

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.items"></a>

```typescript
public readonly items: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsDeployStageBlueBackendIps;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueBackendIps">DevopsDeployStageBlueBackendIps</a>

---


### DevopsDeployStageBlueGreenStrategyOutputReference <a name="DevopsDeployStageBlueGreenStrategyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.ingressNameInput">ingressNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceAInput">namespaceAInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceBInput">namespaceBInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.strategyTypeInput">strategyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.ingressName">ingressName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceA">namespaceA</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceB">namespaceB</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.strategyType">strategyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingressNameInput`<sup>Optional</sup> <a name="ingressNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.ingressNameInput"></a>

```typescript
public readonly ingressNameInput: string;
```

- *Type:* string

---

##### `namespaceAInput`<sup>Optional</sup> <a name="namespaceAInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceAInput"></a>

```typescript
public readonly namespaceAInput: string;
```

- *Type:* string

---

##### `namespaceBInput`<sup>Optional</sup> <a name="namespaceBInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceBInput"></a>

```typescript
public readonly namespaceBInput: string;
```

- *Type:* string

---

##### `strategyTypeInput`<sup>Optional</sup> <a name="strategyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.strategyTypeInput"></a>

```typescript
public readonly strategyTypeInput: string;
```

- *Type:* string

---

##### `ingressName`<sup>Required</sup> <a name="ingressName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.ingressName"></a>

```typescript
public readonly ingressName: string;
```

- *Type:* string

---

##### `namespaceA`<sup>Required</sup> <a name="namespaceA" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceA"></a>

```typescript
public readonly namespaceA: string;
```

- *Type:* string

---

##### `namespaceB`<sup>Required</sup> <a name="namespaceB" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.namespaceB"></a>

```typescript
public readonly namespaceB: string;
```

- *Type:* string

---

##### `strategyType`<sup>Required</sup> <a name="strategyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.strategyType"></a>

```typescript
public readonly strategyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsDeployStageBlueGreenStrategy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageBlueGreenStrategy">DevopsDeployStageBlueGreenStrategy</a>

---


### DevopsDeployStageCanaryStrategyOutputReference <a name="DevopsDeployStageCanaryStrategyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.ingressNameInput">ingressNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.strategyTypeInput">strategyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.ingressName">ingressName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.strategyType">strategyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingressNameInput`<sup>Optional</sup> <a name="ingressNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.ingressNameInput"></a>

```typescript
public readonly ingressNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `strategyTypeInput`<sup>Optional</sup> <a name="strategyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.strategyTypeInput"></a>

```typescript
public readonly strategyTypeInput: string;
```

- *Type:* string

---

##### `ingressName`<sup>Required</sup> <a name="ingressName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.ingressName"></a>

```typescript
public readonly ingressName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `strategyType`<sup>Required</sup> <a name="strategyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.strategyType"></a>

```typescript
public readonly strategyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsDeployStageCanaryStrategy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageCanaryStrategy">DevopsDeployStageCanaryStrategy</a>

---


### DevopsDeployStageContainerConfigNetworkChannelOutputReference <a name="DevopsDeployStageContainerConfigNetworkChannelOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.resetNsgIds"></a>

```typescript
public resetNsgIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.networkChannelTypeInput">networkChannelTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.nsgIdsInput">nsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.networkChannelType">networkChannelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkChannelTypeInput`<sup>Optional</sup> <a name="networkChannelTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.networkChannelTypeInput"></a>

```typescript
public readonly networkChannelTypeInput: string;
```

- *Type:* string

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.nsgIdsInput"></a>

```typescript
public readonly nsgIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `networkChannelType`<sup>Required</sup> <a name="networkChannelType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.networkChannelType"></a>

```typescript
public readonly networkChannelType: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsDeployStageContainerConfigNetworkChannel;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a>

---


### DevopsDeployStageContainerConfigOutputReference <a name="DevopsDeployStageContainerConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageContainerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkChannel` <a name="putNetworkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putNetworkChannel"></a>

```typescript
public putNetworkChannel(value: DevopsDeployStageContainerConfigNetworkChannel): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putNetworkChannel.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a>

---

##### `putShapeConfig` <a name="putShapeConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putShapeConfig"></a>

```typescript
public putShapeConfig(value: DevopsDeployStageContainerConfigShapeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.putShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a>

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.networkChannel">networkChannel</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference">DevopsDeployStageContainerConfigNetworkChannelOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference">DevopsDeployStageContainerConfigShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.containerConfigTypeInput">containerConfigTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.networkChannelInput">networkChannelInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeConfigInput">shapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeNameInput">shapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.containerConfigType">containerConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkChannel`<sup>Required</sup> <a name="networkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.networkChannel"></a>

```typescript
public readonly networkChannel: DevopsDeployStageContainerConfigNetworkChannelOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannelOutputReference">DevopsDeployStageContainerConfigNetworkChannelOutputReference</a>

---

##### `shapeConfig`<sup>Required</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeConfig"></a>

```typescript
public readonly shapeConfig: DevopsDeployStageContainerConfigShapeConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference">DevopsDeployStageContainerConfigShapeConfigOutputReference</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `containerConfigTypeInput`<sup>Optional</sup> <a name="containerConfigTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.containerConfigTypeInput"></a>

```typescript
public readonly containerConfigTypeInput: string;
```

- *Type:* string

---

##### `networkChannelInput`<sup>Optional</sup> <a name="networkChannelInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.networkChannelInput"></a>

```typescript
public readonly networkChannelInput: DevopsDeployStageContainerConfigNetworkChannel;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigNetworkChannel">DevopsDeployStageContainerConfigNetworkChannel</a>

---

##### `shapeConfigInput`<sup>Optional</sup> <a name="shapeConfigInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeConfigInput"></a>

```typescript
public readonly shapeConfigInput: DevopsDeployStageContainerConfigShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a>

---

##### `shapeNameInput`<sup>Optional</sup> <a name="shapeNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeNameInput"></a>

```typescript
public readonly shapeNameInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `containerConfigType`<sup>Required</sup> <a name="containerConfigType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.containerConfigType"></a>

```typescript
public readonly containerConfigType: string;
```

- *Type:* string

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsDeployStageContainerConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfig">DevopsDeployStageContainerConfig</a>

---


### DevopsDeployStageContainerConfigShapeConfigOutputReference <a name="DevopsDeployStageContainerConfigShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemoryInGbs` <a name="resetMemoryInGbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.resetMemoryInGbs"></a>

```typescript
public resetMemoryInGbs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.memoryInGbsInput">memoryInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.ocpusInput">ocpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryInGbsInput`<sup>Optional</sup> <a name="memoryInGbsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.memoryInGbsInput"></a>

```typescript
public readonly memoryInGbsInput: number;
```

- *Type:* number

---

##### `ocpusInput`<sup>Optional</sup> <a name="ocpusInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.ocpusInput"></a>

```typescript
public readonly ocpusInput: number;
```

- *Type:* number

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsDeployStageContainerConfigShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageContainerConfigShapeConfig">DevopsDeployStageContainerConfigShapeConfig</a>

---


### DevopsDeployStageDeployStagePredecessorCollectionItemsList <a name="DevopsDeployStageDeployStagePredecessorCollectionItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.get"></a>

```typescript
public get(index: number): DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsDeployStageDeployStagePredecessorCollectionItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>[]

---


### DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference <a name="DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsDeployStageDeployStagePredecessorCollectionItems;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>

---


### DevopsDeployStageDeployStagePredecessorCollectionOutputReference <a name="DevopsDeployStageDeployStagePredecessorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.putItems"></a>

```typescript
public putItems(value: IResolvable | DevopsDeployStageDeployStagePredecessorCollectionItems[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.putItems.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList">DevopsDeployStageDeployStagePredecessorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.itemsInput">itemsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DevopsDeployStageDeployStagePredecessorCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItemsList">DevopsDeployStageDeployStagePredecessorCollectionItemsList</a>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.itemsInput"></a>

```typescript
public readonly itemsInput: IResolvable | DevopsDeployStageDeployStagePredecessorCollectionItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionItems">DevopsDeployStageDeployStagePredecessorCollectionItems</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsDeployStageDeployStagePredecessorCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageDeployStagePredecessorCollection">DevopsDeployStageDeployStagePredecessorCollection</a>

---


### DevopsDeployStageFailurePolicyOutputReference <a name="DevopsDeployStageFailurePolicyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailureCount` <a name="resetFailureCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resetFailureCount"></a>

```typescript
public resetFailureCount(): void
```

##### `resetFailurePercentage` <a name="resetFailurePercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.resetFailurePercentage"></a>

```typescript
public resetFailurePercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failureCountInput">failureCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failurePercentageInput">failurePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.policyTypeInput">policyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failureCount">failureCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failurePercentage">failurePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failureCountInput`<sup>Optional</sup> <a name="failureCountInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failureCountInput"></a>

```typescript
public readonly failureCountInput: number;
```

- *Type:* number

---

##### `failurePercentageInput`<sup>Optional</sup> <a name="failurePercentageInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failurePercentageInput"></a>

```typescript
public readonly failurePercentageInput: number;
```

- *Type:* number

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.policyTypeInput"></a>

```typescript
public readonly policyTypeInput: string;
```

- *Type:* string

---

##### `failureCount`<sup>Required</sup> <a name="failureCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failureCount"></a>

```typescript
public readonly failureCount: number;
```

- *Type:* number

---

##### `failurePercentage`<sup>Required</sup> <a name="failurePercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.failurePercentage"></a>

```typescript
public readonly failurePercentage: number;
```

- *Type:* number

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsDeployStageFailurePolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageFailurePolicy">DevopsDeployStageFailurePolicy</a>

---


### DevopsDeployStageGreenBackendIpsOutputReference <a name="DevopsDeployStageGreenBackendIpsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetItems` <a name="resetItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.resetItems"></a>

```typescript
public resetItems(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.itemsInput">itemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.items">items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.itemsInput"></a>

```typescript
public readonly itemsInput: string[];
```

- *Type:* string[]

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.items"></a>

```typescript
public readonly items: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsDeployStageGreenBackendIps;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageGreenBackendIps">DevopsDeployStageGreenBackendIps</a>

---


### DevopsDeployStageLoadBalancerConfigOutputReference <a name="DevopsDeployStageLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackendPort` <a name="resetBackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetBackendPort"></a>

```typescript
public resetBackendPort(): void
```

##### `resetListenerName` <a name="resetListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetListenerName"></a>

```typescript
public resetListenerName(): void
```

##### `resetLoadBalancerId` <a name="resetLoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.resetLoadBalancerId"></a>

```typescript
public resetLoadBalancerId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.backendPortInput">backendPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.listenerNameInput">listenerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.loadBalancerIdInput">loadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.backendPort">backendPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.listenerName">listenerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `backendPortInput`<sup>Optional</sup> <a name="backendPortInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.backendPortInput"></a>

```typescript
public readonly backendPortInput: number;
```

- *Type:* number

---

##### `listenerNameInput`<sup>Optional</sup> <a name="listenerNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.listenerNameInput"></a>

```typescript
public readonly listenerNameInput: string;
```

- *Type:* string

---

##### `loadBalancerIdInput`<sup>Optional</sup> <a name="loadBalancerIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.loadBalancerIdInput"></a>

```typescript
public readonly loadBalancerIdInput: string;
```

- *Type:* string

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.backendPort"></a>

```typescript
public readonly backendPort: number;
```

- *Type:* number

---

##### `listenerName`<sup>Required</sup> <a name="listenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.listenerName"></a>

```typescript
public readonly listenerName: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsDeployStageLoadBalancerConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageLoadBalancerConfig">DevopsDeployStageLoadBalancerConfig</a>

---


### DevopsDeployStageProductionLoadBalancerConfigOutputReference <a name="DevopsDeployStageProductionLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackendPort` <a name="resetBackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetBackendPort"></a>

```typescript
public resetBackendPort(): void
```

##### `resetListenerName` <a name="resetListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetListenerName"></a>

```typescript
public resetListenerName(): void
```

##### `resetLoadBalancerId` <a name="resetLoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.resetLoadBalancerId"></a>

```typescript
public resetLoadBalancerId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.backendPortInput">backendPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.listenerNameInput">listenerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.loadBalancerIdInput">loadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.backendPort">backendPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.listenerName">listenerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `backendPortInput`<sup>Optional</sup> <a name="backendPortInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.backendPortInput"></a>

```typescript
public readonly backendPortInput: number;
```

- *Type:* number

---

##### `listenerNameInput`<sup>Optional</sup> <a name="listenerNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.listenerNameInput"></a>

```typescript
public readonly listenerNameInput: string;
```

- *Type:* string

---

##### `loadBalancerIdInput`<sup>Optional</sup> <a name="loadBalancerIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.loadBalancerIdInput"></a>

```typescript
public readonly loadBalancerIdInput: string;
```

- *Type:* string

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.backendPort"></a>

```typescript
public readonly backendPort: number;
```

- *Type:* number

---

##### `listenerName`<sup>Required</sup> <a name="listenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.listenerName"></a>

```typescript
public readonly listenerName: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsDeployStageProductionLoadBalancerConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageProductionLoadBalancerConfig">DevopsDeployStageProductionLoadBalancerConfig</a>

---


### DevopsDeployStageRollbackPolicyOutputReference <a name="DevopsDeployStageRollbackPolicyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicyType` <a name="resetPolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.resetPolicyType"></a>

```typescript
public resetPolicyType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.policyTypeInput">policyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.policyTypeInput"></a>

```typescript
public readonly policyTypeInput: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsDeployStageRollbackPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRollbackPolicy">DevopsDeployStageRollbackPolicy</a>

---


### DevopsDeployStageRolloutPolicyOutputReference <a name="DevopsDeployStageRolloutPolicyOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchCount` <a name="resetBatchCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchCount"></a>

```typescript
public resetBatchCount(): void
```

##### `resetBatchDelayInSeconds` <a name="resetBatchDelayInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchDelayInSeconds"></a>

```typescript
public resetBatchDelayInSeconds(): void
```

##### `resetBatchPercentage` <a name="resetBatchPercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetBatchPercentage"></a>

```typescript
public resetBatchPercentage(): void
```

##### `resetPolicyType` <a name="resetPolicyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetPolicyType"></a>

```typescript
public resetPolicyType(): void
```

##### `resetRampLimitPercent` <a name="resetRampLimitPercent" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.resetRampLimitPercent"></a>

```typescript
public resetRampLimitPercent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchCountInput">batchCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchDelayInSecondsInput">batchDelayInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchPercentageInput">batchPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.policyTypeInput">policyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.rampLimitPercentInput">rampLimitPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchCount">batchCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchDelayInSeconds">batchDelayInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchPercentage">batchPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.rampLimitPercent">rampLimitPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchCountInput`<sup>Optional</sup> <a name="batchCountInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchCountInput"></a>

```typescript
public readonly batchCountInput: number;
```

- *Type:* number

---

##### `batchDelayInSecondsInput`<sup>Optional</sup> <a name="batchDelayInSecondsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchDelayInSecondsInput"></a>

```typescript
public readonly batchDelayInSecondsInput: number;
```

- *Type:* number

---

##### `batchPercentageInput`<sup>Optional</sup> <a name="batchPercentageInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchPercentageInput"></a>

```typescript
public readonly batchPercentageInput: number;
```

- *Type:* number

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.policyTypeInput"></a>

```typescript
public readonly policyTypeInput: string;
```

- *Type:* string

---

##### `rampLimitPercentInput`<sup>Optional</sup> <a name="rampLimitPercentInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.rampLimitPercentInput"></a>

```typescript
public readonly rampLimitPercentInput: number;
```

- *Type:* number

---

##### `batchCount`<sup>Required</sup> <a name="batchCount" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchCount"></a>

```typescript
public readonly batchCount: number;
```

- *Type:* number

---

##### `batchDelayInSeconds`<sup>Required</sup> <a name="batchDelayInSeconds" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchDelayInSeconds"></a>

```typescript
public readonly batchDelayInSeconds: number;
```

- *Type:* number

---

##### `batchPercentage`<sup>Required</sup> <a name="batchPercentage" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.batchPercentage"></a>

```typescript
public readonly batchPercentage: number;
```

- *Type:* number

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `rampLimitPercent`<sup>Required</sup> <a name="rampLimitPercent" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.rampLimitPercent"></a>

```typescript
public readonly rampLimitPercent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsDeployStageRolloutPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageRolloutPolicy">DevopsDeployStageRolloutPolicy</a>

---


### DevopsDeployStageSetStringItemsList <a name="DevopsDeployStageSetStringItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageSetStringItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.get"></a>

```typescript
public get(index: number): DevopsDeployStageSetStringItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsDeployStageSetStringItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>[]

---


### DevopsDeployStageSetStringItemsOutputReference <a name="DevopsDeployStageSetStringItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsDeployStageSetStringItems;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>

---


### DevopsDeployStageSetStringOutputReference <a name="DevopsDeployStageSetStringOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageSetStringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.putItems"></a>

```typescript
public putItems(value: IResolvable | DevopsDeployStageSetStringItems[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.putItems.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>[]

---

##### `resetItems` <a name="resetItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.resetItems"></a>

```typescript
public resetItems(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList">DevopsDeployStageSetStringItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.itemsInput">itemsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.items"></a>

```typescript
public readonly items: DevopsDeployStageSetStringItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItemsList">DevopsDeployStageSetStringItemsList</a>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.itemsInput"></a>

```typescript
public readonly itemsInput: IResolvable | DevopsDeployStageSetStringItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringItems">DevopsDeployStageSetStringItems</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetStringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsDeployStageSetString;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetString">DevopsDeployStageSetString</a>

---


### DevopsDeployStageSetValuesItemsList <a name="DevopsDeployStageSetValuesItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageSetValuesItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.get"></a>

```typescript
public get(index: number): DevopsDeployStageSetValuesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsDeployStageSetValuesItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>[]

---


### DevopsDeployStageSetValuesItemsOutputReference <a name="DevopsDeployStageSetValuesItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsDeployStageSetValuesItems;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>

---


### DevopsDeployStageSetValuesOutputReference <a name="DevopsDeployStageSetValuesOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageSetValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.putItems"></a>

```typescript
public putItems(value: IResolvable | DevopsDeployStageSetValuesItems[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.putItems.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>[]

---

##### `resetItems` <a name="resetItems" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.resetItems"></a>

```typescript
public resetItems(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList">DevopsDeployStageSetValuesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.itemsInput">itemsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.items"></a>

```typescript
public readonly items: DevopsDeployStageSetValuesItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItemsList">DevopsDeployStageSetValuesItemsList</a>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.itemsInput"></a>

```typescript
public readonly itemsInput: IResolvable | DevopsDeployStageSetValuesItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesItems">DevopsDeployStageSetValuesItems</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsDeployStageSetValues;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageSetValues">DevopsDeployStageSetValues</a>

---


### DevopsDeployStageTestLoadBalancerConfigOutputReference <a name="DevopsDeployStageTestLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackendPort` <a name="resetBackendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetBackendPort"></a>

```typescript
public resetBackendPort(): void
```

##### `resetListenerName` <a name="resetListenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetListenerName"></a>

```typescript
public resetListenerName(): void
```

##### `resetLoadBalancerId` <a name="resetLoadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.resetLoadBalancerId"></a>

```typescript
public resetLoadBalancerId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.backendPortInput">backendPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.listenerNameInput">listenerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.loadBalancerIdInput">loadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.backendPort">backendPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.listenerName">listenerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `backendPortInput`<sup>Optional</sup> <a name="backendPortInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.backendPortInput"></a>

```typescript
public readonly backendPortInput: number;
```

- *Type:* number

---

##### `listenerNameInput`<sup>Optional</sup> <a name="listenerNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.listenerNameInput"></a>

```typescript
public readonly listenerNameInput: string;
```

- *Type:* string

---

##### `loadBalancerIdInput`<sup>Optional</sup> <a name="loadBalancerIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.loadBalancerIdInput"></a>

```typescript
public readonly loadBalancerIdInput: string;
```

- *Type:* string

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.backendPort"></a>

```typescript
public readonly backendPort: number;
```

- *Type:* number

---

##### `listenerName`<sup>Required</sup> <a name="listenerName" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.listenerName"></a>

```typescript
public readonly listenerName: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsDeployStageTestLoadBalancerConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTestLoadBalancerConfig">DevopsDeployStageTestLoadBalancerConfig</a>

---


### DevopsDeployStageTimeoutsOutputReference <a name="DevopsDeployStageTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsDeployStageTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageTimeouts">DevopsDeployStageTimeouts</a>

---


### DevopsDeployStageWaitCriteriaOutputReference <a name="DevopsDeployStageWaitCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer"></a>

```typescript
import { devopsDeployStage } from 'rhizo-co-terraform-provider-oci'

new devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitDurationInput">waitDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitTypeInput">waitTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitDuration">waitDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitType">waitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `waitDurationInput`<sup>Optional</sup> <a name="waitDurationInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitDurationInput"></a>

```typescript
public readonly waitDurationInput: string;
```

- *Type:* string

---

##### `waitTypeInput`<sup>Optional</sup> <a name="waitTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitTypeInput"></a>

```typescript
public readonly waitTypeInput: string;
```

- *Type:* string

---

##### `waitDuration`<sup>Required</sup> <a name="waitDuration" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitDuration"></a>

```typescript
public readonly waitDuration: string;
```

- *Type:* string

---

##### `waitType`<sup>Required</sup> <a name="waitType" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.waitType"></a>

```typescript
public readonly waitType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevopsDeployStageWaitCriteria;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployStage.DevopsDeployStageWaitCriteria">DevopsDeployStageWaitCriteria</a>

---



