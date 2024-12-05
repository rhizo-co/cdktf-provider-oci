# `mediaServicesMediaWorkflow` Submodule <a name="`mediaServicesMediaWorkflow` Submodule" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaServicesMediaWorkflow <a name="MediaServicesMediaWorkflow" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow oci_media_services_media_workflow}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaworkflow"

mediaservicesmediaworkflow.NewMediaServicesMediaWorkflow(scope Construct, id *string, config MediaServicesMediaWorkflowConfig) MediaServicesMediaWorkflow
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig">MediaServicesMediaWorkflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig">MediaServicesMediaWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putLocks">PutLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTasks">PutTasks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetIsLockOverride">ResetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetLocks">ResetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetMediaWorkflowConfigurationIds">ResetMediaWorkflowConfigurationIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetTasks">ResetTasks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLocks` <a name="PutLocks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putLocks"></a>

```go
func PutLocks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putLocks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTasks` <a name="PutTasks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTasks"></a>

```go
func PutTasks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTasks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTimeouts"></a>

```go
func PutTimeouts(value MediaServicesMediaWorkflowTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts">MediaServicesMediaWorkflowTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetId"></a>

```go
func ResetId()
```

##### `ResetIsLockOverride` <a name="ResetIsLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetIsLockOverride"></a>

```go
func ResetIsLockOverride()
```

##### `ResetLocks` <a name="ResetLocks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetLocks"></a>

```go
func ResetLocks()
```

##### `ResetMediaWorkflowConfigurationIds` <a name="ResetMediaWorkflowConfigurationIds" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetMediaWorkflowConfigurationIds"></a>

```go
func ResetMediaWorkflowConfigurationIds()
```

##### `ResetParameters` <a name="ResetParameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetTasks` <a name="ResetTasks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetTasks"></a>

```go
func ResetTasks()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MediaServicesMediaWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaworkflow"

mediaservicesmediaworkflow.MediaServicesMediaWorkflow_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaworkflow"

mediaservicesmediaworkflow.MediaServicesMediaWorkflow_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaworkflow"

mediaservicesmediaworkflow.MediaServicesMediaWorkflow_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaworkflow"

mediaservicesmediaworkflow.MediaServicesMediaWorkflow_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MediaServicesMediaWorkflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MediaServicesMediaWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MediaServicesMediaWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MediaServicesMediaWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.lifecyleDetails">LifecyleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList">MediaServicesMediaWorkflowLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tasks">Tasks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList">MediaServicesMediaWorkflowTasksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference">MediaServicesMediaWorkflowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.isLockOverrideInput">IsLockOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.locksInput">LocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.mediaWorkflowConfigurationIdsInput">MediaWorkflowConfigurationIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.parametersInput">ParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tasksInput">TasksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.isLockOverride">IsLockOverride</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.mediaWorkflowConfigurationIds">MediaWorkflowConfigurationIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LifecyleDetails`<sup>Required</sup> <a name="LifecyleDetails" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.lifecyleDetails"></a>

```go
func LifecyleDetails() *string
```

- *Type:* *string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.locks"></a>

```go
func Locks() MediaServicesMediaWorkflowLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList">MediaServicesMediaWorkflowLocksList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Tasks`<sup>Required</sup> <a name="Tasks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tasks"></a>

```go
func Tasks() MediaServicesMediaWorkflowTasksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList">MediaServicesMediaWorkflowTasksList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeouts"></a>

```go
func Timeouts() MediaServicesMediaWorkflowTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference">MediaServicesMediaWorkflowTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsLockOverrideInput`<sup>Optional</sup> <a name="IsLockOverrideInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.isLockOverrideInput"></a>

```go
func IsLockOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `LocksInput`<sup>Optional</sup> <a name="LocksInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.locksInput"></a>

```go
func LocksInput() interface{}
```

- *Type:* interface{}

---

##### `MediaWorkflowConfigurationIdsInput`<sup>Optional</sup> <a name="MediaWorkflowConfigurationIdsInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.mediaWorkflowConfigurationIdsInput"></a>

```go
func MediaWorkflowConfigurationIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.parametersInput"></a>

