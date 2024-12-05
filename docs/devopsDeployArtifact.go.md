# `devopsDeployArtifact` Submodule <a name="`devopsDeployArtifact` Submodule" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsDeployArtifact <a name="DevopsDeployArtifact" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact oci_devops_deploy_artifact}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployartifact"

devopsdeployartifact.NewDevopsDeployArtifact(scope Construct, id *string, config DevopsDeployArtifactConfig) DevopsDeployArtifact
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig">DevopsDeployArtifactConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig">DevopsDeployArtifactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putDeployArtifactSource">PutDeployArtifactSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeployArtifactSource` <a name="PutDeployArtifactSource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putDeployArtifactSource"></a>

```go
func PutDeployArtifactSource(value DevopsDeployArtifactDeployArtifactSource)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putDeployArtifactSource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putTimeouts"></a>

```go
func PutTimeouts(value DevopsDeployArtifactTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts">DevopsDeployArtifactTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsDeployArtifact resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployartifact"

devopsdeployartifact.DevopsDeployArtifact_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployartifact"

devopsdeployartifact.DevopsDeployArtifact_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployartifact"

devopsdeployartifact.DevopsDeployArtifact_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployartifact"

devopsdeployartifact.DevopsDeployArtifact_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DevopsDeployArtifact resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DevopsDeployArtifact to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DevopsDeployArtifact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DevopsDeployArtifact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactSource">DeployArtifactSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference">DevopsDeployArtifactDeployArtifactSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference">DevopsDeployArtifactTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.argumentSubstitutionModeInput">ArgumentSubstitutionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactSourceInput">DeployArtifactSourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactTypeInput">DeployArtifactTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.argumentSubstitutionMode">ArgumentSubstitutionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactType">DeployArtifactType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DeployArtifactSource`<sup>Required</sup> <a name="DeployArtifactSource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactSource"></a>

```go
func DeployArtifactSource() DevopsDeployArtifactDeployArtifactSourceOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference">DevopsDeployArtifactDeployArtifactSourceOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeouts"></a>

```go
func Timeouts() DevopsDeployArtifactTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference">DevopsDeployArtifactTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `ArgumentSubstitutionModeInput`<sup>Optional</sup> <a name="ArgumentSubstitutionModeInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.argumentSubstitutionModeInput"></a>

```go
func ArgumentSubstitutionModeInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeployArtifactSourceInput`<sup>Optional</sup> <a name="DeployArtifactSourceInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactSourceInput"></a>

```go
func DeployArtifactSourceInput() DevopsDeployArtifactDeployArtifactSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a>

---

##### `DeployArtifactTypeInput`<sup>Optional</sup> <a name="DeployArtifactTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactTypeInput"></a>

```go
func DeployArtifactTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ArgumentSubstitutionMode`<sup>Required</sup> <a name="ArgumentSubstitutionMode" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.argumentSubstitutionMode"></a>

```go
func ArgumentSubstitutionMode() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeployArtifactType`<sup>Required</sup> <a name="DeployArtifactType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.deployArtifactType"></a>

```go
func DeployArtifactType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifact.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsDeployArtifactConfig <a name="DevopsDeployArtifactConfig" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployartifact"

&devopsdeployartifact.DevopsDeployArtifactConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ArgumentSubstitutionMode: *string,
	DeployArtifactSource: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource,
	DeployArtifactType: *string,
	ProjectId: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.argumentSubstitutionMode">ArgumentSubstitutionMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#argument_substitution_mode DevopsDeployArtifact#argument_substitution_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.deployArtifactSource">DeployArtifactSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a></code> | deploy_artifact_source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.deployArtifactType">DeployArtifactType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_type DevopsDeployArtifact#deploy_artifact_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#project_id DevopsDeployArtifact#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#defined_tags DevopsDeployArtifact#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#description DevopsDeployArtifact#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#display_name DevopsDeployArtifact#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#freeform_tags DevopsDeployArtifact#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#id DevopsDeployArtifact#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts">DevopsDeployArtifactTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArgumentSubstitutionMode`<sup>Required</sup> <a name="ArgumentSubstitutionMode" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.argumentSubstitutionMode"></a>

```go
ArgumentSubstitutionMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#argument_substitution_mode DevopsDeployArtifact#argument_substitution_mode}.

---

##### `DeployArtifactSource`<sup>Required</sup> <a name="DeployArtifactSource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.deployArtifactSource"></a>

```go
DeployArtifactSource DevopsDeployArtifactDeployArtifactSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a>

deploy_artifact_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_source DevopsDeployArtifact#deploy_artifact_source}

---

##### `DeployArtifactType`<sup>Required</sup> <a name="DeployArtifactType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.deployArtifactType"></a>

```go
DeployArtifactType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_type DevopsDeployArtifact#deploy_artifact_type}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#project_id DevopsDeployArtifact#project_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#defined_tags DevopsDeployArtifact#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#description DevopsDeployArtifact#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#display_name DevopsDeployArtifact#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#freeform_tags DevopsDeployArtifact#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#id DevopsDeployArtifact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactConfig.property.timeouts"></a>

```go
Timeouts DevopsDeployArtifactTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts">DevopsDeployArtifactTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#timeouts DevopsDeployArtifact#timeouts}

---

### DevopsDeployArtifactDeployArtifactSource <a name="DevopsDeployArtifactDeployArtifactSource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployartifact"

&devopsdeployartifact.DevopsDeployArtifactDeployArtifactSource {
	DeployArtifactSourceType: *string,
	Base64EncodedContent: *string,
	ChartUrl: *string,
	DeployArtifactPath: *string,
	DeployArtifactVersion: *string,
	HelmArtifactSourceType: *string,
	HelmVerificationKeySource: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource,
	ImageDigest: *string,
	ImageUri: *string,
	RepositoryId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactSourceType">DeployArtifactSourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_source_type DevopsDeployArtifact#deploy_artifact_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.base64EncodedContent">Base64EncodedContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#base64encoded_content DevopsDeployArtifact#base64encoded_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.chartUrl">ChartUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#chart_url DevopsDeployArtifact#chart_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactPath">DeployArtifactPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_path DevopsDeployArtifact#deploy_artifact_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactVersion">DeployArtifactVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_version DevopsDeployArtifact#deploy_artifact_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.helmArtifactSourceType">HelmArtifactSourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#helm_artifact_source_type DevopsDeployArtifact#helm_artifact_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.helmVerificationKeySource">HelmVerificationKeySource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a></code> | helm_verification_key_source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.imageDigest">ImageDigest</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#image_digest DevopsDeployArtifact#image_digest}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.imageUri">ImageUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#image_uri DevopsDeployArtifact#image_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#repository_id DevopsDeployArtifact#repository_id}. |

---

##### `DeployArtifactSourceType`<sup>Required</sup> <a name="DeployArtifactSourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactSourceType"></a>

```go
DeployArtifactSourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_source_type DevopsDeployArtifact#deploy_artifact_source_type}.

---

##### `Base64EncodedContent`<sup>Optional</sup> <a name="Base64EncodedContent" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.base64EncodedContent"></a>

```go
Base64EncodedContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#base64encoded_content DevopsDeployArtifact#base64encoded_content}.

---

##### `ChartUrl`<sup>Optional</sup> <a name="ChartUrl" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.chartUrl"></a>

```go
ChartUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#chart_url DevopsDeployArtifact#chart_url}.

---

##### `DeployArtifactPath`<sup>Optional</sup> <a name="DeployArtifactPath" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactPath"></a>

```go
DeployArtifactPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_path DevopsDeployArtifact#deploy_artifact_path}.

---

##### `DeployArtifactVersion`<sup>Optional</sup> <a name="DeployArtifactVersion" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.deployArtifactVersion"></a>

```go
DeployArtifactVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#deploy_artifact_version DevopsDeployArtifact#deploy_artifact_version}.

---

##### `HelmArtifactSourceType`<sup>Optional</sup> <a name="HelmArtifactSourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.helmArtifactSourceType"></a>

```go
HelmArtifactSourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#helm_artifact_source_type DevopsDeployArtifact#helm_artifact_source_type}.

---

##### `HelmVerificationKeySource`<sup>Optional</sup> <a name="HelmVerificationKeySource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.helmVerificationKeySource"></a>

```go
HelmVerificationKeySource DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a>

helm_verification_key_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#helm_verification_key_source DevopsDeployArtifact#helm_verification_key_source}

---

##### `ImageDigest`<sup>Optional</sup> <a name="ImageDigest" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.imageDigest"></a>

```go
ImageDigest *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#image_digest DevopsDeployArtifact#image_digest}.

---

##### `ImageUri`<sup>Optional</sup> <a name="ImageUri" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.imageUri"></a>

```go
ImageUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#image_uri DevopsDeployArtifact#image_uri}.

---

##### `RepositoryId`<sup>Optional</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource.property.repositoryId"></a>

```go
RepositoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#repository_id DevopsDeployArtifact#repository_id}.

---

### DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource <a name="DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployartifact"

&devopsdeployartifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource {
	VerificationKeySourceType: *string,
	CurrentPublicKey: *string,
	PreviousPublicKey: *string,
	VaultSecretId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.verificationKeySourceType">VerificationKeySourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#verification_key_source_type DevopsDeployArtifact#verification_key_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.currentPublicKey">CurrentPublicKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#current_public_key DevopsDeployArtifact#current_public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.previousPublicKey">PreviousPublicKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#previous_public_key DevopsDeployArtifact#previous_public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.vaultSecretId">VaultSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#vault_secret_id DevopsDeployArtifact#vault_secret_id}. |

---

##### `VerificationKeySourceType`<sup>Required</sup> <a name="VerificationKeySourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.verificationKeySourceType"></a>

```go
VerificationKeySourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#verification_key_source_type DevopsDeployArtifact#verification_key_source_type}.

---

##### `CurrentPublicKey`<sup>Optional</sup> <a name="CurrentPublicKey" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.currentPublicKey"></a>

```go
CurrentPublicKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#current_public_key DevopsDeployArtifact#current_public_key}.

---

##### `PreviousPublicKey`<sup>Optional</sup> <a name="PreviousPublicKey" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.previousPublicKey"></a>

```go
PreviousPublicKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#previous_public_key DevopsDeployArtifact#previous_public_key}.

---

##### `VaultSecretId`<sup>Optional</sup> <a name="VaultSecretId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.property.vaultSecretId"></a>

```go
VaultSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#vault_secret_id DevopsDeployArtifact#vault_secret_id}.

---

### DevopsDeployArtifactTimeouts <a name="DevopsDeployArtifactTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployartifact"

&devopsdeployartifact.DevopsDeployArtifactTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#create DevopsDeployArtifact#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#delete DevopsDeployArtifact#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#update DevopsDeployArtifact#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#create DevopsDeployArtifact#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#delete DevopsDeployArtifact#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_artifact#update DevopsDeployArtifact#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference <a name="DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployartifact"

devopsdeployartifact.NewDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetCurrentPublicKey">ResetCurrentPublicKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetPreviousPublicKey">ResetPreviousPublicKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetVaultSecretId">ResetVaultSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCurrentPublicKey` <a name="ResetCurrentPublicKey" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetCurrentPublicKey"></a>

```go
func ResetCurrentPublicKey()
```

##### `ResetPreviousPublicKey` <a name="ResetPreviousPublicKey" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetPreviousPublicKey"></a>

```go
func ResetPreviousPublicKey()
```

##### `ResetVaultSecretId` <a name="ResetVaultSecretId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resetVaultSecretId"></a>

```go
func ResetVaultSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.currentPublicKeyInput">CurrentPublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.previousPublicKeyInput">PreviousPublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.vaultSecretIdInput">VaultSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.verificationKeySourceTypeInput">VerificationKeySourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.currentPublicKey">CurrentPublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.previousPublicKey">PreviousPublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.vaultSecretId">VaultSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.verificationKeySourceType">VerificationKeySourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrentPublicKeyInput`<sup>Optional</sup> <a name="CurrentPublicKeyInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.currentPublicKeyInput"></a>

```go
func CurrentPublicKeyInput() *string
```

- *Type:* *string

---

##### `PreviousPublicKeyInput`<sup>Optional</sup> <a name="PreviousPublicKeyInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.previousPublicKeyInput"></a>

```go
func PreviousPublicKeyInput() *string
```

- *Type:* *string

---

##### `VaultSecretIdInput`<sup>Optional</sup> <a name="VaultSecretIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.vaultSecretIdInput"></a>

```go
func VaultSecretIdInput() *string
```

- *Type:* *string

---

##### `VerificationKeySourceTypeInput`<sup>Optional</sup> <a name="VerificationKeySourceTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.verificationKeySourceTypeInput"></a>

```go
func VerificationKeySourceTypeInput() *string
```

- *Type:* *string

---

##### `CurrentPublicKey`<sup>Required</sup> <a name="CurrentPublicKey" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.currentPublicKey"></a>

```go
func CurrentPublicKey() *string
```

- *Type:* *string

---

##### `PreviousPublicKey`<sup>Required</sup> <a name="PreviousPublicKey" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.previousPublicKey"></a>

```go
func PreviousPublicKey() *string
```

- *Type:* *string

---

##### `VaultSecretId`<sup>Required</sup> <a name="VaultSecretId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.vaultSecretId"></a>

```go
func VaultSecretId() *string
```

- *Type:* *string

---

##### `VerificationKeySourceType`<sup>Required</sup> <a name="VerificationKeySourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.verificationKeySourceType"></a>

```go
func VerificationKeySourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a>

---


### DevopsDeployArtifactDeployArtifactSourceOutputReference <a name="DevopsDeployArtifactDeployArtifactSourceOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployartifact"

devopsdeployartifact.NewDevopsDeployArtifactDeployArtifactSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployArtifactDeployArtifactSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.putHelmVerificationKeySource">PutHelmVerificationKeySource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetBase64EncodedContent">ResetBase64EncodedContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetChartUrl">ResetChartUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetDeployArtifactPath">ResetDeployArtifactPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetDeployArtifactVersion">ResetDeployArtifactVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetHelmArtifactSourceType">ResetHelmArtifactSourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetHelmVerificationKeySource">ResetHelmVerificationKeySource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetImageDigest">ResetImageDigest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetImageUri">ResetImageUri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetRepositoryId">ResetRepositoryId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHelmVerificationKeySource` <a name="PutHelmVerificationKeySource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.putHelmVerificationKeySource"></a>

```go
func PutHelmVerificationKeySource(value DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.putHelmVerificationKeySource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a>

---

##### `ResetBase64EncodedContent` <a name="ResetBase64EncodedContent" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetBase64EncodedContent"></a>

```go
func ResetBase64EncodedContent()
```

##### `ResetChartUrl` <a name="ResetChartUrl" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetChartUrl"></a>

```go
func ResetChartUrl()
```

##### `ResetDeployArtifactPath` <a name="ResetDeployArtifactPath" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetDeployArtifactPath"></a>

```go
func ResetDeployArtifactPath()
```

##### `ResetDeployArtifactVersion` <a name="ResetDeployArtifactVersion" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetDeployArtifactVersion"></a>

```go
func ResetDeployArtifactVersion()
```

##### `ResetHelmArtifactSourceType` <a name="ResetHelmArtifactSourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetHelmArtifactSourceType"></a>

```go
func ResetHelmArtifactSourceType()
```

##### `ResetHelmVerificationKeySource` <a name="ResetHelmVerificationKeySource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetHelmVerificationKeySource"></a>

```go
func ResetHelmVerificationKeySource()
```

##### `ResetImageDigest` <a name="ResetImageDigest" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetImageDigest"></a>

```go
func ResetImageDigest()
```

##### `ResetImageUri` <a name="ResetImageUri" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetImageUri"></a>

```go
func ResetImageUri()
```

##### `ResetRepositoryId` <a name="ResetRepositoryId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.resetRepositoryId"></a>

```go
func ResetRepositoryId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmVerificationKeySource">HelmVerificationKeySource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.base64EncodedContentInput">Base64EncodedContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.chartUrlInput">ChartUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactPathInput">DeployArtifactPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactSourceTypeInput">DeployArtifactSourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactVersionInput">DeployArtifactVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmArtifactSourceTypeInput">HelmArtifactSourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmVerificationKeySourceInput">HelmVerificationKeySourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageDigestInput">ImageDigestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.base64EncodedContent">Base64EncodedContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.chartUrl">ChartUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactPath">DeployArtifactPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactSourceType">DeployArtifactSourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactVersion">DeployArtifactVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmArtifactSourceType">HelmArtifactSourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageDigest">ImageDigest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageUri">ImageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HelmVerificationKeySource`<sup>Required</sup> <a name="HelmVerificationKeySource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmVerificationKeySource"></a>

```go
func HelmVerificationKeySource() DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference</a>

---

##### `Base64EncodedContentInput`<sup>Optional</sup> <a name="Base64EncodedContentInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.base64EncodedContentInput"></a>

```go
func Base64EncodedContentInput() *string
```

- *Type:* *string

---

##### `ChartUrlInput`<sup>Optional</sup> <a name="ChartUrlInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.chartUrlInput"></a>

```go
func ChartUrlInput() *string
```

- *Type:* *string

---

##### `DeployArtifactPathInput`<sup>Optional</sup> <a name="DeployArtifactPathInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactPathInput"></a>

```go
func DeployArtifactPathInput() *string
```

- *Type:* *string

---

##### `DeployArtifactSourceTypeInput`<sup>Optional</sup> <a name="DeployArtifactSourceTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactSourceTypeInput"></a>

```go
func DeployArtifactSourceTypeInput() *string
```

- *Type:* *string

---

##### `DeployArtifactVersionInput`<sup>Optional</sup> <a name="DeployArtifactVersionInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactVersionInput"></a>

```go
func DeployArtifactVersionInput() *string
```

- *Type:* *string

---

##### `HelmArtifactSourceTypeInput`<sup>Optional</sup> <a name="HelmArtifactSourceTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmArtifactSourceTypeInput"></a>

```go
func HelmArtifactSourceTypeInput() *string
```

- *Type:* *string

---

##### `HelmVerificationKeySourceInput`<sup>Optional</sup> <a name="HelmVerificationKeySourceInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmVerificationKeySourceInput"></a>

```go
func HelmVerificationKeySourceInput() DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a>

---

##### `ImageDigestInput`<sup>Optional</sup> <a name="ImageDigestInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageDigestInput"></a>

```go
func ImageDigestInput() *string
```

- *Type:* *string

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageUriInput"></a>

```go
func ImageUriInput() *string
```

- *Type:* *string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.repositoryIdInput"></a>

```go
func RepositoryIdInput() *string
```

- *Type:* *string

---

##### `Base64EncodedContent`<sup>Required</sup> <a name="Base64EncodedContent" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.base64EncodedContent"></a>

```go
func Base64EncodedContent() *string
```

- *Type:* *string

---

##### `ChartUrl`<sup>Required</sup> <a name="ChartUrl" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.chartUrl"></a>

```go
func ChartUrl() *string
```

- *Type:* *string

---

##### `DeployArtifactPath`<sup>Required</sup> <a name="DeployArtifactPath" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactPath"></a>

```go
func DeployArtifactPath() *string
```

- *Type:* *string

---

##### `DeployArtifactSourceType`<sup>Required</sup> <a name="DeployArtifactSourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactSourceType"></a>

```go
func DeployArtifactSourceType() *string
```

- *Type:* *string

---

##### `DeployArtifactVersion`<sup>Required</sup> <a name="DeployArtifactVersion" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactVersion"></a>

```go
func DeployArtifactVersion() *string
```

- *Type:* *string

---

##### `HelmArtifactSourceType`<sup>Required</sup> <a name="HelmArtifactSourceType" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmArtifactSourceType"></a>

```go
func HelmArtifactSourceType() *string
```

- *Type:* *string

---

##### `ImageDigest`<sup>Required</sup> <a name="ImageDigest" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageDigest"></a>

```go
func ImageDigest() *string
```

- *Type:* *string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageUri"></a>

```go
func ImageUri() *string
```

- *Type:* *string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.repositoryId"></a>

```go
func RepositoryId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeployArtifactDeployArtifactSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactDeployArtifactSource">DevopsDeployArtifactDeployArtifactSource</a>

---


### DevopsDeployArtifactTimeoutsOutputReference <a name="DevopsDeployArtifactTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployartifact"

devopsdeployartifact.NewDevopsDeployArtifactTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployArtifactTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployArtifact.DevopsDeployArtifactTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



