# `devopsBuildPipelineStage` Submodule <a name="`devopsBuildPipelineStage` Submodule" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsBuildPipelineStage <a name="DevopsBuildPipelineStage" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage oci_devops_build_pipeline_stage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

devopsbuildpipelinestage.NewDevopsBuildPipelineStage(scope Construct, id *string, config DevopsBuildPipelineStageConfig) DevopsBuildPipelineStage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig">DevopsBuildPipelineStageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig">DevopsBuildPipelineStageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildPipelineStagePredecessorCollection">PutBuildPipelineStagePredecessorCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildRunnerShapeConfig">PutBuildRunnerShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildSourceCollection">PutBuildSourceCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putDeliverArtifactCollection">PutDeliverArtifactCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putPrivateAccessConfig">PutPrivateAccessConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putWaitCriteria">PutWaitCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetBuildRunnerShapeConfig">ResetBuildRunnerShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetBuildSourceCollection">ResetBuildSourceCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetBuildSpecFile">ResetBuildSpecFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDeliverArtifactCollection">ResetDeliverArtifactCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDeployPipelineId">ResetDeployPipelineId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetIsPassAllParametersEnabled">ResetIsPassAllParametersEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetPrimaryBuildSource">ResetPrimaryBuildSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetPrivateAccessConfig">ResetPrivateAccessConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetStageExecutionTimeoutInSeconds">ResetStageExecutionTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetWaitCriteria">ResetWaitCriteria</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBuildPipelineStagePredecessorCollection` <a name="PutBuildPipelineStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildPipelineStagePredecessorCollection"></a>

```go
func PutBuildPipelineStagePredecessorCollection(value DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildPipelineStagePredecessorCollection.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a>

---

##### `PutBuildRunnerShapeConfig` <a name="PutBuildRunnerShapeConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildRunnerShapeConfig"></a>

```go
func PutBuildRunnerShapeConfig(value DevopsBuildPipelineStageBuildRunnerShapeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildRunnerShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a>

---

##### `PutBuildSourceCollection` <a name="PutBuildSourceCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildSourceCollection"></a>

```go
func PutBuildSourceCollection(value DevopsBuildPipelineStageBuildSourceCollection)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putBuildSourceCollection.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a>

---

##### `PutDeliverArtifactCollection` <a name="PutDeliverArtifactCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putDeliverArtifactCollection"></a>

```go
func PutDeliverArtifactCollection(value DevopsBuildPipelineStageDeliverArtifactCollection)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putDeliverArtifactCollection.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a>

---

##### `PutPrivateAccessConfig` <a name="PutPrivateAccessConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putPrivateAccessConfig"></a>

```go
func PutPrivateAccessConfig(value DevopsBuildPipelineStagePrivateAccessConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putPrivateAccessConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putTimeouts"></a>

```go
func PutTimeouts(value DevopsBuildPipelineStageTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts">DevopsBuildPipelineStageTimeouts</a>

---

##### `PutWaitCriteria` <a name="PutWaitCriteria" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putWaitCriteria"></a>

```go
func PutWaitCriteria(value DevopsBuildPipelineStageWaitCriteria)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.putWaitCriteria.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a>

---

##### `ResetBuildRunnerShapeConfig` <a name="ResetBuildRunnerShapeConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetBuildRunnerShapeConfig"></a>

```go
func ResetBuildRunnerShapeConfig()
```

##### `ResetBuildSourceCollection` <a name="ResetBuildSourceCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetBuildSourceCollection"></a>

```go
func ResetBuildSourceCollection()
```

##### `ResetBuildSpecFile` <a name="ResetBuildSpecFile" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetBuildSpecFile"></a>

```go
func ResetBuildSpecFile()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDeliverArtifactCollection` <a name="ResetDeliverArtifactCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDeliverArtifactCollection"></a>

```go
func ResetDeliverArtifactCollection()
```

##### `ResetDeployPipelineId` <a name="ResetDeployPipelineId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDeployPipelineId"></a>

```go
func ResetDeployPipelineId()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetId"></a>

```go
func ResetId()
```

##### `ResetImage` <a name="ResetImage" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetImage"></a>

```go
func ResetImage()
```

##### `ResetIsPassAllParametersEnabled` <a name="ResetIsPassAllParametersEnabled" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetIsPassAllParametersEnabled"></a>

```go
func ResetIsPassAllParametersEnabled()
```

##### `ResetPrimaryBuildSource` <a name="ResetPrimaryBuildSource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetPrimaryBuildSource"></a>

```go
func ResetPrimaryBuildSource()
```

##### `ResetPrivateAccessConfig` <a name="ResetPrivateAccessConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetPrivateAccessConfig"></a>

```go
func ResetPrivateAccessConfig()
```

##### `ResetStageExecutionTimeoutInSeconds` <a name="ResetStageExecutionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetStageExecutionTimeoutInSeconds"></a>

```go
func ResetStageExecutionTimeoutInSeconds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWaitCriteria` <a name="ResetWaitCriteria" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.resetWaitCriteria"></a>

```go
func ResetWaitCriteria()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsBuildPipelineStage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

devopsbuildpipelinestage.DevopsBuildPipelineStage_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

devopsbuildpipelinestage.DevopsBuildPipelineStage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

devopsbuildpipelinestage.DevopsBuildPipelineStage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

devopsbuildpipelinestage.DevopsBuildPipelineStage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DevopsBuildPipelineStage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DevopsBuildPipelineStage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DevopsBuildPipelineStage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DevopsBuildPipelineStage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStagePredecessorCollection">BuildPipelineStagePredecessorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildRunnerShapeConfig">BuildRunnerShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference">DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSourceCollection">BuildSourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference">DevopsBuildPipelineStageBuildSourceCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deliverArtifactCollection">DeliverArtifactCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference">DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.privateAccessConfig">PrivateAccessConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference">DevopsBuildPipelineStagePrivateAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference">DevopsBuildPipelineStageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.waitCriteria">WaitCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference">DevopsBuildPipelineStageWaitCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineIdInput">BuildPipelineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStagePredecessorCollectionInput">BuildPipelineStagePredecessorCollectionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStageTypeInput">BuildPipelineStageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildRunnerShapeConfigInput">BuildRunnerShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSourceCollectionInput">BuildSourceCollectionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSpecFileInput">BuildSpecFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deliverArtifactCollectionInput">DeliverArtifactCollectionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deployPipelineIdInput">DeployPipelineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.isPassAllParametersEnabledInput">IsPassAllParametersEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.primaryBuildSourceInput">PrimaryBuildSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.privateAccessConfigInput">PrivateAccessConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.stageExecutionTimeoutInSecondsInput">StageExecutionTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.waitCriteriaInput">WaitCriteriaInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineId">BuildPipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStageType">BuildPipelineStageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSpecFile">BuildSpecFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deployPipelineId">DeployPipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.isPassAllParametersEnabled">IsPassAllParametersEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.primaryBuildSource">PrimaryBuildSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.stageExecutionTimeoutInSeconds">StageExecutionTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BuildPipelineStagePredecessorCollection`<sup>Required</sup> <a name="BuildPipelineStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStagePredecessorCollection"></a>

```go
func BuildPipelineStagePredecessorCollection() DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference</a>

---

##### `BuildRunnerShapeConfig`<sup>Required</sup> <a name="BuildRunnerShapeConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildRunnerShapeConfig"></a>

```go
func BuildRunnerShapeConfig() DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference">DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference</a>

---

##### `BuildSourceCollection`<sup>Required</sup> <a name="BuildSourceCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSourceCollection"></a>

```go
func BuildSourceCollection() DevopsBuildPipelineStageBuildSourceCollectionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference">DevopsBuildPipelineStageBuildSourceCollectionOutputReference</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DeliverArtifactCollection`<sup>Required</sup> <a name="DeliverArtifactCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deliverArtifactCollection"></a>

```go
func DeliverArtifactCollection() DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference">DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `PrivateAccessConfig`<sup>Required</sup> <a name="PrivateAccessConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.privateAccessConfig"></a>

```go
func PrivateAccessConfig() DevopsBuildPipelineStagePrivateAccessConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference">DevopsBuildPipelineStagePrivateAccessConfigOutputReference</a>

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeouts"></a>

```go
func Timeouts() DevopsBuildPipelineStageTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference">DevopsBuildPipelineStageTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `WaitCriteria`<sup>Required</sup> <a name="WaitCriteria" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.waitCriteria"></a>

```go
func WaitCriteria() DevopsBuildPipelineStageWaitCriteriaOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference">DevopsBuildPipelineStageWaitCriteriaOutputReference</a>

---

##### `BuildPipelineIdInput`<sup>Optional</sup> <a name="BuildPipelineIdInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineIdInput"></a>

```go
func BuildPipelineIdInput() *string
```

- *Type:* *string

---

##### `BuildPipelineStagePredecessorCollectionInput`<sup>Optional</sup> <a name="BuildPipelineStagePredecessorCollectionInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStagePredecessorCollectionInput"></a>

```go
func BuildPipelineStagePredecessorCollectionInput() DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a>

---

##### `BuildPipelineStageTypeInput`<sup>Optional</sup> <a name="BuildPipelineStageTypeInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStageTypeInput"></a>

```go
func BuildPipelineStageTypeInput() *string
```

- *Type:* *string

---

##### `BuildRunnerShapeConfigInput`<sup>Optional</sup> <a name="BuildRunnerShapeConfigInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildRunnerShapeConfigInput"></a>

```go
func BuildRunnerShapeConfigInput() DevopsBuildPipelineStageBuildRunnerShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a>

---

##### `BuildSourceCollectionInput`<sup>Optional</sup> <a name="BuildSourceCollectionInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSourceCollectionInput"></a>

```go
func BuildSourceCollectionInput() DevopsBuildPipelineStageBuildSourceCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a>

---

##### `BuildSpecFileInput`<sup>Optional</sup> <a name="BuildSpecFileInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSpecFileInput"></a>

```go
func BuildSpecFileInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeliverArtifactCollectionInput`<sup>Optional</sup> <a name="DeliverArtifactCollectionInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deliverArtifactCollectionInput"></a>

```go
func DeliverArtifactCollectionInput() DevopsBuildPipelineStageDeliverArtifactCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a>

---

##### `DeployPipelineIdInput`<sup>Optional</sup> <a name="DeployPipelineIdInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deployPipelineIdInput"></a>

```go
func DeployPipelineIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `IsPassAllParametersEnabledInput`<sup>Optional</sup> <a name="IsPassAllParametersEnabledInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.isPassAllParametersEnabledInput"></a>

```go
func IsPassAllParametersEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PrimaryBuildSourceInput`<sup>Optional</sup> <a name="PrimaryBuildSourceInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.primaryBuildSourceInput"></a>

```go
func PrimaryBuildSourceInput() *string
```

- *Type:* *string

---

##### `PrivateAccessConfigInput`<sup>Optional</sup> <a name="PrivateAccessConfigInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.privateAccessConfigInput"></a>

```go
func PrivateAccessConfigInput() DevopsBuildPipelineStagePrivateAccessConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a>

---

##### `StageExecutionTimeoutInSecondsInput`<sup>Optional</sup> <a name="StageExecutionTimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.stageExecutionTimeoutInSecondsInput"></a>

```go
func StageExecutionTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WaitCriteriaInput`<sup>Optional</sup> <a name="WaitCriteriaInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.waitCriteriaInput"></a>

```go
func WaitCriteriaInput() DevopsBuildPipelineStageWaitCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a>

---

##### `BuildPipelineId`<sup>Required</sup> <a name="BuildPipelineId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineId"></a>

```go
func BuildPipelineId() *string
```

- *Type:* *string

---

##### `BuildPipelineStageType`<sup>Required</sup> <a name="BuildPipelineStageType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildPipelineStageType"></a>

```go
func BuildPipelineStageType() *string
```

- *Type:* *string

---

##### `BuildSpecFile`<sup>Required</sup> <a name="BuildSpecFile" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.buildSpecFile"></a>

```go
func BuildSpecFile() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeployPipelineId`<sup>Required</sup> <a name="DeployPipelineId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.deployPipelineId"></a>

```go
func DeployPipelineId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `IsPassAllParametersEnabled`<sup>Required</sup> <a name="IsPassAllParametersEnabled" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.isPassAllParametersEnabled"></a>

```go
func IsPassAllParametersEnabled() interface{}
```

- *Type:* interface{}

---

##### `PrimaryBuildSource`<sup>Required</sup> <a name="PrimaryBuildSource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.primaryBuildSource"></a>

```go
func PrimaryBuildSource() *string
```

- *Type:* *string

---

##### `StageExecutionTimeoutInSeconds`<sup>Required</sup> <a name="StageExecutionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.stageExecutionTimeoutInSeconds"></a>

```go
func StageExecutionTimeoutInSeconds() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection <a name="DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

&devopsbuildpipelinestage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection {
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection.property.items">Items</a></code> | <code>interface{}</code> | items block. |

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#items DevopsBuildPipelineStage#items}

---

### DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems <a name="DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

&devopsbuildpipelinestage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#id DevopsBuildPipelineStage#id}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#id DevopsBuildPipelineStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DevopsBuildPipelineStageBuildRunnerShapeConfig <a name="DevopsBuildPipelineStageBuildRunnerShapeConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

&devopsbuildpipelinestage.DevopsBuildPipelineStageBuildRunnerShapeConfig {
	BuildRunnerType: *string,
	MemoryInGbs: *f64,
	Ocpus: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig.property.buildRunnerType">BuildRunnerType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_runner_type DevopsBuildPipelineStage#build_runner_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#memory_in_gbs DevopsBuildPipelineStage#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig.property.ocpus">Ocpus</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#ocpus DevopsBuildPipelineStage#ocpus}. |

---

##### `BuildRunnerType`<sup>Required</sup> <a name="BuildRunnerType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig.property.buildRunnerType"></a>

```go
BuildRunnerType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_runner_type DevopsBuildPipelineStage#build_runner_type}.

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig.property.memoryInGbs"></a>

```go
MemoryInGbs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#memory_in_gbs DevopsBuildPipelineStage#memory_in_gbs}.

---

##### `Ocpus`<sup>Optional</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig.property.ocpus"></a>

```go
Ocpus *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#ocpus DevopsBuildPipelineStage#ocpus}.

---

### DevopsBuildPipelineStageBuildSourceCollection <a name="DevopsBuildPipelineStageBuildSourceCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

&devopsbuildpipelinestage.DevopsBuildPipelineStageBuildSourceCollection {
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection.property.items">Items</a></code> | <code>interface{}</code> | items block. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#items DevopsBuildPipelineStage#items}

---

### DevopsBuildPipelineStageBuildSourceCollectionItems <a name="DevopsBuildPipelineStageBuildSourceCollectionItems" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

&devopsbuildpipelinestage.DevopsBuildPipelineStageBuildSourceCollectionItems {
	ConnectionType: *string,
	Branch: *string,
	ConnectionId: *string,
	Name: *string,
	RepositoryId: *string,
	RepositoryUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.connectionType">ConnectionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#connection_type DevopsBuildPipelineStage#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.branch">Branch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#branch DevopsBuildPipelineStage#branch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.connectionId">ConnectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#connection_id DevopsBuildPipelineStage#connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#name DevopsBuildPipelineStage#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#repository_id DevopsBuildPipelineStage#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.repositoryUrl">RepositoryUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#repository_url DevopsBuildPipelineStage#repository_url}. |

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.connectionType"></a>

```go
ConnectionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#connection_type DevopsBuildPipelineStage#connection_type}.

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#branch DevopsBuildPipelineStage#branch}.

---

##### `ConnectionId`<sup>Optional</sup> <a name="ConnectionId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.connectionId"></a>

```go
ConnectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#connection_id DevopsBuildPipelineStage#connection_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#name DevopsBuildPipelineStage#name}.

---

##### `RepositoryId`<sup>Optional</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.repositoryId"></a>

```go
RepositoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#repository_id DevopsBuildPipelineStage#repository_id}.

---

##### `RepositoryUrl`<sup>Optional</sup> <a name="RepositoryUrl" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItems.property.repositoryUrl"></a>

```go
RepositoryUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#repository_url DevopsBuildPipelineStage#repository_url}.

---

### DevopsBuildPipelineStageConfig <a name="DevopsBuildPipelineStageConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

&devopsbuildpipelinestage.DevopsBuildPipelineStageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BuildPipelineId: *string,
	BuildPipelineStagePredecessorCollection: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection,
	BuildPipelineStageType: *string,
	BuildRunnerShapeConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig,
	BuildSourceCollection: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection,
	BuildSpecFile: *string,
	DefinedTags: *map[string]*string,
	DeliverArtifactCollection: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection,
	DeployPipelineId: *string,
	Description: *string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Image: *string,
	IsPassAllParametersEnabled: interface{},
	PrimaryBuildSource: *string,
	PrivateAccessConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig,
	StageExecutionTimeoutInSeconds: *f64,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts,
	WaitCriteria: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildPipelineId">BuildPipelineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_id DevopsBuildPipelineStage#build_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildPipelineStagePredecessorCollection">BuildPipelineStagePredecessorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a></code> | build_pipeline_stage_predecessor_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildPipelineStageType">BuildPipelineStageType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_stage_type DevopsBuildPipelineStage#build_pipeline_stage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildRunnerShapeConfig">BuildRunnerShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a></code> | build_runner_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildSourceCollection">BuildSourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a></code> | build_source_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildSpecFile">BuildSpecFile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_spec_file DevopsBuildPipelineStage#build_spec_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#defined_tags DevopsBuildPipelineStage#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.deliverArtifactCollection">DeliverArtifactCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a></code> | deliver_artifact_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.deployPipelineId">DeployPipelineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#deploy_pipeline_id DevopsBuildPipelineStage#deploy_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#description DevopsBuildPipelineStage#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#display_name DevopsBuildPipelineStage#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#freeform_tags DevopsBuildPipelineStage#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#id DevopsBuildPipelineStage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.image">Image</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#image DevopsBuildPipelineStage#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.isPassAllParametersEnabled">IsPassAllParametersEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#is_pass_all_parameters_enabled DevopsBuildPipelineStage#is_pass_all_parameters_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.primaryBuildSource">PrimaryBuildSource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#primary_build_source DevopsBuildPipelineStage#primary_build_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.privateAccessConfig">PrivateAccessConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a></code> | private_access_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.stageExecutionTimeoutInSeconds">StageExecutionTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#stage_execution_timeout_in_seconds DevopsBuildPipelineStage#stage_execution_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts">DevopsBuildPipelineStageTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.waitCriteria">WaitCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a></code> | wait_criteria block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BuildPipelineId`<sup>Required</sup> <a name="BuildPipelineId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildPipelineId"></a>

```go
BuildPipelineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_id DevopsBuildPipelineStage#build_pipeline_id}.

---

##### `BuildPipelineStagePredecessorCollection`<sup>Required</sup> <a name="BuildPipelineStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildPipelineStagePredecessorCollection"></a>

```go
BuildPipelineStagePredecessorCollection DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a>

build_pipeline_stage_predecessor_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_stage_predecessor_collection DevopsBuildPipelineStage#build_pipeline_stage_predecessor_collection}

---

##### `BuildPipelineStageType`<sup>Required</sup> <a name="BuildPipelineStageType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildPipelineStageType"></a>

```go
BuildPipelineStageType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_pipeline_stage_type DevopsBuildPipelineStage#build_pipeline_stage_type}.

---

##### `BuildRunnerShapeConfig`<sup>Optional</sup> <a name="BuildRunnerShapeConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildRunnerShapeConfig"></a>

```go
BuildRunnerShapeConfig DevopsBuildPipelineStageBuildRunnerShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a>

build_runner_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_runner_shape_config DevopsBuildPipelineStage#build_runner_shape_config}

---

##### `BuildSourceCollection`<sup>Optional</sup> <a name="BuildSourceCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildSourceCollection"></a>

```go
BuildSourceCollection DevopsBuildPipelineStageBuildSourceCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a>

build_source_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_source_collection DevopsBuildPipelineStage#build_source_collection}

---

##### `BuildSpecFile`<sup>Optional</sup> <a name="BuildSpecFile" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.buildSpecFile"></a>

```go
BuildSpecFile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#build_spec_file DevopsBuildPipelineStage#build_spec_file}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#defined_tags DevopsBuildPipelineStage#defined_tags}.

---

##### `DeliverArtifactCollection`<sup>Optional</sup> <a name="DeliverArtifactCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.deliverArtifactCollection"></a>

```go
DeliverArtifactCollection DevopsBuildPipelineStageDeliverArtifactCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a>

deliver_artifact_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#deliver_artifact_collection DevopsBuildPipelineStage#deliver_artifact_collection}

---

##### `DeployPipelineId`<sup>Optional</sup> <a name="DeployPipelineId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.deployPipelineId"></a>

```go
DeployPipelineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#deploy_pipeline_id DevopsBuildPipelineStage#deploy_pipeline_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#description DevopsBuildPipelineStage#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#display_name DevopsBuildPipelineStage#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#freeform_tags DevopsBuildPipelineStage#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#id DevopsBuildPipelineStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Image`<sup>Optional</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.image"></a>

```go
Image *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#image DevopsBuildPipelineStage#image}.

---

##### `IsPassAllParametersEnabled`<sup>Optional</sup> <a name="IsPassAllParametersEnabled" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.isPassAllParametersEnabled"></a>

```go
IsPassAllParametersEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#is_pass_all_parameters_enabled DevopsBuildPipelineStage#is_pass_all_parameters_enabled}.

---

##### `PrimaryBuildSource`<sup>Optional</sup> <a name="PrimaryBuildSource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.primaryBuildSource"></a>

```go
PrimaryBuildSource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#primary_build_source DevopsBuildPipelineStage#primary_build_source}.

---

##### `PrivateAccessConfig`<sup>Optional</sup> <a name="PrivateAccessConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.privateAccessConfig"></a>

```go
PrivateAccessConfig DevopsBuildPipelineStagePrivateAccessConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a>

private_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#private_access_config DevopsBuildPipelineStage#private_access_config}

---

##### `StageExecutionTimeoutInSeconds`<sup>Optional</sup> <a name="StageExecutionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.stageExecutionTimeoutInSeconds"></a>

```go
StageExecutionTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#stage_execution_timeout_in_seconds DevopsBuildPipelineStage#stage_execution_timeout_in_seconds}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.timeouts"></a>

```go
Timeouts DevopsBuildPipelineStageTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts">DevopsBuildPipelineStageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#timeouts DevopsBuildPipelineStage#timeouts}

---

##### `WaitCriteria`<sup>Optional</sup> <a name="WaitCriteria" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageConfig.property.waitCriteria"></a>

```go
WaitCriteria DevopsBuildPipelineStageWaitCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a>

wait_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#wait_criteria DevopsBuildPipelineStage#wait_criteria}

---

### DevopsBuildPipelineStageDeliverArtifactCollection <a name="DevopsBuildPipelineStageDeliverArtifactCollection" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

&devopsbuildpipelinestage.DevopsBuildPipelineStageDeliverArtifactCollection {
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection.property.items">Items</a></code> | <code>interface{}</code> | items block. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#items DevopsBuildPipelineStage#items}

---

### DevopsBuildPipelineStageDeliverArtifactCollectionItems <a name="DevopsBuildPipelineStageDeliverArtifactCollectionItems" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

&devopsbuildpipelinestage.DevopsBuildPipelineStageDeliverArtifactCollectionItems {
	ArtifactId: *string,
	ArtifactName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems.property.artifactId">ArtifactId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#artifact_id DevopsBuildPipelineStage#artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems.property.artifactName">ArtifactName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#artifact_name DevopsBuildPipelineStage#artifact_name}. |

---

##### `ArtifactId`<sup>Optional</sup> <a name="ArtifactId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems.property.artifactId"></a>

```go
ArtifactId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#artifact_id DevopsBuildPipelineStage#artifact_id}.

---

##### `ArtifactName`<sup>Optional</sup> <a name="ArtifactName" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItems.property.artifactName"></a>

```go
ArtifactName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#artifact_name DevopsBuildPipelineStage#artifact_name}.

---

### DevopsBuildPipelineStagePrivateAccessConfig <a name="DevopsBuildPipelineStagePrivateAccessConfig" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

&devopsbuildpipelinestage.DevopsBuildPipelineStagePrivateAccessConfig {
	NetworkChannelType: *string,
	SubnetId: *string,
	NsgIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig.property.networkChannelType">NetworkChannelType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#network_channel_type DevopsBuildPipelineStage#network_channel_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#subnet_id DevopsBuildPipelineStage#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#nsg_ids DevopsBuildPipelineStage#nsg_ids}. |

---

##### `NetworkChannelType`<sup>Required</sup> <a name="NetworkChannelType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig.property.networkChannelType"></a>

```go
NetworkChannelType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#network_channel_type DevopsBuildPipelineStage#network_channel_type}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#subnet_id DevopsBuildPipelineStage#subnet_id}.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig.property.nsgIds"></a>

```go
NsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#nsg_ids DevopsBuildPipelineStage#nsg_ids}.

---

### DevopsBuildPipelineStageTimeouts <a name="DevopsBuildPipelineStageTimeouts" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

&devopsbuildpipelinestage.DevopsBuildPipelineStageTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#create DevopsBuildPipelineStage#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#delete DevopsBuildPipelineStage#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#update DevopsBuildPipelineStage#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#create DevopsBuildPipelineStage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#delete DevopsBuildPipelineStage#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#update DevopsBuildPipelineStage#update}.

---

### DevopsBuildPipelineStageWaitCriteria <a name="DevopsBuildPipelineStageWaitCriteria" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

&devopsbuildpipelinestage.DevopsBuildPipelineStageWaitCriteria {
	WaitDuration: *string,
	WaitType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria.property.waitDuration">WaitDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#wait_duration DevopsBuildPipelineStage#wait_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria.property.waitType">WaitType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#wait_type DevopsBuildPipelineStage#wait_type}. |

---

##### `WaitDuration`<sup>Required</sup> <a name="WaitDuration" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria.property.waitDuration"></a>

```go
WaitDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#wait_duration DevopsBuildPipelineStage#wait_duration}.

---

##### `WaitType`<sup>Required</sup> <a name="WaitType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria.property.waitType"></a>

```go
WaitType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_build_pipeline_stage#wait_type DevopsBuildPipelineStage#wait_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList <a name="DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

devopsbuildpipelinestage.NewDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.get"></a>

```go
func Get(index *f64) DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference <a name="DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

devopsbuildpipelinestage.NewDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference <a name="DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

devopsbuildpipelinestage.NewDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.putItems">PutItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.items"></a>

```go
func Items() DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a>

---


### DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference <a name="DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

devopsbuildpipelinestage.NewDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resetOcpus">ResetOcpus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resetMemoryInGbs"></a>

```go
func ResetMemoryInGbs()
```

##### `ResetOcpus` <a name="ResetOcpus" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resetOcpus"></a>

```go
func ResetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.buildRunnerTypeInput">BuildRunnerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.buildRunnerType">BuildRunnerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BuildRunnerTypeInput`<sup>Optional</sup> <a name="BuildRunnerTypeInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.buildRunnerTypeInput"></a>

```go
func BuildRunnerTypeInput() *string
```

- *Type:* *string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.memoryInGbsInput"></a>

```go
func MemoryInGbsInput() *f64
```

- *Type:* *f64

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.ocpusInput"></a>

```go
func OcpusInput() *f64
```

- *Type:* *f64

---

##### `BuildRunnerType`<sup>Required</sup> <a name="BuildRunnerType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.buildRunnerType"></a>

```go
func BuildRunnerType() *string
```

- *Type:* *string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsBuildPipelineStageBuildRunnerShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildRunnerShapeConfig">DevopsBuildPipelineStageBuildRunnerShapeConfig</a>

---


### DevopsBuildPipelineStageBuildSourceCollectionItemsList <a name="DevopsBuildPipelineStageBuildSourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

devopsbuildpipelinestage.NewDevopsBuildPipelineStageBuildSourceCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsBuildPipelineStageBuildSourceCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.get"></a>

```go
func Get(index *f64) DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference <a name="DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

devopsbuildpipelinestage.NewDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetConnectionId">ResetConnectionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetRepositoryId">ResetRepositoryId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetRepositoryUrl">ResetRepositoryUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetBranch"></a>

```go
func ResetBranch()
```

##### `ResetConnectionId` <a name="ResetConnectionId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetConnectionId"></a>

```go
func ResetConnectionId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetRepositoryId` <a name="ResetRepositoryId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetRepositoryId"></a>

```go
func ResetRepositoryId()
```

##### `ResetRepositoryUrl` <a name="ResetRepositoryUrl" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resetRepositoryUrl"></a>

```go
func ResetRepositoryUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionIdInput">ConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryUrlInput">RepositoryUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryUrl">RepositoryUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionIdInput"></a>

```go
func ConnectionIdInput() *string
```

- *Type:* *string

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionTypeInput"></a>

```go
func ConnectionTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryIdInput"></a>

```go
func RepositoryIdInput() *string
```

- *Type:* *string

---

##### `RepositoryUrlInput`<sup>Optional</sup> <a name="RepositoryUrlInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryUrlInput"></a>

```go
func RepositoryUrlInput() *string
```

- *Type:* *string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryId"></a>

```go
func RepositoryId() *string
```

- *Type:* *string

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryUrl"></a>

```go
func RepositoryUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsBuildPipelineStageBuildSourceCollectionOutputReference <a name="DevopsBuildPipelineStageBuildSourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

devopsbuildpipelinestage.NewDevopsBuildPipelineStageBuildSourceCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsBuildPipelineStageBuildSourceCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetItems` <a name="ResetItems" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList">DevopsBuildPipelineStageBuildSourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.items"></a>

```go
func Items() DevopsBuildPipelineStageBuildSourceCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionItemsList">DevopsBuildPipelineStageBuildSourceCollectionItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsBuildPipelineStageBuildSourceCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageBuildSourceCollection">DevopsBuildPipelineStageBuildSourceCollection</a>

---


### DevopsBuildPipelineStageDeliverArtifactCollectionItemsList <a name="DevopsBuildPipelineStageDeliverArtifactCollectionItemsList" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

devopsbuildpipelinestage.NewDevopsBuildPipelineStageDeliverArtifactCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsBuildPipelineStageDeliverArtifactCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.get"></a>

```go
func Get(index *f64) DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference <a name="DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

devopsbuildpipelinestage.NewDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resetArtifactId">ResetArtifactId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resetArtifactName">ResetArtifactName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArtifactId` <a name="ResetArtifactId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resetArtifactId"></a>

```go
func ResetArtifactId()
```

##### `ResetArtifactName` <a name="ResetArtifactName" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resetArtifactName"></a>

```go
func ResetArtifactName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactIdInput">ArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactNameInput">ArtifactNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactId">ArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactName">ArtifactName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArtifactIdInput`<sup>Optional</sup> <a name="ArtifactIdInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactIdInput"></a>

```go
func ArtifactIdInput() *string
```

- *Type:* *string

---

##### `ArtifactNameInput`<sup>Optional</sup> <a name="ArtifactNameInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactNameInput"></a>

```go
func ArtifactNameInput() *string
```

- *Type:* *string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactId"></a>

```go
func ArtifactId() *string
```

- *Type:* *string

---

##### `ArtifactName`<sup>Required</sup> <a name="ArtifactName" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactName"></a>

```go
func ArtifactName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference <a name="DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

devopsbuildpipelinestage.NewDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetItems` <a name="ResetItems" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList">DevopsBuildPipelineStageDeliverArtifactCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.items"></a>

```go
func Items() DevopsBuildPipelineStageDeliverArtifactCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionItemsList">DevopsBuildPipelineStageDeliverArtifactCollectionItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsBuildPipelineStageDeliverArtifactCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageDeliverArtifactCollection">DevopsBuildPipelineStageDeliverArtifactCollection</a>

---


### DevopsBuildPipelineStagePrivateAccessConfigOutputReference <a name="DevopsBuildPipelineStagePrivateAccessConfigOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

devopsbuildpipelinestage.NewDevopsBuildPipelineStagePrivateAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsBuildPipelineStagePrivateAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.resetNsgIds">ResetNsgIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.resetNsgIds"></a>

```go
func ResetNsgIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.networkChannelTypeInput">NetworkChannelTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.nsgIdsInput">NsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.networkChannelType">NetworkChannelType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkChannelTypeInput`<sup>Optional</sup> <a name="NetworkChannelTypeInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.networkChannelTypeInput"></a>

```go
func NetworkChannelTypeInput() *string
```

- *Type:* *string

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.nsgIdsInput"></a>

```go
func NsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `NetworkChannelType`<sup>Required</sup> <a name="NetworkChannelType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.networkChannelType"></a>

```go
func NetworkChannelType() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsBuildPipelineStagePrivateAccessConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStagePrivateAccessConfig">DevopsBuildPipelineStagePrivateAccessConfig</a>

---


### DevopsBuildPipelineStageTimeoutsOutputReference <a name="DevopsBuildPipelineStageTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

devopsbuildpipelinestage.NewDevopsBuildPipelineStageTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsBuildPipelineStageTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsBuildPipelineStageWaitCriteriaOutputReference <a name="DevopsBuildPipelineStageWaitCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsbuildpipelinestage"

devopsbuildpipelinestage.NewDevopsBuildPipelineStageWaitCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsBuildPipelineStageWaitCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitDurationInput">WaitDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitTypeInput">WaitTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitDuration">WaitDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitType">WaitType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WaitDurationInput`<sup>Optional</sup> <a name="WaitDurationInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitDurationInput"></a>

```go
func WaitDurationInput() *string
```

- *Type:* *string

---

##### `WaitTypeInput`<sup>Optional</sup> <a name="WaitTypeInput" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitTypeInput"></a>

```go
func WaitTypeInput() *string
```

- *Type:* *string

---

##### `WaitDuration`<sup>Required</sup> <a name="WaitDuration" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitDuration"></a>

```go
func WaitDuration() *string
```

- *Type:* *string

---

##### `WaitType`<sup>Required</sup> <a name="WaitType" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitType"></a>

```go
func WaitType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsBuildPipelineStageWaitCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsBuildPipelineStage.DevopsBuildPipelineStageWaitCriteria">DevopsBuildPipelineStageWaitCriteria</a>

---