```go
func ParametersInput() *string
```

- *Type:* *string

---

##### `TasksInput`<sup>Optional</sup> <a name="TasksInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tasksInput"></a>

```go
func TasksInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.isLockOverride"></a>

```go
func IsLockOverride() interface{}
```

- *Type:* interface{}

---

##### `MediaWorkflowConfigurationIds`<sup>Required</sup> <a name="MediaWorkflowConfigurationIds" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.mediaWorkflowConfigurationIds"></a>

```go
func MediaWorkflowConfigurationIds() *[]*string
```

- *Type:* *[]*string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaServicesMediaWorkflowConfig <a name="MediaServicesMediaWorkflowConfig" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaworkflow"

&mediaservicesmediaworkflow.MediaServicesMediaWorkflowConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	IsLockOverride: interface{},
	Locks: interface{},
	MediaWorkflowConfigurationIds: *[]*string,
	Parameters: *string,
	Tasks: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#compartment_id MediaServicesMediaWorkflow#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#display_name MediaServicesMediaWorkflow#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#defined_tags MediaServicesMediaWorkflow#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#freeform_tags MediaServicesMediaWorkflow#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#id MediaServicesMediaWorkflow#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.isLockOverride">IsLockOverride</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#is_lock_override MediaServicesMediaWorkflow#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.locks">Locks</a></code> | <code>interface{}</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.mediaWorkflowConfigurationIds">MediaWorkflowConfigurationIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#media_workflow_configuration_ids MediaServicesMediaWorkflow#media_workflow_configuration_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.parameters">Parameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#parameters MediaServicesMediaWorkflow#parameters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.tasks">Tasks</a></code> | <code>interface{}</code> | tasks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts">MediaServicesMediaWorkflowTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#compartment_id MediaServicesMediaWorkflow#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#display_name MediaServicesMediaWorkflow#display_name}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#defined_tags MediaServicesMediaWorkflow#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#freeform_tags MediaServicesMediaWorkflow#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#id MediaServicesMediaWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsLockOverride`<sup>Optional</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.isLockOverride"></a>

```go
IsLockOverride interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#is_lock_override MediaServicesMediaWorkflow#is_lock_override}.

---

##### `Locks`<sup>Optional</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.locks"></a>

```go
Locks interface{}
```

- *Type:* interface{}

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#locks MediaServicesMediaWorkflow#locks}

---

##### `MediaWorkflowConfigurationIds`<sup>Optional</sup> <a name="MediaWorkflowConfigurationIds" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.mediaWorkflowConfigurationIds"></a>

```go
MediaWorkflowConfigurationIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#media_workflow_configuration_ids MediaServicesMediaWorkflow#media_workflow_configuration_ids}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.parameters"></a>

```go
Parameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#parameters MediaServicesMediaWorkflow#parameters}.

---

##### `Tasks`<sup>Optional</sup> <a name="Tasks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.tasks"></a>

```go
Tasks interface{}
```

- *Type:* interface{}

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#tasks MediaServicesMediaWorkflow#tasks}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.timeouts"></a>

```go
Timeouts MediaServicesMediaWorkflowTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts">MediaServicesMediaWorkflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#timeouts MediaServicesMediaWorkflow#timeouts}

---

### MediaServicesMediaWorkflowLocks <a name="MediaServicesMediaWorkflowLocks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaworkflow"

