# `devopsDeployEnvironment` Submodule <a name="`devopsDeployEnvironment` Submodule" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsDeployEnvironment <a name="DevopsDeployEnvironment" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment oci_devops_deploy_environment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployenvironment"

devopsdeployenvironment.NewDevopsDeployEnvironment(scope Construct, id *string, config DevopsDeployEnvironmentConfig) DevopsDeployEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig">DevopsDeployEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig">DevopsDeployEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.putComputeInstanceGroupSelectors">PutComputeInstanceGroupSelectors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.putNetworkChannel">PutNetworkChannel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetComputeInstanceGroupSelectors">ResetComputeInstanceGroupSelectors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetFunctionId">ResetFunctionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetNetworkChannel">ResetNetworkChannel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComputeInstanceGroupSelectors` <a name="PutComputeInstanceGroupSelectors" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.putComputeInstanceGroupSelectors"></a>

```go
func PutComputeInstanceGroupSelectors(value DevopsDeployEnvironmentComputeInstanceGroupSelectors)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.putComputeInstanceGroupSelectors.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors">DevopsDeployEnvironmentComputeInstanceGroupSelectors</a>

---

##### `PutNetworkChannel` <a name="PutNetworkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.putNetworkChannel"></a>

```go
func PutNetworkChannel(value DevopsDeployEnvironmentNetworkChannel)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.putNetworkChannel.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel">DevopsDeployEnvironmentNetworkChannel</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.putTimeouts"></a>

```go
func PutTimeouts(value DevopsDeployEnvironmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts">DevopsDeployEnvironmentTimeouts</a>

---

##### `ResetClusterId` <a name="ResetClusterId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetClusterId"></a>

```go
func ResetClusterId()
```

##### `ResetComputeInstanceGroupSelectors` <a name="ResetComputeInstanceGroupSelectors" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetComputeInstanceGroupSelectors"></a>

```go
func ResetComputeInstanceGroupSelectors()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetFunctionId` <a name="ResetFunctionId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetFunctionId"></a>

```go
func ResetFunctionId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetId"></a>

```go
func ResetId()
```

##### `ResetNetworkChannel` <a name="ResetNetworkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetNetworkChannel"></a>

```go
func ResetNetworkChannel()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsDeployEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployenvironment"

devopsdeployenvironment.DevopsDeployEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployenvironment"

devopsdeployenvironment.DevopsDeployEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployenvironment"

devopsdeployenvironment.DevopsDeployEnvironment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployenvironment"

devopsdeployenvironment.DevopsDeployEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DevopsDeployEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DevopsDeployEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DevopsDeployEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DevopsDeployEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.computeInstanceGroupSelectors">ComputeInstanceGroupSelectors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference">DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.networkChannel">NetworkChannel</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference">DevopsDeployEnvironmentNetworkChannelOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference">DevopsDeployEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.computeInstanceGroupSelectorsInput">ComputeInstanceGroupSelectorsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors">DevopsDeployEnvironmentComputeInstanceGroupSelectors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.deployEnvironmentTypeInput">DeployEnvironmentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.functionIdInput">FunctionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.networkChannelInput">NetworkChannelInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel">DevopsDeployEnvironmentNetworkChannel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.deployEnvironmentType">DeployEnvironmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.functionId">FunctionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComputeInstanceGroupSelectors`<sup>Required</sup> <a name="ComputeInstanceGroupSelectors" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.computeInstanceGroupSelectors"></a>

```go
func ComputeInstanceGroupSelectors() DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference">DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `NetworkChannel`<sup>Required</sup> <a name="NetworkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.networkChannel"></a>

```go
func NetworkChannel() DevopsDeployEnvironmentNetworkChannelOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference">DevopsDeployEnvironmentNetworkChannelOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.timeouts"></a>

```go
func Timeouts() DevopsDeployEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference">DevopsDeployEnvironmentTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `ComputeInstanceGroupSelectorsInput`<sup>Optional</sup> <a name="ComputeInstanceGroupSelectorsInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.computeInstanceGroupSelectorsInput"></a>

```go
func ComputeInstanceGroupSelectorsInput() DevopsDeployEnvironmentComputeInstanceGroupSelectors
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors">DevopsDeployEnvironmentComputeInstanceGroupSelectors</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeployEnvironmentTypeInput`<sup>Optional</sup> <a name="DeployEnvironmentTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.deployEnvironmentTypeInput"></a>

```go
func DeployEnvironmentTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FunctionIdInput`<sup>Optional</sup> <a name="FunctionIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.functionIdInput"></a>

```go
func FunctionIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetworkChannelInput`<sup>Optional</sup> <a name="NetworkChannelInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.networkChannelInput"></a>

