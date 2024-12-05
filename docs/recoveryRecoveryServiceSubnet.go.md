# `recoveryRecoveryServiceSubnet` Submodule <a name="`recoveryRecoveryServiceSubnet` Submodule" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RecoveryRecoveryServiceSubnet <a name="RecoveryRecoveryServiceSubnet" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet oci_recovery_recovery_service_subnet}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/recoveryrecoveryservicesubnet"

recoveryrecoveryservicesubnet.NewRecoveryRecoveryServiceSubnet(scope Construct, id *string, config RecoveryRecoveryServiceSubnetConfig) RecoveryRecoveryServiceSubnet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig">RecoveryRecoveryServiceSubnetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig">RecoveryRecoveryServiceSubnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetSubnets">ResetSubnets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.putTimeouts"></a>

```go
func PutTimeouts(value RecoveryRecoveryServiceSubnetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts">RecoveryRecoveryServiceSubnetTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetId"></a>

```go
func ResetId()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetNsgIds"></a>

```go
func ResetNsgIds()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetSubnets` <a name="ResetSubnets" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetSubnets"></a>

```go
func ResetSubnets()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RecoveryRecoveryServiceSubnet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/recoveryrecoveryservicesubnet"

recoveryrecoveryservicesubnet.RecoveryRecoveryServiceSubnet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/recoveryrecoveryservicesubnet"

recoveryrecoveryservicesubnet.RecoveryRecoveryServiceSubnet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/recoveryrecoveryservicesubnet"

recoveryrecoveryservicesubnet.RecoveryRecoveryServiceSubnet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/recoveryrecoveryservicesubnet"

recoveryrecoveryservicesubnet.RecoveryRecoveryServiceSubnet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a RecoveryRecoveryServiceSubnet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RecoveryRecoveryServiceSubnet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RecoveryRecoveryServiceSubnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the RecoveryRecoveryServiceSubnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference">RecoveryRecoveryServiceSubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.nsgIdsInput">NsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.vcnIdInput">VcnIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.vcnId">VcnId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeouts"></a>

```go
func Timeouts() RecoveryRecoveryServiceSubnetTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference">RecoveryRecoveryServiceSubnetTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.nsgIdsInput"></a>

```go
func NsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VcnIdInput`<sup>Optional</sup> <a name="VcnIdInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.vcnIdInput"></a>

```go
func VcnIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.vcnId"></a>

```go
func VcnId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RecoveryRecoveryServiceSubnetConfig <a name="RecoveryRecoveryServiceSubnetConfig" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/recoveryrecoveryservicesubnet"

&recoveryrecoveryservicesubnet.RecoveryRecoveryServiceSubnetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	VcnId: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	NsgIds: *[]*string,
	SubnetId: *string,
	Subnets: *[]*string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#compartment_id RecoveryRecoveryServiceSubnet#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#display_name RecoveryRecoveryServiceSubnet#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.vcnId">VcnId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#vcn_id RecoveryRecoveryServiceSubnet#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#defined_tags RecoveryRecoveryServiceSubnet#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#freeform_tags RecoveryRecoveryServiceSubnet#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#id RecoveryRecoveryServiceSubnet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#nsg_ids RecoveryRecoveryServiceSubnet#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#subnet_id RecoveryRecoveryServiceSubnet#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.subnets">Subnets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#subnets RecoveryRecoveryServiceSubnet#subnets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts">RecoveryRecoveryServiceSubnetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#compartment_id RecoveryRecoveryServiceSubnet#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#display_name RecoveryRecoveryServiceSubnet#display_name}.

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.vcnId"></a>

```go
VcnId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#vcn_id RecoveryRecoveryServiceSubnet#vcn_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#defined_tags RecoveryRecoveryServiceSubnet#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#freeform_tags RecoveryRecoveryServiceSubnet#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#id RecoveryRecoveryServiceSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.nsgIds"></a>

```go
NsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#nsg_ids RecoveryRecoveryServiceSubnet#nsg_ids}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#subnet_id RecoveryRecoveryServiceSubnet#subnet_id}.

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#subnets RecoveryRecoveryServiceSubnet#subnets}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.timeouts"></a>

```go
Timeouts RecoveryRecoveryServiceSubnetTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts">RecoveryRecoveryServiceSubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#timeouts RecoveryRecoveryServiceSubnet#timeouts}

---

### RecoveryRecoveryServiceSubnetTimeouts <a name="RecoveryRecoveryServiceSubnetTimeouts" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/recoveryrecoveryservicesubnet"

&recoveryrecoveryservicesubnet.RecoveryRecoveryServiceSubnetTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#create RecoveryRecoveryServiceSubnet#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#delete RecoveryRecoveryServiceSubnet#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#update RecoveryRecoveryServiceSubnet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#create RecoveryRecoveryServiceSubnet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#delete RecoveryRecoveryServiceSubnet#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#update RecoveryRecoveryServiceSubnet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RecoveryRecoveryServiceSubnetTimeoutsOutputReference <a name="RecoveryRecoveryServiceSubnetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/recoveryrecoveryservicesubnet"

recoveryrecoveryservicesubnet.NewRecoveryRecoveryServiceSubnetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RecoveryRecoveryServiceSubnetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



