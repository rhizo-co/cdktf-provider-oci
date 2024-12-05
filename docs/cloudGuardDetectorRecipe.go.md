# `cloudGuardDetectorRecipe` Submodule <a name="`cloudGuardDetectorRecipe` Submodule" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudGuardDetectorRecipe <a name="CloudGuardDetectorRecipe" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe oci_cloud_guard_detector_recipe}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipe(scope Construct, id *string, config CloudGuardDetectorRecipeConfig) CloudGuardDetectorRecipe
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig">CloudGuardDetectorRecipeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig">CloudGuardDetectorRecipeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.putDetectorRules">PutDetectorRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetDetector">ResetDetector</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetDetectorRules">ResetDetectorRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetSourceDetectorRecipeId">ResetSourceDetectorRecipeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDetectorRules` <a name="PutDetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.putDetectorRules"></a>

```go
func PutDetectorRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.putDetectorRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.putTimeouts"></a>

```go
func PutTimeouts(value CloudGuardDetectorRecipeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts">CloudGuardDetectorRecipeTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDetector` <a name="ResetDetector" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetDetector"></a>

```go
func ResetDetector()
```

##### `ResetDetectorRules` <a name="ResetDetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetDetectorRules"></a>

```go
func ResetDetectorRules()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetId"></a>

```go
func ResetId()
```

##### `ResetSourceDetectorRecipeId` <a name="ResetSourceDetectorRecipeId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetSourceDetectorRecipeId"></a>

```go
func ResetSourceDetectorRecipeId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudGuardDetectorRecipe resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.CloudGuardDetectorRecipe_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.CloudGuardDetectorRecipe_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.CloudGuardDetectorRecipe_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.CloudGuardDetectorRecipe_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudGuardDetectorRecipe resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudGuardDetectorRecipe to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudGuardDetectorRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudGuardDetectorRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.detectorRecipeType">DetectorRecipeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.detectorRules">DetectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList">CloudGuardDetectorRecipeDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.effectiveDetectorRules">EffectiveDetectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList">CloudGuardDetectorRecipeEffectiveDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.targetIds">TargetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference">CloudGuardDetectorRecipeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.detectorInput">DetectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.detectorRulesInput">DetectorRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.sourceDetectorRecipeIdInput">SourceDetectorRecipeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.detector">Detector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.sourceDetectorRecipeId">SourceDetectorRecipeId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DetectorRecipeType`<sup>Required</sup> <a name="DetectorRecipeType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.detectorRecipeType"></a>

```go
func DetectorRecipeType() *string
```

- *Type:* *string

---

##### `DetectorRules`<sup>Required</sup> <a name="DetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.detectorRules"></a>

```go
func DetectorRules() CloudGuardDetectorRecipeDetectorRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList">CloudGuardDetectorRecipeDetectorRulesList</a>

---

##### `EffectiveDetectorRules`<sup>Required</sup> <a name="EffectiveDetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.effectiveDetectorRules"></a>

```go
func EffectiveDetectorRules() CloudGuardDetectorRecipeEffectiveDetectorRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList">CloudGuardDetectorRecipeEffectiveDetectorRulesList</a>

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TargetIds`<sup>Required</sup> <a name="TargetIds" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.targetIds"></a>

```go
func TargetIds() *[]*string
```

- *Type:* *[]*string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.timeouts"></a>

```go
func Timeouts() CloudGuardDetectorRecipeTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference">CloudGuardDetectorRecipeTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DetectorInput`<sup>Optional</sup> <a name="DetectorInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.detectorInput"></a>

```go
func DetectorInput() *string
```

- *Type:* *string

---

##### `DetectorRulesInput`<sup>Optional</sup> <a name="DetectorRulesInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.detectorRulesInput"></a>

```go
func DetectorRulesInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SourceDetectorRecipeIdInput`<sup>Optional</sup> <a name="SourceDetectorRecipeIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.sourceDetectorRecipeIdInput"></a>

```go
func SourceDetectorRecipeIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Detector`<sup>Required</sup> <a name="Detector" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.detector"></a>

```go
func Detector() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SourceDetectorRecipeId`<sup>Required</sup> <a name="SourceDetectorRecipeId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.sourceDetectorRecipeId"></a>

