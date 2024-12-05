# `devopsDeployment` Submodule <a name="`devopsDeployment` Submodule" id="rhizo-co-terraform-provider-oci.devopsDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsDeployment <a name="DevopsDeployment" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment oci_devops_deployment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeployment(scope Construct, id *string, config DevopsDeploymentConfig) DevopsDeployment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig">DevopsDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig">DevopsDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.putDeployArtifactOverrideArguments">PutDeployArtifactOverrideArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.putDeploymentArguments">PutDeploymentArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.putDeployStageOverrideArguments">PutDeployStageOverrideArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetDeployArtifactOverrideArguments">ResetDeployArtifactOverrideArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetDeploymentArguments">ResetDeploymentArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetDeployStageId">ResetDeployStageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetDeployStageOverrideArguments">ResetDeployStageOverrideArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetPreviousDeploymentId">ResetPreviousDeploymentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetTriggerNewDevopsDeployment">ResetTriggerNewDevopsDeployment</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeployArtifactOverrideArguments` <a name="PutDeployArtifactOverrideArguments" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.putDeployArtifactOverrideArguments"></a>

```go
func PutDeployArtifactOverrideArguments(value DevopsDeploymentDeployArtifactOverrideArguments)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.putDeployArtifactOverrideArguments.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArguments">DevopsDeploymentDeployArtifactOverrideArguments</a>

---

##### `PutDeploymentArguments` <a name="PutDeploymentArguments" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.putDeploymentArguments"></a>

```go
func PutDeploymentArguments(value DevopsDeploymentDeploymentArguments)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.putDeploymentArguments.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArguments">DevopsDeploymentDeploymentArguments</a>

---

##### `PutDeployStageOverrideArguments` <a name="PutDeployStageOverrideArguments" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.putDeployStageOverrideArguments"></a>