```go
func NetworkChannelInput() DevopsDeployEnvironmentNetworkChannel
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel">DevopsDeployEnvironmentNetworkChannel</a>

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeployEnvironmentType`<sup>Required</sup> <a name="DeployEnvironmentType" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.deployEnvironmentType"></a>

```go
func DeployEnvironmentType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.functionId"></a>

```go
func FunctionId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsDeployEnvironmentComputeInstanceGroupSelectors <a name="DevopsDeployEnvironmentComputeInstanceGroupSelectors" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployenvironment"

&devopsdeployenvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors {
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors.property.items">Items</a></code> | <code>interface{}</code> | items block. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#items DevopsDeployEnvironment#items}

---

### DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems <a name="DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployenvironment"

&devopsdeployenvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems {
	SelectorType: *string,
	ComputeInstanceIds: *[]*string,
	Query: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems.property.selectorType">SelectorType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#selector_type DevopsDeployEnvironment#selector_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems.property.computeInstanceIds">ComputeInstanceIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#compute_instance_ids DevopsDeployEnvironment#compute_instance_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems.property.query">Query</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#query DevopsDeployEnvironment#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#region DevopsDeployEnvironment#region}. |

---

##### `SelectorType`<sup>Required</sup> <a name="SelectorType" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems.property.selectorType"></a>

```go
SelectorType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#selector_type DevopsDeployEnvironment#selector_type}.

---

##### `ComputeInstanceIds`<sup>Optional</sup> <a name="ComputeInstanceIds" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems.property.computeInstanceIds"></a>

```go
ComputeInstanceIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#compute_instance_ids DevopsDeployEnvironment#compute_instance_ids}.

---

##### `Query`<sup>Optional</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems.property.query"></a>

```go
Query *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#query DevopsDeployEnvironment#query}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItems.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#region DevopsDeployEnvironment#region}.

---

### DevopsDeployEnvironmentConfig <a name="DevopsDeployEnvironmentConfig" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployenvironment"

&devopsdeployenvironment.DevopsDeployEnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DeployEnvironmentType: *string,
	ProjectId: *string,
	ClusterId: *string,
	ComputeInstanceGroupSelectors: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors,
	DefinedTags: *map[string]*string,
	Description: *string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	FunctionId: *string,
	Id: *string,
	NetworkChannel: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.deployEnvironmentType">DeployEnvironmentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#deploy_environment_type DevopsDeployEnvironment#deploy_environment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#project_id DevopsDeployEnvironment#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#cluster_id DevopsDeployEnvironment#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.computeInstanceGroupSelectors">ComputeInstanceGroupSelectors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors">DevopsDeployEnvironmentComputeInstanceGroupSelectors</a></code> | compute_instance_group_selectors block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#defined_tags DevopsDeployEnvironment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#description DevopsDeployEnvironment#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#display_name DevopsDeployEnvironment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#freeform_tags DevopsDeployEnvironment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.functionId">FunctionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#function_id DevopsDeployEnvironment#function_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#id DevopsDeployEnvironment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.networkChannel">NetworkChannel</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel">DevopsDeployEnvironmentNetworkChannel</a></code> | network_channel block. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts">DevopsDeployEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeployEnvironmentType`<sup>Required</sup> <a name="DeployEnvironmentType" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.deployEnvironmentType"></a>

```go
DeployEnvironmentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#deploy_environment_type DevopsDeployEnvironment#deploy_environment_type}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#project_id DevopsDeployEnvironment#project_id}.

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#cluster_id DevopsDeployEnvironment#cluster_id}.

---

##### `ComputeInstanceGroupSelectors`<sup>Optional</sup> <a name="ComputeInstanceGroupSelectors" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.computeInstanceGroupSelectors"></a>

```go
ComputeInstanceGroupSelectors DevopsDeployEnvironmentComputeInstanceGroupSelectors
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors">DevopsDeployEnvironmentComputeInstanceGroupSelectors</a>

compute_instance_group_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#compute_instance_group_selectors DevopsDeployEnvironment#compute_instance_group_selectors}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#defined_tags DevopsDeployEnvironment#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#description DevopsDeployEnvironment#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#display_name DevopsDeployEnvironment#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#freeform_tags DevopsDeployEnvironment#freeform_tags}.

---

##### `FunctionId`<sup>Optional</sup> <a name="FunctionId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.functionId"></a>

```go
FunctionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#function_id DevopsDeployEnvironment#function_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#id DevopsDeployEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkChannel`<sup>Optional</sup> <a name="NetworkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.networkChannel"></a>

```go
NetworkChannel DevopsDeployEnvironmentNetworkChannel
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel">DevopsDeployEnvironmentNetworkChannel</a>

network_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#network_channel DevopsDeployEnvironment#network_channel}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentConfig.property.timeouts"></a>

```go
Timeouts DevopsDeployEnvironmentTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts">DevopsDeployEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#timeouts DevopsDeployEnvironment#timeouts}

---

### DevopsDeployEnvironmentNetworkChannel <a name="DevopsDeployEnvironmentNetworkChannel" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployenvironment"

&devopsdeployenvironment.DevopsDeployEnvironmentNetworkChannel {
	NetworkChannelType: *string,
	SubnetId: *string,
	NsgIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel.property.networkChannelType">NetworkChannelType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#network_channel_type DevopsDeployEnvironment#network_channel_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#subnet_id DevopsDeployEnvironment#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#nsg_ids DevopsDeployEnvironment#nsg_ids}. |

---

##### `NetworkChannelType`<sup>Required</sup> <a name="NetworkChannelType" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel.property.networkChannelType"></a>

```go
NetworkChannelType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#network_channel_type DevopsDeployEnvironment#network_channel_type}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#subnet_id DevopsDeployEnvironment#subnet_id}.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel.property.nsgIds"></a>

```go
NsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#nsg_ids DevopsDeployEnvironment#nsg_ids}.

---

### DevopsDeployEnvironmentTimeouts <a name="DevopsDeployEnvironmentTimeouts" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployenvironment"

&devopsdeployenvironment.DevopsDeployEnvironmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#create DevopsDeployEnvironment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#delete DevopsDeployEnvironment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#update DevopsDeployEnvironment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#create DevopsDeployEnvironment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#delete DevopsDeployEnvironment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_deploy_environment#update DevopsDeployEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList <a name="DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployenvironment"

devopsdeployenvironment.NewDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.get"></a>

```go
func Get(index *f64) DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference <a name="DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployenvironment"

devopsdeployenvironment.NewDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.resetComputeInstanceIds">ResetComputeInstanceIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComputeInstanceIds` <a name="ResetComputeInstanceIds" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.resetComputeInstanceIds"></a>

```go
func ResetComputeInstanceIds()
```

##### `ResetQuery` <a name="ResetQuery" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.resetQuery"></a>

```go
func ResetQuery()
```

##### `ResetRegion` <a name="ResetRegion" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.computeInstanceIdsInput">ComputeInstanceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.selectorTypeInput">SelectorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.computeInstanceIds">ComputeInstanceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.selectorType">SelectorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeInstanceIdsInput`<sup>Optional</sup> <a name="ComputeInstanceIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.computeInstanceIdsInput"></a>

```go
func ComputeInstanceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SelectorTypeInput`<sup>Optional</sup> <a name="SelectorTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.selectorTypeInput"></a>

```go
func SelectorTypeInput() *string
```

- *Type:* *string

---

##### `ComputeInstanceIds`<sup>Required</sup> <a name="ComputeInstanceIds" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.computeInstanceIds"></a>

```go
func ComputeInstanceIds() *[]*string
```

- *Type:* *[]*string

---

##### `Query`<sup>Required</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SelectorType`<sup>Required</sup> <a name="SelectorType" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.selectorType"></a>

```go
func SelectorType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference <a name="DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployenvironment"

devopsdeployenvironment.NewDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetItems` <a name="ResetItems" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList">DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors">DevopsDeployEnvironmentComputeInstanceGroupSelectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.items"></a>

```go
func Items() DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList">DevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeployEnvironmentComputeInstanceGroupSelectors
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentComputeInstanceGroupSelectors">DevopsDeployEnvironmentComputeInstanceGroupSelectors</a>

---


### DevopsDeployEnvironmentNetworkChannelOutputReference <a name="DevopsDeployEnvironmentNetworkChannelOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployenvironment"

devopsdeployenvironment.NewDevopsDeployEnvironmentNetworkChannelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployEnvironmentNetworkChannelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.resetNsgIds">ResetNsgIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.resetNsgIds"></a>

```go
func ResetNsgIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.networkChannelTypeInput">NetworkChannelTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.nsgIdsInput">NsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.networkChannelType">NetworkChannelType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel">DevopsDeployEnvironmentNetworkChannel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkChannelTypeInput`<sup>Optional</sup> <a name="NetworkChannelTypeInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.networkChannelTypeInput"></a>

```go
func NetworkChannelTypeInput() *string
```

- *Type:* *string

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.nsgIdsInput"></a>

```go
func NsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `NetworkChannelType`<sup>Required</sup> <a name="NetworkChannelType" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.networkChannelType"></a>

```go
func NetworkChannelType() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannelOutputReference.property.internalValue"></a>

```go
func InternalValue() DevopsDeployEnvironmentNetworkChannel
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentNetworkChannel">DevopsDeployEnvironmentNetworkChannel</a>

---


### DevopsDeployEnvironmentTimeoutsOutputReference <a name="DevopsDeployEnvironmentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsdeployenvironment"

devopsdeployenvironment.NewDevopsDeployEnvironmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsDeployEnvironmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsDeployEnvironment.DevopsDeployEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