```go
func SourceDetectorRecipeId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudGuardDetectorRecipeConfig <a name="CloudGuardDetectorRecipeConfig" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

&cloudguarddetectorrecipe.CloudGuardDetectorRecipeConfig {
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
	Description: *string,
	Detector: *string,
	DetectorRules: interface{},
	FreeformTags: *map[string]*string,
	Id: *string,
	SourceDetectorRecipeId: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#compartment_id CloudGuardDetectorRecipe#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#display_name CloudGuardDetectorRecipe#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#defined_tags CloudGuardDetectorRecipe#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#description CloudGuardDetectorRecipe#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.detector">Detector</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#detector CloudGuardDetectorRecipe#detector}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.detectorRules">DetectorRules</a></code> | <code>interface{}</code> | detector_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#freeform_tags CloudGuardDetectorRecipe#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#id CloudGuardDetectorRecipe#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.sourceDetectorRecipeId">SourceDetectorRecipeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#source_detector_recipe_id CloudGuardDetectorRecipe#source_detector_recipe_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts">CloudGuardDetectorRecipeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#compartment_id CloudGuardDetectorRecipe#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#display_name CloudGuardDetectorRecipe#display_name}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#defined_tags CloudGuardDetectorRecipe#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#description CloudGuardDetectorRecipe#description}.

---

##### `Detector`<sup>Optional</sup> <a name="Detector" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.detector"></a>

```go
Detector *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#detector CloudGuardDetectorRecipe#detector}.

---

##### `DetectorRules`<sup>Optional</sup> <a name="DetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.detectorRules"></a>

```go
DetectorRules interface{}
```

- *Type:* interface{}

detector_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#detector_rules CloudGuardDetectorRecipe#detector_rules}

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#freeform_tags CloudGuardDetectorRecipe#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#id CloudGuardDetectorRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SourceDetectorRecipeId`<sup>Optional</sup> <a name="SourceDetectorRecipeId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.sourceDetectorRecipeId"></a>

```go
SourceDetectorRecipeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#source_detector_recipe_id CloudGuardDetectorRecipe#source_detector_recipe_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.timeouts"></a>

```go
Timeouts CloudGuardDetectorRecipeTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts">CloudGuardDetectorRecipeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#timeouts CloudGuardDetectorRecipe#timeouts}

---

### CloudGuardDetectorRecipeDetectorRules <a name="CloudGuardDetectorRecipeDetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