```go
func PutDeployStageOverrideArguments(value DevopsDeploymentDeployStageOverrideArguments)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.putDeployStageOverrideArguments.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArguments">DevopsDeploymentDeployStageOverrideArguments</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.putTimeouts"></a>

```go
func PutTimeouts(value DevopsDeploymentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeouts">DevopsDeploymentTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDeployArtifactOverrideArguments` <a name="ResetDeployArtifactOverrideArguments" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetDeployArtifactOverrideArguments"></a>

```go
func ResetDeployArtifactOverrideArguments()
```

##### `ResetDeploymentArguments` <a name="ResetDeploymentArguments" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetDeploymentArguments"></a>

```go
func ResetDeploymentArguments()
```

##### `ResetDeployStageId` <a name="ResetDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetDeployStageId"></a>

```go
func ResetDeployStageId()
```

##### `ResetDeployStageOverrideArguments` <a name="ResetDeployStageOverrideArguments" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetDeployStageOverrideArguments"></a>

```go
func ResetDeployStageOverrideArguments()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetId"></a>

```go
func ResetId()
```

##### `ResetPreviousDeploymentId` <a name="ResetPreviousDeploymentId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetPreviousDeploymentId"></a>

```go
func ResetPreviousDeploymentId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTriggerNewDevopsDeployment` <a name="ResetTriggerNewDevopsDeployment" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.resetTriggerNewDevopsDeployment"></a>

```go
func ResetTriggerNewDevopsDeployment()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.DevopsDeployment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.DevopsDeployment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.DevopsDeployment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.DevopsDeployment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DevopsDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DevopsDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DevopsDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DevopsDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deployArtifactOverrideArguments">DeployArtifactOverrideArguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference">DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deploymentArguments">DeploymentArguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference">DevopsDeploymentDeploymentArgumentsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deploymentExecutionProgress">DeploymentExecutionProgress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList">DevopsDeploymentDeploymentExecutionProgressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deployPipelineArtifacts">DeployPipelineArtifacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList">DevopsDeploymentDeployPipelineArtifactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deployPipelineEnvironments">DeployPipelineEnvironments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList">DevopsDeploymentDeployPipelineEnvironmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deployStageOverrideArguments">DeployStageOverrideArguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference">DevopsDeploymentDeployStageOverrideArgumentsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference">DevopsDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deployArtifactOverrideArgumentsInput">DeployArtifactOverrideArgumentsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArguments">DevopsDeploymentDeployArtifactOverrideArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deploymentArgumentsInput">DeploymentArgumentsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArguments">DevopsDeploymentDeploymentArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deployPipelineIdInput">DeployPipelineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deployStageIdInput">DeployStageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deployStageOverrideArgumentsInput">DeployStageOverrideArgumentsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArguments">DevopsDeploymentDeployStageOverrideArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.previousDeploymentIdInput">PreviousDeploymentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.triggerNewDevopsDeploymentInput">TriggerNewDevopsDeploymentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deployPipelineId">DeployPipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deployStageId">DeployStageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.previousDeploymentId">PreviousDeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.triggerNewDevopsDeployment">TriggerNewDevopsDeployment</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DeployArtifactOverrideArguments`<sup>Required</sup> <a name="DeployArtifactOverrideArguments" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deployArtifactOverrideArguments"></a>

```go
func DeployArtifactOverrideArguments() DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference">DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference</a>

---

##### `DeploymentArguments`<sup>Required</sup> <a name="DeploymentArguments" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deploymentArguments"></a>

```go
func DeploymentArguments() DevopsDeploymentDeploymentArgumentsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference">DevopsDeploymentDeploymentArgumentsOutputReference</a>

---

##### `DeploymentExecutionProgress`<sup>Required</sup> <a name="DeploymentExecutionProgress" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deploymentExecutionProgress"></a>

```go
func DeploymentExecutionProgress() DevopsDeploymentDeploymentExecutionProgressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList">DevopsDeploymentDeploymentExecutionProgressList</a>

---

##### `DeployPipelineArtifacts`<sup>Required</sup> <a name="DeployPipelineArtifacts" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deployPipelineArtifacts"></a>

```go
func DeployPipelineArtifacts() DevopsDeploymentDeployPipelineArtifactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList">DevopsDeploymentDeployPipelineArtifactsList</a>

---

##### `DeployPipelineEnvironments`<sup>Required</sup> <a name="DeployPipelineEnvironments" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deployPipelineEnvironments"></a>

```go
func DeployPipelineEnvironments() DevopsDeploymentDeployPipelineEnvironmentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList">DevopsDeploymentDeployPipelineEnvironmentsList</a>

---

##### `DeployStageOverrideArguments`<sup>Required</sup> <a name="DeployStageOverrideArguments" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deployStageOverrideArguments"></a>

```go
func DeployStageOverrideArguments() DevopsDeploymentDeployStageOverrideArgumentsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference">DevopsDeploymentDeployStageOverrideArgumentsOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.timeouts"></a>

```go
func Timeouts() DevopsDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference">DevopsDeploymentTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeployArtifactOverrideArgumentsInput`<sup>Optional</sup> <a name="DeployArtifactOverrideArgumentsInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deployArtifactOverrideArgumentsInput"></a>

```go
func DeployArtifactOverrideArgumentsInput() DevopsDeploymentDeployArtifactOverrideArguments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArguments">DevopsDeploymentDeployArtifactOverrideArguments</a>

---

##### `DeploymentArgumentsInput`<sup>Optional</sup> <a name="DeploymentArgumentsInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deploymentArgumentsInput"></a>

```go
func DeploymentArgumentsInput() DevopsDeploymentDeploymentArguments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArguments">DevopsDeploymentDeploymentArguments</a>

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deploymentTypeInput"></a>

```go
func DeploymentTypeInput() *string
```

- *Type:* *string

---

##### `DeployPipelineIdInput`<sup>Optional</sup> <a name="DeployPipelineIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deployPipelineIdInput"></a>

```go
func DeployPipelineIdInput() *string
```

- *Type:* *string

---

##### `DeployStageIdInput`<sup>Optional</sup> <a name="DeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deployStageIdInput"></a>

```go
func DeployStageIdInput() *string
```

- *Type:* *string

---

##### `DeployStageOverrideArgumentsInput`<sup>Optional</sup> <a name="DeployStageOverrideArgumentsInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deployStageOverrideArgumentsInput"></a>

```go
func DeployStageOverrideArgumentsInput() DevopsDeploymentDeployStageOverrideArguments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArguments">DevopsDeploymentDeployStageOverrideArguments</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PreviousDeploymentIdInput`<sup>Optional</sup> <a name="PreviousDeploymentIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.previousDeploymentIdInput"></a>

```go
func PreviousDeploymentIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TriggerNewDevopsDeploymentInput`<sup>Optional</sup> <a name="TriggerNewDevopsDeploymentInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.triggerNewDevopsDeploymentInput"></a>

```go
func TriggerNewDevopsDeploymentInput() interface{}
```

- *Type:* interface{}

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deploymentType"></a>

```go
func DeploymentType() *string
```

- *Type:* *string

---

##### `DeployPipelineId`<sup>Required</sup> <a name="DeployPipelineId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deployPipelineId"></a>

```go
func DeployPipelineId() *string
```

- *Type:* *string

---

##### `DeployStageId`<sup>Required</sup> <a name="DeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.deployStageId"></a>

```go
func DeployStageId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PreviousDeploymentId`<sup>Required</sup> <a name="PreviousDeploymentId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.previousDeploymentId"></a>

```go
func PreviousDeploymentId() *string
```

- *Type:* *string

---

##### `TriggerNewDevopsDeployment`<sup>Required</sup> <a name="TriggerNewDevopsDeployment" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.triggerNewDevopsDeployment"></a>

```go
func TriggerNewDevopsDeployment() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeployment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsDeploymentConfig <a name="DevopsDeploymentConfig" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

&devopsdeployment.DevopsDeploymentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DeploymentType: *string,
	DeployPipelineId: *string,
	DefinedTags: *map[string]*string,
	DeployArtifactOverrideArguments: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArguments,
	DeploymentArguments: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployment.DevopsDeploymentDeploymentArguments,
	DeployStageId: *string,
	DeployStageOverrideArguments: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArguments,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	PreviousDeploymentId: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployment.DevopsDeploymentTimeouts,
	TriggerNewDevopsDeployment: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#deployment_type DevopsDeployment#deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.deployPipelineId">DeployPipelineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#deploy_pipeline_id DevopsDeployment#deploy_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#defined_tags DevopsDeployment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.deployArtifactOverrideArguments">DeployArtifactOverrideArguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArguments">DevopsDeploymentDeployArtifactOverrideArguments</a></code> | deploy_artifact_override_arguments block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.deploymentArguments">DeploymentArguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArguments">DevopsDeploymentDeploymentArguments</a></code> | deployment_arguments block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.deployStageId">DeployStageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#deploy_stage_id DevopsDeployment#deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.deployStageOverrideArguments">DeployStageOverrideArguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArguments">DevopsDeploymentDeployStageOverrideArguments</a></code> | deploy_stage_override_arguments block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#display_name DevopsDeployment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#freeform_tags DevopsDeployment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#id DevopsDeployment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.previousDeploymentId">PreviousDeploymentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#previous_deployment_id DevopsDeployment#previous_deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeouts">DevopsDeploymentTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.triggerNewDevopsDeployment">TriggerNewDevopsDeployment</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#trigger_new_devops_deployment DevopsDeployment#trigger_new_devops_deployment}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.deploymentType"></a>

```go
DeploymentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#deployment_type DevopsDeployment#deployment_type}.

---

##### `DeployPipelineId`<sup>Required</sup> <a name="DeployPipelineId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.deployPipelineId"></a>

```go
DeployPipelineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#deploy_pipeline_id DevopsDeployment#deploy_pipeline_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#defined_tags DevopsDeployment#defined_tags}.

---

##### `DeployArtifactOverrideArguments`<sup>Optional</sup> <a name="DeployArtifactOverrideArguments" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.deployArtifactOverrideArguments"></a>

```go
DeployArtifactOverrideArguments DevopsDeploymentDeployArtifactOverrideArguments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArguments">DevopsDeploymentDeployArtifactOverrideArguments</a>

deploy_artifact_override_arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#deploy_artifact_override_arguments DevopsDeployment#deploy_artifact_override_arguments}

---

##### `DeploymentArguments`<sup>Optional</sup> <a name="DeploymentArguments" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.deploymentArguments"></a>

```go
DeploymentArguments DevopsDeploymentDeploymentArguments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArguments">DevopsDeploymentDeploymentArguments</a>

deployment_arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#deployment_arguments DevopsDeployment#deployment_arguments}

---

##### `DeployStageId`<sup>Optional</sup> <a name="DeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.deployStageId"></a>

```go
DeployStageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#deploy_stage_id DevopsDeployment#deploy_stage_id}.

---

##### `DeployStageOverrideArguments`<sup>Optional</sup> <a name="DeployStageOverrideArguments" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.deployStageOverrideArguments"></a>

```go
DeployStageOverrideArguments DevopsDeploymentDeployStageOverrideArguments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArguments">DevopsDeploymentDeployStageOverrideArguments</a>

deploy_stage_override_arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#deploy_stage_override_arguments DevopsDeployment#deploy_stage_override_arguments}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#display_name DevopsDeployment#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#freeform_tags DevopsDeployment#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#id DevopsDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PreviousDeploymentId`<sup>Optional</sup> <a name="PreviousDeploymentId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.previousDeploymentId"></a>

```go
PreviousDeploymentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#previous_deployment_id DevopsDeployment#previous_deployment_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.timeouts"></a>

```go
Timeouts DevopsDeploymentTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeouts">DevopsDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#timeouts DevopsDeployment#timeouts}

---

##### `TriggerNewDevopsDeployment`<sup>Optional</sup> <a name="TriggerNewDevopsDeployment" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentConfig.property.triggerNewDevopsDeployment"></a>

```go
TriggerNewDevopsDeployment interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#trigger_new_devops_deployment DevopsDeployment#trigger_new_devops_deployment}.

---

### DevopsDeploymentDeployArtifactOverrideArguments <a name="DevopsDeploymentDeployArtifactOverrideArguments" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArguments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArguments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

&devopsdeployment.DevopsDeploymentDeployArtifactOverrideArguments {
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArguments.property.items">Items</a></code> | <code>interface{}</code> | items block. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArguments.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#items DevopsDeployment#items}

---

### DevopsDeploymentDeployArtifactOverrideArgumentsItems <a name="DevopsDeploymentDeployArtifactOverrideArgumentsItems" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

&devopsdeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItems {
	DeployArtifactId: *string,
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItems.property.deployArtifactId">DeployArtifactId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#deploy_artifact_id DevopsDeployment#deploy_artifact_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItems.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#name DevopsDeployment#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItems.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#value DevopsDeployment#value}. |

---

##### `DeployArtifactId`<sup>Optional</sup> <a name="DeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItems.property.deployArtifactId"></a>

```go
DeployArtifactId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#deploy_artifact_id DevopsDeployment#deploy_artifact_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItems.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#name DevopsDeployment#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItems.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#value DevopsDeployment#value}.

---

### DevopsDeploymentDeploymentArguments <a name="DevopsDeploymentDeploymentArguments" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArguments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArguments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

&devopsdeployment.DevopsDeploymentDeploymentArguments {
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArguments.property.items">Items</a></code> | <code>interface{}</code> | items block. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArguments.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#items DevopsDeployment#items}

---

### DevopsDeploymentDeploymentArgumentsItems <a name="DevopsDeploymentDeploymentArgumentsItems" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

&devopsdeployment.DevopsDeploymentDeploymentArgumentsItems {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItems.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#name DevopsDeployment#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItems.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#value DevopsDeployment#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItems.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#name DevopsDeployment#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItems.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#value DevopsDeployment#value}.

---

### DevopsDeploymentDeploymentExecutionProgress <a name="DevopsDeploymentDeploymentExecutionProgress" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgress.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

&devopsdeployment.DevopsDeploymentDeploymentExecutionProgress {

}
```


### DevopsDeploymentDeployPipelineArtifacts <a name="DevopsDeploymentDeployPipelineArtifacts" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifacts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

&devopsdeployment.DevopsDeploymentDeployPipelineArtifacts {

}
```


### DevopsDeploymentDeployPipelineArtifactsItems <a name="DevopsDeploymentDeployPipelineArtifactsItems" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

&devopsdeployment.DevopsDeploymentDeployPipelineArtifactsItems {

}
```


### DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStages <a name="DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStages" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

&devopsdeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStages {

}
```


### DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItems <a name="DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItems" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

&devopsdeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItems {

}
```


### DevopsDeploymentDeployPipelineEnvironments <a name="DevopsDeploymentDeployPipelineEnvironments" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

&devopsdeployment.DevopsDeploymentDeployPipelineEnvironments {

}
```


### DevopsDeploymentDeployPipelineEnvironmentsItems <a name="DevopsDeploymentDeployPipelineEnvironmentsItems" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

&devopsdeployment.DevopsDeploymentDeployPipelineEnvironmentsItems {

}
```


### DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStages <a name="DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStages" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

&devopsdeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStages {

}
```


### DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItems <a name="DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItems" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

&devopsdeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItems {

}
```


### DevopsDeploymentDeployStageOverrideArguments <a name="DevopsDeploymentDeployStageOverrideArguments" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArguments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArguments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

&devopsdeployment.DevopsDeploymentDeployStageOverrideArguments {
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArguments.property.items">Items</a></code> | <code>interface{}</code> | items block. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArguments.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#items DevopsDeployment#items}

---

### DevopsDeploymentDeployStageOverrideArgumentsItems <a name="DevopsDeploymentDeployStageOverrideArgumentsItems" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

&devopsdeployment.DevopsDeploymentDeployStageOverrideArgumentsItems {
	DeployStageId: *string,
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItems.property.deployStageId">DeployStageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#deploy_stage_id DevopsDeployment#deploy_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItems.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#name DevopsDeployment#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItems.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#value DevopsDeployment#value}. |

---

##### `DeployStageId`<sup>Optional</sup> <a name="DeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItems.property.deployStageId"></a>

```go
DeployStageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#deploy_stage_id DevopsDeployment#deploy_stage_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItems.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#name DevopsDeployment#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItems.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#value DevopsDeployment#value}.

---

### DevopsDeploymentTimeouts <a name="DevopsDeploymentTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

&devopsdeployment.DevopsDeploymentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#create DevopsDeployment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#delete DevopsDeployment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#update DevopsDeployment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#create DevopsDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#delete DevopsDeployment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deployment#update DevopsDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsDeploymentDeployArtifactOverrideArgumentsItemsList <a name="DevopsDeploymentDeployArtifactOverrideArgumentsItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeployArtifactOverrideArgumentsItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsDeploymentDeployArtifactOverrideArgumentsItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.get"></a>

```go
func Get(index *f64) DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference <a name="DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.resetDeployArtifactId">ResetDeployArtifactId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeployArtifactId` <a name="ResetDeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.resetDeployArtifactId"></a>

```go
func ResetDeployArtifactId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.property.deployArtifactIdInput">DeployArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.property.deployArtifactId">DeployArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeployArtifactIdInput`<sup>Optional</sup> <a name="DeployArtifactIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.property.deployArtifactIdInput"></a>

```go
func DeployArtifactIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `DeployArtifactId`<sup>Required</sup> <a name="DeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.property.deployArtifactId"></a>

```go
func DeployArtifactId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference <a name="DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeployArtifactOverrideArgumentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetItems` <a name="ResetItems" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList">DevopsDeploymentDeployArtifactOverrideArgumentsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArguments">DevopsDeploymentDeployArtifactOverrideArguments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.property.items"></a>

```go
func Items() DevopsDeploymentDeployArtifactOverrideArgumentsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsItemsList">DevopsDeploymentDeployArtifactOverrideArgumentsItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArgumentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeploymentDeployArtifactOverrideArguments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployArtifactOverrideArguments">DevopsDeploymentDeployArtifactOverrideArguments</a>

---


### DevopsDeploymentDeploymentArgumentsItemsList <a name="DevopsDeploymentDeploymentArgumentsItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeploymentArgumentsItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsDeploymentDeploymentArgumentsItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.get"></a>

```go
func Get(index *f64) DevopsDeploymentDeploymentArgumentsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsDeploymentDeploymentArgumentsItemsOutputReference <a name="DevopsDeploymentDeploymentArgumentsItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeploymentArgumentsItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsDeploymentDeploymentArgumentsItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsDeploymentDeploymentArgumentsOutputReference <a name="DevopsDeploymentDeploymentArgumentsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeploymentArgumentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeploymentDeploymentArgumentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetItems` <a name="ResetItems" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList">DevopsDeploymentDeploymentArgumentsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArguments">DevopsDeploymentDeploymentArguments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.property.items"></a>

```go
func Items() DevopsDeploymentDeploymentArgumentsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsItemsList">DevopsDeploymentDeploymentArgumentsItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArgumentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeploymentDeploymentArguments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentArguments">DevopsDeploymentDeploymentArguments</a>

---


### DevopsDeploymentDeploymentExecutionProgressList <a name="DevopsDeploymentDeploymentExecutionProgressList" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeploymentExecutionProgressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsDeploymentDeploymentExecutionProgressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.get"></a>

```go
func Get(index *f64) DevopsDeploymentDeploymentExecutionProgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DevopsDeploymentDeploymentExecutionProgressOutputReference <a name="DevopsDeploymentDeploymentExecutionProgressOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeploymentExecutionProgressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsDeploymentDeploymentExecutionProgressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.property.deployStageExecutionProgress">DeployStageExecutionProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.property.timeFinished">TimeFinished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgress">DevopsDeploymentDeploymentExecutionProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeployStageExecutionProgress`<sup>Required</sup> <a name="DeployStageExecutionProgress" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.property.deployStageExecutionProgress"></a>

```go
func DeployStageExecutionProgress() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.property.timeFinished"></a>

```go
func TimeFinished() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgressOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeploymentDeploymentExecutionProgress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeploymentExecutionProgress">DevopsDeploymentDeploymentExecutionProgress</a>

---


### DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList <a name="DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.get"></a>

```go
func Get(index *f64) DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference <a name="DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.deployStageId">DeployStageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItems">DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeployStageId`<sup>Required</sup> <a name="DeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.deployStageId"></a>

```go
func DeployStageId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItems">DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItems</a>

---


### DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList <a name="DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.get"></a>

```go
func Get(index *f64) DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference <a name="DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList">DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStages">DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.items"></a>

```go
func Items() DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList">DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStages">DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStages</a>

---


### DevopsDeploymentDeployPipelineArtifactsItemsList <a name="DevopsDeploymentDeployPipelineArtifactsItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeployPipelineArtifactsItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsDeploymentDeployPipelineArtifactsItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.get"></a>

```go
func Get(index *f64) DevopsDeploymentDeployPipelineArtifactsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DevopsDeploymentDeployPipelineArtifactsItemsOutputReference <a name="DevopsDeploymentDeployPipelineArtifactsItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeployPipelineArtifactsItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsDeploymentDeployPipelineArtifactsItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.property.deployArtifactId">DeployArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.property.deployPipelineStages">DeployPipelineStages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList">DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItems">DevopsDeploymentDeployPipelineArtifactsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeployArtifactId`<sup>Required</sup> <a name="DeployArtifactId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.property.deployArtifactId"></a>

```go
func DeployArtifactId() *string
```

- *Type:* *string

---

##### `DeployPipelineStages`<sup>Required</sup> <a name="DeployPipelineStages" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.property.deployPipelineStages"></a>

```go
func DeployPipelineStages() DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList">DevopsDeploymentDeployPipelineArtifactsItemsDeployPipelineStagesList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeploymentDeployPipelineArtifactsItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItems">DevopsDeploymentDeployPipelineArtifactsItems</a>

---


### DevopsDeploymentDeployPipelineArtifactsList <a name="DevopsDeploymentDeployPipelineArtifactsList" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeployPipelineArtifactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsDeploymentDeployPipelineArtifactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.get"></a>

```go
func Get(index *f64) DevopsDeploymentDeployPipelineArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DevopsDeploymentDeployPipelineArtifactsOutputReference <a name="DevopsDeploymentDeployPipelineArtifactsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeployPipelineArtifactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsDeploymentDeployPipelineArtifactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList">DevopsDeploymentDeployPipelineArtifactsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifacts">DevopsDeploymentDeployPipelineArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.property.items"></a>

```go
func Items() DevopsDeploymentDeployPipelineArtifactsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsItemsList">DevopsDeploymentDeployPipelineArtifactsItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifactsOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeploymentDeployPipelineArtifacts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineArtifacts">DevopsDeploymentDeployPipelineArtifacts</a>

---


### DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList <a name="DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.get"></a>

```go
func Get(index *f64) DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference <a name="DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.deployStageId">DeployStageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItems">DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeployStageId`<sup>Required</sup> <a name="DeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.deployStageId"></a>

```go
func DeployStageId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItems">DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItems</a>

---


### DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList <a name="DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.get"></a>

```go
func Get(index *f64) DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference <a name="DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList">DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStages">DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.items"></a>

```go
func Items() DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList">DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStages">DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStages</a>

---


### DevopsDeploymentDeployPipelineEnvironmentsItemsList <a name="DevopsDeploymentDeployPipelineEnvironmentsItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeployPipelineEnvironmentsItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsDeploymentDeployPipelineEnvironmentsItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.get"></a>

```go
func Get(index *f64) DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference <a name="DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.property.deployEnvironmentId">DeployEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.property.deployPipelineStages">DeployPipelineStages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList">DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItems">DevopsDeploymentDeployPipelineEnvironmentsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeployEnvironmentId`<sup>Required</sup> <a name="DeployEnvironmentId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.property.deployEnvironmentId"></a>

```go
func DeployEnvironmentId() *string
```

- *Type:* *string

---

##### `DeployPipelineStages`<sup>Required</sup> <a name="DeployPipelineStages" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.property.deployPipelineStages"></a>

```go
func DeployPipelineStages() DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList">DevopsDeploymentDeployPipelineEnvironmentsItemsDeployPipelineStagesList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeploymentDeployPipelineEnvironmentsItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItems">DevopsDeploymentDeployPipelineEnvironmentsItems</a>

---


### DevopsDeploymentDeployPipelineEnvironmentsList <a name="DevopsDeploymentDeployPipelineEnvironmentsList" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeployPipelineEnvironmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsDeploymentDeployPipelineEnvironmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.get"></a>

```go
func Get(index *f64) DevopsDeploymentDeployPipelineEnvironmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DevopsDeploymentDeployPipelineEnvironmentsOutputReference <a name="DevopsDeploymentDeployPipelineEnvironmentsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeployPipelineEnvironmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsDeploymentDeployPipelineEnvironmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList">DevopsDeploymentDeployPipelineEnvironmentsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironments">DevopsDeploymentDeployPipelineEnvironments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.property.items"></a>

```go
func Items() DevopsDeploymentDeployPipelineEnvironmentsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsItemsList">DevopsDeploymentDeployPipelineEnvironmentsItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeploymentDeployPipelineEnvironments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployPipelineEnvironments">DevopsDeploymentDeployPipelineEnvironments</a>

---


### DevopsDeploymentDeployStageOverrideArgumentsItemsList <a name="DevopsDeploymentDeployStageOverrideArgumentsItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeployStageOverrideArgumentsItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsDeploymentDeployStageOverrideArgumentsItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.get"></a>

```go
func Get(index *f64) DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference <a name="DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.resetDeployStageId">ResetDeployStageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeployStageId` <a name="ResetDeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.resetDeployStageId"></a>

```go
func ResetDeployStageId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.property.deployStageIdInput">DeployStageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.property.deployStageId">DeployStageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeployStageIdInput`<sup>Optional</sup> <a name="DeployStageIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.property.deployStageIdInput"></a>

```go
func DeployStageIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `DeployStageId`<sup>Required</sup> <a name="DeployStageId" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.property.deployStageId"></a>

```go
func DeployStageId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsDeploymentDeployStageOverrideArgumentsOutputReference <a name="DevopsDeploymentDeployStageOverrideArgumentsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentDeployStageOverrideArgumentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeploymentDeployStageOverrideArgumentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetItems` <a name="ResetItems" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList">DevopsDeploymentDeployStageOverrideArgumentsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArguments">DevopsDeploymentDeployStageOverrideArguments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.property.items"></a>

```go
func Items() DevopsDeploymentDeployStageOverrideArgumentsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsItemsList">DevopsDeploymentDeployStageOverrideArgumentsItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArgumentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeploymentDeployStageOverrideArguments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentDeployStageOverrideArguments">DevopsDeploymentDeployStageOverrideArguments</a>

---


### DevopsDeploymentTimeoutsOutputReference <a name="DevopsDeploymentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployment"

devopsdeployment.NewDevopsDeploymentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeploymentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployment.DevopsDeploymentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



