# `resourceSchedulerSchedule` Submodule <a name="`resourceSchedulerSchedule` Submodule" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceSchedulerSchedule <a name="ResourceSchedulerSchedule" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule oci_resource_scheduler_schedule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourceschedulerschedule"

resourceschedulerschedule.NewResourceSchedulerSchedule(scope Construct, id *string, config ResourceSchedulerScheduleConfig) ResourceSchedulerSchedule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig">ResourceSchedulerScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig">ResourceSchedulerScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResourceFilters">PutResourceFilters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetResourceFilters">ResetResourceFilters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeEnds">ResetTimeEnds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeStarts">ResetTimeStarts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceFilters` <a name="PutResourceFilters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResourceFilters"></a>

```go
func PutResourceFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResourceFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResources` <a name="PutResources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResources"></a>

```go
func PutResources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResources.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putTimeouts"></a>

```go
func PutTimeouts(value ResourceSchedulerScheduleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceFilters` <a name="ResetResourceFilters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetResourceFilters"></a>

```go
func ResetResourceFilters()
```

##### `ResetResources` <a name="ResetResources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetResources"></a>

```go
func ResetResources()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetState"></a>

```go
func ResetState()
```

##### `ResetTimeEnds` <a name="ResetTimeEnds" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeEnds"></a>

```go
func ResetTimeEnds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeStarts` <a name="ResetTimeStarts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeStarts"></a>

```go
func ResetTimeStarts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ResourceSchedulerSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourceschedulerschedule"

resourceschedulerschedule.ResourceSchedulerSchedule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourceschedulerschedule"

resourceschedulerschedule.ResourceSchedulerSchedule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourceschedulerschedule"

resourceschedulerschedule.ResourceSchedulerSchedule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourceschedulerschedule"

resourceschedulerschedule.ResourceSchedulerSchedule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ResourceSchedulerSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ResourceSchedulerSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ResourceSchedulerSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ResourceSchedulerSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourceFilters">ResourceFilters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList">ResourceSchedulerScheduleResourceFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resources">Resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList">ResourceSchedulerScheduleResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeLastRun">TimeLastRun</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeNextRun">TimeNextRun</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference">ResourceSchedulerScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceDetailsInput">RecurrenceDetailsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceTypeInput">RecurrenceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourceFiltersInput">ResourceFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourcesInput">ResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeEndsInput">TimeEndsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeStartsInput">TimeStartsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceDetails">RecurrenceDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceType">RecurrenceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeEnds">TimeEnds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeStarts">TimeStarts</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResourceFilters`<sup>Required</sup> <a name="ResourceFilters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourceFilters"></a>

```go
func ResourceFilters() ResourceSchedulerScheduleResourceFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList">ResourceSchedulerScheduleResourceFiltersList</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resources"></a>

```go
func Resources() ResourceSchedulerScheduleResourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList">ResourceSchedulerScheduleResourcesList</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeLastRun`<sup>Required</sup> <a name="TimeLastRun" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeLastRun"></a>

```go
func TimeLastRun() *string
```

- *Type:* *string

---

##### `TimeNextRun`<sup>Required</sup> <a name="TimeNextRun" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeNextRun"></a>

```go
func TimeNextRun() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeouts"></a>

```go
func Timeouts() ResourceSchedulerScheduleTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference">ResourceSchedulerScheduleTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RecurrenceDetailsInput`<sup>Optional</sup> <a name="RecurrenceDetailsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceDetailsInput"></a>

```go
func RecurrenceDetailsInput() *string
```

- *Type:* *string

---

##### `RecurrenceTypeInput`<sup>Optional</sup> <a name="RecurrenceTypeInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceTypeInput"></a>

```go
func RecurrenceTypeInput() *string
```

- *Type:* *string

---

##### `ResourceFiltersInput`<sup>Optional</sup> <a name="ResourceFiltersInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourceFiltersInput"></a>

```go
func ResourceFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourcesInput"></a>

```go
func ResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TimeEndsInput`<sup>Optional</sup> <a name="TimeEndsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeEndsInput"></a>

```go
func TimeEndsInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeStartsInput`<sup>Optional</sup> <a name="TimeStartsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeStartsInput"></a>

```go
func TimeStartsInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RecurrenceDetails`<sup>Required</sup> <a name="RecurrenceDetails" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceDetails"></a>

```go
func RecurrenceDetails() *string
```

- *Type:* *string

---

##### `RecurrenceType`<sup>Required</sup> <a name="RecurrenceType" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceType"></a>

```go
func RecurrenceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeEnds`<sup>Required</sup> <a name="TimeEnds" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeEnds"></a>

```go
func TimeEnds() *string
```

- *Type:* *string

---

##### `TimeStarts`<sup>Required</sup> <a name="TimeStarts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeStarts"></a>

```go
func TimeStarts() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceSchedulerScheduleConfig <a name="ResourceSchedulerScheduleConfig" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourceschedulerschedule"