&mediaservicesmediaworkflow.MediaServicesMediaWorkflowLocks {
	CompartmentId: *string,
	Type: *string,
	Message: *string,
	RelatedResourceId: *string,
	TimeCreated: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#compartment_id MediaServicesMediaWorkflow#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#type MediaServicesMediaWorkflow#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.message">Message</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#message MediaServicesMediaWorkflow#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#related_resource_id MediaServicesMediaWorkflow#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#time_created MediaServicesMediaWorkflow#time_created}. |

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#compartment_id MediaServicesMediaWorkflow#compartment_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#type MediaServicesMediaWorkflow#type}.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.message"></a>

```go
Message *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#message MediaServicesMediaWorkflow#message}.

---

##### `RelatedResourceId`<sup>Optional</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.relatedResourceId"></a>

```go
RelatedResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#related_resource_id MediaServicesMediaWorkflow#related_resource_id}.

---

##### `TimeCreated`<sup>Optional</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.timeCreated"></a>

```go
TimeCreated *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#time_created MediaServicesMediaWorkflow#time_created}.

---

### MediaServicesMediaWorkflowTasks <a name="MediaServicesMediaWorkflowTasks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaworkflow"

&mediaservicesmediaworkflow.MediaServicesMediaWorkflowTasks {
	Key: *string,
	Parameters: *string,
	Type: *string,
	Version: *string,
	EnableParameterReference: *string,
	EnableWhenReferencedParameterEquals: *map[string]*string,
	Prerequisites: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#key MediaServicesMediaWorkflow#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.parameters">Parameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#parameters MediaServicesMediaWorkflow#parameters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#type MediaServicesMediaWorkflow#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#version MediaServicesMediaWorkflow#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.enableParameterReference">EnableParameterReference</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#enable_parameter_reference MediaServicesMediaWorkflow#enable_parameter_reference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.enableWhenReferencedParameterEquals">EnableWhenReferencedParameterEquals</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#enable_when_referenced_parameter_equals MediaServicesMediaWorkflow#enable_when_referenced_parameter_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.prerequisites">Prerequisites</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#prerequisites MediaServicesMediaWorkflow#prerequisites}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#key MediaServicesMediaWorkflow#key}.

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.parameters"></a>

```go
Parameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#parameters MediaServicesMediaWorkflow#parameters}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#type MediaServicesMediaWorkflow#type}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#version MediaServicesMediaWorkflow#version}.

---

##### `EnableParameterReference`<sup>Optional</sup> <a name="EnableParameterReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.enableParameterReference"></a>

```go
EnableParameterReference *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#enable_parameter_reference MediaServicesMediaWorkflow#enable_parameter_reference}.

---

##### `EnableWhenReferencedParameterEquals`<sup>Optional</sup> <a name="EnableWhenReferencedParameterEquals" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.enableWhenReferencedParameterEquals"></a>

```go
EnableWhenReferencedParameterEquals *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#enable_when_referenced_parameter_equals MediaServicesMediaWorkflow#enable_when_referenced_parameter_equals}.

---

##### `Prerequisites`<sup>Optional</sup> <a name="Prerequisites" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.prerequisites"></a>

```go
Prerequisites *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#prerequisites MediaServicesMediaWorkflow#prerequisites}.

---

### MediaServicesMediaWorkflowTimeouts <a name="MediaServicesMediaWorkflowTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaworkflow"

&mediaservicesmediaworkflow.MediaServicesMediaWorkflowTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#create MediaServicesMediaWorkflow#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#delete MediaServicesMediaWorkflow#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#update MediaServicesMediaWorkflow#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#create MediaServicesMediaWorkflow#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#delete MediaServicesMediaWorkflow#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#update MediaServicesMediaWorkflow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaServicesMediaWorkflowLocksList <a name="MediaServicesMediaWorkflowLocksList" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaworkflow"

mediaservicesmediaworkflow.NewMediaServicesMediaWorkflowLocksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaServicesMediaWorkflowLocksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.get"></a>

```go
func Get(index *f64) MediaServicesMediaWorkflowLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaServicesMediaWorkflowLocksOutputReference <a name="MediaServicesMediaWorkflowLocksOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaworkflow"

mediaservicesmediaworkflow.NewMediaServicesMediaWorkflowLocksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaServicesMediaWorkflowLocksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetRelatedResourceId">ResetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetTimeCreated">ResetTimeCreated</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetMessage"></a>

```go
func ResetMessage()
```

##### `ResetRelatedResourceId` <a name="ResetRelatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetRelatedResourceId"></a>

```go
func ResetRelatedResourceId()
```

##### `ResetTimeCreated` <a name="ResetTimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetTimeCreated"></a>

```go
func ResetTimeCreated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.relatedResourceIdInput">RelatedResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.timeCreatedInput">TimeCreatedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `RelatedResourceIdInput`<sup>Optional</sup> <a name="RelatedResourceIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.relatedResourceIdInput"></a>

```go
func RelatedResourceIdInput() *string
```

- *Type:* *string

---

##### `TimeCreatedInput`<sup>Optional</sup> <a name="TimeCreatedInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.timeCreatedInput"></a>

```go
func TimeCreatedInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.relatedResourceId"></a>

```go
func RelatedResourceId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaServicesMediaWorkflowTasksList <a name="MediaServicesMediaWorkflowTasksList" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaworkflow"

mediaservicesmediaworkflow.NewMediaServicesMediaWorkflowTasksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaServicesMediaWorkflowTasksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.get"></a>

```go
func Get(index *f64) MediaServicesMediaWorkflowTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaServicesMediaWorkflowTasksOutputReference <a name="MediaServicesMediaWorkflowTasksOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaworkflow"

mediaservicesmediaworkflow.NewMediaServicesMediaWorkflowTasksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaServicesMediaWorkflowTasksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetEnableParameterReference">ResetEnableParameterReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetEnableWhenReferencedParameterEquals">ResetEnableWhenReferencedParameterEquals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetPrerequisites">ResetPrerequisites</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableParameterReference` <a name="ResetEnableParameterReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetEnableParameterReference"></a>

```go
func ResetEnableParameterReference()
```

##### `ResetEnableWhenReferencedParameterEquals` <a name="ResetEnableWhenReferencedParameterEquals" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetEnableWhenReferencedParameterEquals"></a>

```go
func ResetEnableWhenReferencedParameterEquals()
```

##### `ResetPrerequisites` <a name="ResetPrerequisites" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetPrerequisites"></a>

```go
func ResetPrerequisites()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableParameterReferenceInput">EnableParameterReferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableWhenReferencedParameterEqualsInput">EnableWhenReferencedParameterEqualsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.prerequisitesInput">PrerequisitesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableParameterReference">EnableParameterReference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableWhenReferencedParameterEquals">EnableWhenReferencedParameterEquals</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.prerequisites">Prerequisites</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableParameterReferenceInput`<sup>Optional</sup> <a name="EnableParameterReferenceInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableParameterReferenceInput"></a>

```go
func EnableParameterReferenceInput() *string
```

- *Type:* *string

---

##### `EnableWhenReferencedParameterEqualsInput`<sup>Optional</sup> <a name="EnableWhenReferencedParameterEqualsInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableWhenReferencedParameterEqualsInput"></a>

```go
func EnableWhenReferencedParameterEqualsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *string
```

- *Type:* *string

---

##### `PrerequisitesInput`<sup>Optional</sup> <a name="PrerequisitesInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.prerequisitesInput"></a>

```go
func PrerequisitesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `EnableParameterReference`<sup>Required</sup> <a name="EnableParameterReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableParameterReference"></a>

```go
func EnableParameterReference() *string
```

- *Type:* *string

---

##### `EnableWhenReferencedParameterEquals`<sup>Required</sup> <a name="EnableWhenReferencedParameterEquals" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableWhenReferencedParameterEquals"></a>

```go
func EnableWhenReferencedParameterEquals() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `Prerequisites`<sup>Required</sup> <a name="Prerequisites" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.prerequisites"></a>

```go
func Prerequisites() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaServicesMediaWorkflowTimeoutsOutputReference <a name="MediaServicesMediaWorkflowTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaworkflow"

mediaservicesmediaworkflow.NewMediaServicesMediaWorkflowTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaServicesMediaWorkflowTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