&cloudguarddetectorrecipe.CloudGuardDetectorRecipeDetectorRules {
	Details: github.com/rhizo-co/cdktf-provider-oci-go/oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails,
	DetectorRuleId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRules.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails">CloudGuardDetectorRecipeDetectorRulesDetails</a></code> | details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRules.property.detectorRuleId">DetectorRuleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#detector_rule_id CloudGuardDetectorRecipe#detector_rule_id}. |

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRules.property.details"></a>

```go
Details CloudGuardDetectorRecipeDetectorRulesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails">CloudGuardDetectorRecipeDetectorRulesDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#details CloudGuardDetectorRecipe#details}

---

##### `DetectorRuleId`<sup>Required</sup> <a name="DetectorRuleId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRules.property.detectorRuleId"></a>

```go
DetectorRuleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#detector_rule_id CloudGuardDetectorRecipe#detector_rule_id}.

---

### CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules <a name="CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

&cloudguarddetectorrecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules {

}
```


### CloudGuardDetectorRecipeDetectorRulesDetails <a name="CloudGuardDetectorRecipeDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

&cloudguarddetectorrecipe.CloudGuardDetectorRecipeDetectorRulesDetails {
	IsEnabled: interface{},
	RiskLevel: *string,
	Condition: *string,
	Configurations: interface{},
	DataSourceId: *string,
	Description: *string,
	EntitiesMappings: interface{},
	Labels: *[]*string,
	Recommendation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#is_enabled CloudGuardDetectorRecipe#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.riskLevel">RiskLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#risk_level CloudGuardDetectorRecipe#risk_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.condition">Condition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#condition CloudGuardDetectorRecipe#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.configurations">Configurations</a></code> | <code>interface{}</code> | configurations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#data_source_id CloudGuardDetectorRecipe#data_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#description CloudGuardDetectorRecipe#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.entitiesMappings">EntitiesMappings</a></code> | <code>interface{}</code> | entities_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.labels">Labels</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#labels CloudGuardDetectorRecipe#labels}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.recommendation">Recommendation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#recommendation CloudGuardDetectorRecipe#recommendation}. |

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#is_enabled CloudGuardDetectorRecipe#is_enabled}.

---

##### `RiskLevel`<sup>Required</sup> <a name="RiskLevel" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.riskLevel"></a>

```go
RiskLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#risk_level CloudGuardDetectorRecipe#risk_level}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#condition CloudGuardDetectorRecipe#condition}.

---

##### `Configurations`<sup>Optional</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.configurations"></a>

```go
Configurations interface{}
```

- *Type:* interface{}

configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#configurations CloudGuardDetectorRecipe#configurations}

---

##### `DataSourceId`<sup>Optional</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.dataSourceId"></a>

```go
DataSourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#data_source_id CloudGuardDetectorRecipe#data_source_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#description CloudGuardDetectorRecipe#description}.

---

##### `EntitiesMappings`<sup>Optional</sup> <a name="EntitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.entitiesMappings"></a>

```go
EntitiesMappings interface{}
```

- *Type:* interface{}

entities_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#entities_mappings CloudGuardDetectorRecipe#entities_mappings}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.labels"></a>

```go
Labels *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#labels CloudGuardDetectorRecipe#labels}.

---

##### `Recommendation`<sup>Optional</sup> <a name="Recommendation" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.recommendation"></a>

```go
Recommendation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#recommendation CloudGuardDetectorRecipe#recommendation}.

---

### CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations <a name="CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

&cloudguarddetectorrecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations {
	ConfigKey: *string,
	Name: *string,
	DataType: *string,
	Value: *string,
	Values: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.property.configKey">ConfigKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#config_key CloudGuardDetectorRecipe#config_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#name CloudGuardDetectorRecipe#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.property.dataType">DataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#data_type CloudGuardDetectorRecipe#data_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#value CloudGuardDetectorRecipe#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.property.values">Values</a></code> | <code>interface{}</code> | values block. |

---

##### `ConfigKey`<sup>Required</sup> <a name="ConfigKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.property.configKey"></a>

```go
ConfigKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#config_key CloudGuardDetectorRecipe#config_key}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#name CloudGuardDetectorRecipe#name}.

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#data_type CloudGuardDetectorRecipe#data_type}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#value CloudGuardDetectorRecipe#value}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.property.values"></a>

```go
Values interface{}
```

- *Type:* interface{}

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#values CloudGuardDetectorRecipe#values}

---

### CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues <a name="CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

&cloudguarddetectorrecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues {
	ListType: *string,
	ManagedListType: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues.property.listType">ListType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#list_type CloudGuardDetectorRecipe#list_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues.property.managedListType">ManagedListType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#managed_list_type CloudGuardDetectorRecipe#managed_list_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#value CloudGuardDetectorRecipe#value}. |

---

##### `ListType`<sup>Required</sup> <a name="ListType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues.property.listType"></a>

```go
ListType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#list_type CloudGuardDetectorRecipe#list_type}.

---

##### `ManagedListType`<sup>Required</sup> <a name="ManagedListType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues.property.managedListType"></a>

```go
ManagedListType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#managed_list_type CloudGuardDetectorRecipe#managed_list_type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#value CloudGuardDetectorRecipe#value}.

---

### CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings <a name="CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

&cloudguarddetectorrecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings {
	QueryField: *string,
	DisplayName: *string,
	EntityType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings.property.queryField">QueryField</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#query_field CloudGuardDetectorRecipe#query_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#display_name CloudGuardDetectorRecipe#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings.property.entityType">EntityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#entity_type CloudGuardDetectorRecipe#entity_type}. |

---

##### `QueryField`<sup>Required</sup> <a name="QueryField" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings.property.queryField"></a>

```go
QueryField *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#query_field CloudGuardDetectorRecipe#query_field}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#display_name CloudGuardDetectorRecipe#display_name}.

---

##### `EntityType`<sup>Optional</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings.property.entityType"></a>

```go
EntityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#entity_type CloudGuardDetectorRecipe#entity_type}.

---

### CloudGuardDetectorRecipeDetectorRulesEntitiesMappings <a name="CloudGuardDetectorRecipeDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

&cloudguarddetectorrecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappings {

}
```


### CloudGuardDetectorRecipeEffectiveDetectorRules <a name="CloudGuardDetectorRecipeEffectiveDetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

&cloudguarddetectorrecipe.CloudGuardDetectorRecipeEffectiveDetectorRules {

}
```


### CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

&cloudguarddetectorrecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules {

}
```


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetails <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

&cloudguarddetectorrecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetails {

}
```


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

&cloudguarddetectorrecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations {

}
```


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

&cloudguarddetectorrecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues {

}
```


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

&cloudguarddetectorrecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings {

}
```


### CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

&cloudguarddetectorrecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings {

}
```


### CloudGuardDetectorRecipeTimeouts <a name="CloudGuardDetectorRecipeTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

&cloudguarddetectorrecipe.CloudGuardDetectorRecipeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#create CloudGuardDetectorRecipe#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#delete CloudGuardDetectorRecipe#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#update CloudGuardDetectorRecipe#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#create CloudGuardDetectorRecipe#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#delete CloudGuardDetectorRecipe#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#update CloudGuardDetectorRecipe#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList <a name="CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.get"></a>

```go
func Get(index *f64) CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference <a name="CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred">IsPreferred</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules">CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsPreferred`<sup>Required</sup> <a name="IsPreferred" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred"></a>

```go
func IsPreferred() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules">CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules</a>

---


### CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList <a name="CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.get"></a>

```go
func Get(index *f64) CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference <a name="CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.putValues">PutValues</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValues` <a name="PutValues" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.putValues"></a>

```go
func PutValues(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.putValues.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDataType` <a name="ResetDataType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resetDataType"></a>

```go
func ResetDataType()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetValues` <a name="ResetValues" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.values">Values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.configKeyInput">ConfigKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.configKey">ConfigKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```go
func Values() CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `ConfigKeyInput`<sup>Optional</sup> <a name="ConfigKeyInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.configKeyInput"></a>

```go
func ConfigKeyInput() *string
```

- *Type:* *string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigKey`<sup>Required</sup> <a name="ConfigKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```go
func ConfigKey() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList <a name="CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.get"></a>

```go
func Get(index *f64) CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference <a name="CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.listTypeInput">ListTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListTypeInput">ManagedListTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">ListType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">ManagedListType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ListTypeInput`<sup>Optional</sup> <a name="ListTypeInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.listTypeInput"></a>

```go
func ListTypeInput() *string
```

- *Type:* *string

---

##### `ManagedListTypeInput`<sup>Optional</sup> <a name="ManagedListTypeInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListTypeInput"></a>

```go
func ManagedListTypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ListType`<sup>Required</sup> <a name="ListType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```go
func ListType() *string
```

- *Type:* *string

---

##### `ManagedListType`<sup>Required</sup> <a name="ManagedListType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```go
func ManagedListType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList <a name="CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.get"></a>

```go
func Get(index *f64) CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference <a name="CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.resetEntityType">ResetEntityType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEntityType` <a name="ResetEntityType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.resetEntityType"></a>

```go
func ResetEntityType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityTypeInput">EntityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryFieldInput">QueryFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField">QueryField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityTypeInput"></a>

```go
func EntityTypeInput() *string
```

- *Type:* *string

---

##### `QueryFieldInput`<sup>Optional</sup> <a name="QueryFieldInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryFieldInput"></a>

```go
func QueryFieldInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `QueryField`<sup>Required</sup> <a name="QueryField" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField"></a>

```go
func QueryField() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference <a name="CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.putConfigurations">PutConfigurations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.putEntitiesMappings">PutEntitiesMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetConfigurations">ResetConfigurations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetDataSourceId">ResetDataSourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetEntitiesMappings">ResetEntitiesMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetRecommendation">ResetRecommendation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfigurations` <a name="PutConfigurations" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.putConfigurations"></a>

```go
func PutConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.putConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEntitiesMappings` <a name="PutEntitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.putEntitiesMappings"></a>

```go
func PutEntitiesMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.putEntitiesMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCondition` <a name="ResetCondition" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetConfigurations` <a name="ResetConfigurations" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetConfigurations"></a>

```go
func ResetConfigurations()
```

##### `ResetDataSourceId` <a name="ResetDataSourceId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetDataSourceId"></a>

```go
func ResetDataSourceId()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEntitiesMappings` <a name="ResetEntitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetEntitiesMappings"></a>

```go
func ResetEntitiesMappings()
```

##### `ResetLabels` <a name="ResetLabels" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetRecommendation` <a name="ResetRecommendation" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetRecommendation"></a>

```go
func ResetRecommendation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.configurations">Configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.entitiesMappings">EntitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList">CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">IsConfigurationAllowed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.configurationsInput">ConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.dataSourceIdInput">DataSourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.entitiesMappingsInput">EntitiesMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.recommendationInput">RecommendationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.riskLevelInput">RiskLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.recommendation">Recommendation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.riskLevel">RiskLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails">CloudGuardDetectorRecipeDetectorRulesDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.configurations"></a>

```go
func Configurations() CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList</a>

---

##### `EntitiesMappings`<sup>Required</sup> <a name="EntitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.entitiesMappings"></a>

```go
func EntitiesMappings() CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList">CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList</a>

---

##### `IsConfigurationAllowed`<sup>Required</sup> <a name="IsConfigurationAllowed" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```go
func IsConfigurationAllowed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `ConfigurationsInput`<sup>Optional</sup> <a name="ConfigurationsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.configurationsInput"></a>

```go
func ConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `DataSourceIdInput`<sup>Optional</sup> <a name="DataSourceIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.dataSourceIdInput"></a>

```go
func DataSourceIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EntitiesMappingsInput`<sup>Optional</sup> <a name="EntitiesMappingsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.entitiesMappingsInput"></a>

```go
func EntitiesMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RecommendationInput`<sup>Optional</sup> <a name="RecommendationInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.recommendationInput"></a>

```go
func RecommendationInput() *string
```

- *Type:* *string

---

##### `RiskLevelInput`<sup>Optional</sup> <a name="RiskLevelInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.riskLevelInput"></a>

```go
func RiskLevelInput() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.recommendation"></a>

```go
func Recommendation() *string
```

- *Type:* *string

---

##### `RiskLevel`<sup>Required</sup> <a name="RiskLevel" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```go
func RiskLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGuardDetectorRecipeDetectorRulesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails">CloudGuardDetectorRecipeDetectorRulesDetails</a>

---


### CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList <a name="CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.get"></a>

```go
func Get(index *f64) CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference <a name="CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.queryField">QueryField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappings">CloudGuardDetectorRecipeDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `QueryField`<sup>Required</sup> <a name="QueryField" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```go
func QueryField() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGuardDetectorRecipeDetectorRulesEntitiesMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappings">CloudGuardDetectorRecipeDetectorRulesEntitiesMappings</a>

---


### CloudGuardDetectorRecipeDetectorRulesList <a name="CloudGuardDetectorRecipeDetectorRulesList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeDetectorRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudGuardDetectorRecipeDetectorRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.get"></a>

```go
func Get(index *f64) CloudGuardDetectorRecipeDetectorRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudGuardDetectorRecipeDetectorRulesOutputReference <a name="CloudGuardDetectorRecipeDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeDetectorRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudGuardDetectorRecipeDetectorRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.putDetails">PutDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDetails` <a name="PutDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.putDetails"></a>

```go
func PutDetails(value CloudGuardDetectorRecipeDetectorRulesDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.putDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails">CloudGuardDetectorRecipeDetectorRulesDetails</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.candidateResponderRules">CandidateResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList">CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference">CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.detector">Detector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.entitiesMappings">EntitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList">CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.managedListTypes">ManagedListTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.recommendation">Recommendation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.serviceType">ServiceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.detailsInput">DetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails">CloudGuardDetectorRecipeDetectorRulesDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.detectorRuleIdInput">DetectorRuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.detectorRuleId">DetectorRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CandidateResponderRules`<sup>Required</sup> <a name="CandidateResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.candidateResponderRules"></a>

```go
func CandidateResponderRules() CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList">CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList</a>

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.details"></a>

```go
func Details() CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference">CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference</a>

---

##### `Detector`<sup>Required</sup> <a name="Detector" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.detector"></a>

```go
func Detector() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntitiesMappings`<sup>Required</sup> <a name="EntitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.entitiesMappings"></a>

```go
func EntitiesMappings() CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList">CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ManagedListTypes`<sup>Required</sup> <a name="ManagedListTypes" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.managedListTypes"></a>

```go
func ManagedListTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.recommendation"></a>

```go
func Recommendation() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.serviceType"></a>

```go
func ServiceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.detailsInput"></a>

```go
func DetailsInput() CloudGuardDetectorRecipeDetectorRulesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails">CloudGuardDetectorRecipeDetectorRulesDetails</a>

---

##### `DetectorRuleIdInput`<sup>Optional</sup> <a name="DetectorRuleIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.detectorRuleIdInput"></a>

```go
func DetectorRuleIdInput() *string
```

- *Type:* *string

---

##### `DetectorRuleId`<sup>Required</sup> <a name="DetectorRuleId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.detectorRuleId"></a>

```go
func DetectorRuleId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.get"></a>

```go
func Get(index *f64) CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred">IsPreferred</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules">CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsPreferred`<sup>Required</sup> <a name="IsPreferred" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred"></a>

```go
func IsPreferred() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules">CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules</a>

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.get"></a>

```go
func Get(index *f64) CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey">ConfigKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values">Values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigKey`<sup>Required</sup> <a name="ConfigKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```go
func ConfigKey() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```go
func Values() CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations</a>

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.get"></a>

```go
func Get(index *f64) CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">ListType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">ManagedListType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ListType`<sup>Required</sup> <a name="ListType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```go
func ListType() *string
```

- *Type:* *string

---

##### `ManagedListType`<sup>Required</sup> <a name="ManagedListType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```go
func ManagedListType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues</a>

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.get"></a>

```go
func Get(index *f64) CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField">QueryField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `QueryField`<sup>Required</sup> <a name="QueryField" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField"></a>

```go
func QueryField() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings</a>

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.get"></a>

```go
func Get(index *f64) CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.configurations">Configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.entitiesMappings">EntitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">IsConfigurationAllowed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.recommendation">Recommendation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.riskLevel">RiskLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetails">CloudGuardDetectorRecipeEffectiveDetectorRulesDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.configurations"></a>

```go
func Configurations() CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList</a>

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EntitiesMappings`<sup>Required</sup> <a name="EntitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.entitiesMappings"></a>

```go
func EntitiesMappings() CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList</a>

---

##### `IsConfigurationAllowed`<sup>Required</sup> <a name="IsConfigurationAllowed" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```go
func IsConfigurationAllowed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.recommendation"></a>

```go
func Recommendation() *string
```

- *Type:* *string

---

##### `RiskLevel`<sup>Required</sup> <a name="RiskLevel" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```go
func RiskLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGuardDetectorRecipeEffectiveDetectorRulesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetails">CloudGuardDetectorRecipeEffectiveDetectorRulesDetails</a>

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.get"></a>

```go
func Get(index *f64) CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField">QueryField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings">CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `QueryField`<sup>Required</sup> <a name="QueryField" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```go
func QueryField() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings">CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings</a>

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesList <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeEffectiveDetectorRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudGuardDetectorRecipeEffectiveDetectorRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.get"></a>

```go
func Get(index *f64) CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.candidateResponderRules">CandidateResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList">CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.detector">Detector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.detectorRuleId">DetectorRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.entitiesMappings">EntitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList">CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.managedListTypes">ManagedListTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.recommendation">Recommendation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.serviceType">ServiceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRules">CloudGuardDetectorRecipeEffectiveDetectorRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CandidateResponderRules`<sup>Required</sup> <a name="CandidateResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.candidateResponderRules"></a>

```go
func CandidateResponderRules() CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList">CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList</a>

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.details"></a>

```go
func Details() CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList</a>

---

##### `Detector`<sup>Required</sup> <a name="Detector" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.detector"></a>

```go
func Detector() *string
```

- *Type:* *string

---

##### `DetectorRuleId`<sup>Required</sup> <a name="DetectorRuleId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.detectorRuleId"></a>

```go
func DetectorRuleId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntitiesMappings`<sup>Required</sup> <a name="EntitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.entitiesMappings"></a>

```go
func EntitiesMappings() CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList">CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ManagedListTypes`<sup>Required</sup> <a name="ManagedListTypes" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.managedListTypes"></a>

```go
func ManagedListTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.recommendation"></a>

```go
func Recommendation() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.serviceType"></a>

```go
func ServiceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGuardDetectorRecipeEffectiveDetectorRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRules">CloudGuardDetectorRecipeEffectiveDetectorRules</a>

---


### CloudGuardDetectorRecipeTimeoutsOutputReference <a name="CloudGuardDetectorRecipeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddetectorrecipe"

cloudguarddetectorrecipe.NewCloudGuardDetectorRecipeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGuardDetectorRecipeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