&resourceschedulerschedule.ResourceSchedulerScheduleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: *string,
	CompartmentId: *string,
	RecurrenceDetails: *string,
	RecurrenceType: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	ResourceFilters: interface{},
	Resources: interface{},
	State: *string,
	TimeEnds: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts,
	TimeStarts: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#action ResourceSchedulerSchedule#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#compartment_id ResourceSchedulerSchedule#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.recurrenceDetails">RecurrenceDetails</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_details ResourceSchedulerSchedule#recurrence_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.recurrenceType">RecurrenceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_type ResourceSchedulerSchedule#recurrence_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#defined_tags ResourceSchedulerSchedule#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#description ResourceSchedulerSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#display_name ResourceSchedulerSchedule#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#freeform_tags ResourceSchedulerSchedule#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.resourceFilters">ResourceFilters</a></code> | <code>interface{}</code> | resource_filters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.resources">Resources</a></code> | <code>interface{}</code> | resources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#state ResourceSchedulerSchedule#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeEnds">TimeEnds</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_ends ResourceSchedulerSchedule#time_ends}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeStarts">TimeStarts</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_starts ResourceSchedulerSchedule#time_starts}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#action ResourceSchedulerSchedule#action}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#compartment_id ResourceSchedulerSchedule#compartment_id}.

---

##### `RecurrenceDetails`<sup>Required</sup> <a name="RecurrenceDetails" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.recurrenceDetails"></a>

```go
RecurrenceDetails *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_details ResourceSchedulerSchedule#recurrence_details}.

---

##### `RecurrenceType`<sup>Required</sup> <a name="RecurrenceType" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.recurrenceType"></a>

```go
RecurrenceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_type ResourceSchedulerSchedule#recurrence_type}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#defined_tags ResourceSchedulerSchedule#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#description ResourceSchedulerSchedule#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#display_name ResourceSchedulerSchedule#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#freeform_tags ResourceSchedulerSchedule#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceFilters`<sup>Optional</sup> <a name="ResourceFilters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.resourceFilters"></a>

```go
ResourceFilters interface{}
```

- *Type:* interface{}

resource_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#resource_filters ResourceSchedulerSchedule#resource_filters}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.resources"></a>

```go
Resources interface{}
```

- *Type:* interface{}

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#resources ResourceSchedulerSchedule#resources}

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#state ResourceSchedulerSchedule#state}.

---

##### `TimeEnds`<sup>Optional</sup> <a name="TimeEnds" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeEnds"></a>

```go
TimeEnds *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_ends ResourceSchedulerSchedule#time_ends}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeouts"></a>

```go
Timeouts ResourceSchedulerScheduleTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#timeouts ResourceSchedulerSchedule#timeouts}

---

##### `TimeStarts`<sup>Optional</sup> <a name="TimeStarts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeStarts"></a>

```go
TimeStarts *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_starts ResourceSchedulerSchedule#time_starts}.

---

### ResourceSchedulerScheduleResourceFilters <a name="ResourceSchedulerScheduleResourceFilters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourceschedulerschedule"

&resourceschedulerschedule.ResourceSchedulerScheduleResourceFilters {
	Attribute: *string,
	Condition: *string,
	ShouldIncludeChildCompartments: interface{},
	Value: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.attribute">Attribute</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#attribute ResourceSchedulerSchedule#attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.condition">Condition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#condition ResourceSchedulerSchedule#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.shouldIncludeChildCompartments">ShouldIncludeChildCompartments</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#should_include_child_compartments ResourceSchedulerSchedule#should_include_child_compartments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.value">Value</a></code> | <code>interface{}</code> | value block. |

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.attribute"></a>

```go
Attribute *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#attribute ResourceSchedulerSchedule#attribute}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#condition ResourceSchedulerSchedule#condition}.

---

##### `ShouldIncludeChildCompartments`<sup>Optional</sup> <a name="ShouldIncludeChildCompartments" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.shouldIncludeChildCompartments"></a>

```go
ShouldIncludeChildCompartments interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#should_include_child_compartments ResourceSchedulerSchedule#should_include_child_compartments}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.value"></a>

```go
Value interface{}
```

- *Type:* interface{}

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#value ResourceSchedulerSchedule#value}

---

### ResourceSchedulerScheduleResourceFiltersValue <a name="ResourceSchedulerScheduleResourceFiltersValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourceschedulerschedule"

&resourceschedulerschedule.ResourceSchedulerScheduleResourceFiltersValue {
	Namespace: *string,
	TagKey: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#namespace ResourceSchedulerSchedule#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.tagKey">TagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#tag_key ResourceSchedulerSchedule#tag_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#value ResourceSchedulerSchedule#value}. |

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#namespace ResourceSchedulerSchedule#namespace}.

---

##### `TagKey`<sup>Optional</sup> <a name="TagKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#tag_key ResourceSchedulerSchedule#tag_key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#value ResourceSchedulerSchedule#value}.

---

### ResourceSchedulerScheduleResources <a name="ResourceSchedulerScheduleResources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourceschedulerschedule"

&resourceschedulerschedule.ResourceSchedulerScheduleResources {
	Id: *string,
	Metadata: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#metadata ResourceSchedulerSchedule#metadata}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#metadata ResourceSchedulerSchedule#metadata}.

---

### ResourceSchedulerScheduleTimeouts <a name="ResourceSchedulerScheduleTimeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourceschedulerschedule"

&resourceschedulerschedule.ResourceSchedulerScheduleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#create ResourceSchedulerSchedule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#delete ResourceSchedulerSchedule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#update ResourceSchedulerSchedule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#create ResourceSchedulerSchedule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#delete ResourceSchedulerSchedule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#update ResourceSchedulerSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceSchedulerScheduleResourceFiltersList <a name="ResourceSchedulerScheduleResourceFiltersList" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourceschedulerschedule"

resourceschedulerschedule.NewResourceSchedulerScheduleResourceFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ResourceSchedulerScheduleResourceFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.get"></a>

```go
func Get(index *f64) ResourceSchedulerScheduleResourceFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourceSchedulerScheduleResourceFiltersOutputReference <a name="ResourceSchedulerScheduleResourceFiltersOutputReference" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourceschedulerschedule"

resourceschedulerschedule.NewResourceSchedulerScheduleResourceFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ResourceSchedulerScheduleResourceFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetShouldIncludeChildCompartments">ResetShouldIncludeChildCompartments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.putValue"></a>

```go
func PutValue(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.putValue.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCondition` <a name="ResetCondition" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetShouldIncludeChildCompartments` <a name="ResetShouldIncludeChildCompartments" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetShouldIncludeChildCompartments"></a>

```go
func ResetShouldIncludeChildCompartments()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.value">Value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList">ResourceSchedulerScheduleResourceFiltersValueList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.attributeInput">AttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.shouldIncludeChildCompartmentsInput">ShouldIncludeChildCompartmentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.attribute">Attribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.shouldIncludeChildCompartments">ShouldIncludeChildCompartments</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.value"></a>

```go
func Value() ResourceSchedulerScheduleResourceFiltersValueList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList">ResourceSchedulerScheduleResourceFiltersValueList</a>

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.attributeInput"></a>

```go
func AttributeInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `ShouldIncludeChildCompartmentsInput`<sup>Optional</sup> <a name="ShouldIncludeChildCompartmentsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.shouldIncludeChildCompartmentsInput"></a>

```go
func ShouldIncludeChildCompartmentsInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.attribute"></a>

```go
func Attribute() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `ShouldIncludeChildCompartments`<sup>Required</sup> <a name="ShouldIncludeChildCompartments" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.shouldIncludeChildCompartments"></a>

```go
func ShouldIncludeChildCompartments() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourceSchedulerScheduleResourceFiltersValueList <a name="ResourceSchedulerScheduleResourceFiltersValueList" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourceschedulerschedule"

resourceschedulerschedule.NewResourceSchedulerScheduleResourceFiltersValueList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ResourceSchedulerScheduleResourceFiltersValueList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.get"></a>

```go
func Get(index *f64) ResourceSchedulerScheduleResourceFiltersValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourceSchedulerScheduleResourceFiltersValueOutputReference <a name="ResourceSchedulerScheduleResourceFiltersValueOutputReference" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourceschedulerschedule"

resourceschedulerschedule.NewResourceSchedulerScheduleResourceFiltersValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ResourceSchedulerScheduleResourceFiltersValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetTagKey">ResetTagKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetTagKey` <a name="ResetTagKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetTagKey"></a>

```go
func ResetTagKey()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourceSchedulerScheduleResourcesList <a name="ResourceSchedulerScheduleResourcesList" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourceschedulerschedule"

resourceschedulerschedule.NewResourceSchedulerScheduleResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ResourceSchedulerScheduleResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.get"></a>

```go
func Get(index *f64) ResourceSchedulerScheduleResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourceSchedulerScheduleResourcesOutputReference <a name="ResourceSchedulerScheduleResourcesOutputReference" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourceschedulerschedule"

resourceschedulerschedule.NewResourceSchedulerScheduleResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ResourceSchedulerScheduleResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetadata` <a name="ResetMetadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resetMetadata"></a>

```go
func ResetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourceSchedulerScheduleTimeoutsOutputReference <a name="ResourceSchedulerScheduleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/resourceschedulerschedule"

resourceschedulerschedule.NewResourceSchedulerScheduleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourceSchedulerScheduleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



