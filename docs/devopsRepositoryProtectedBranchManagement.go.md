# `devopsRepositoryProtectedBranchManagement` Submodule <a name="`devopsRepositoryProtectedBranchManagement` Submodule" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsRepositoryProtectedBranchManagement <a name="DevopsRepositoryProtectedBranchManagement" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management oci_devops_repository_protected_branch_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositoryprotectedbranchmanagement"

devopsrepositoryprotectedbranchmanagement.NewDevopsRepositoryProtectedBranchManagement(scope Construct, id *string, config DevopsRepositoryProtectedBranchManagementConfig) DevopsRepositoryProtectedBranchManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig">DevopsRepositoryProtectedBranchManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig">DevopsRepositoryProtectedBranchManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetProtectionLevels">ResetProtectionLevels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.putTimeouts"></a>

```go
func PutTimeouts(value DevopsRepositoryProtectedBranchManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts">DevopsRepositoryProtectedBranchManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetProtectionLevels` <a name="ResetProtectionLevels" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetProtectionLevels"></a>

```go
func ResetProtectionLevels()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsRepositoryProtectedBranchManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositoryprotectedbranchmanagement"

devopsrepositoryprotectedbranchmanagement.DevopsRepositoryProtectedBranchManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositoryprotectedbranchmanagement"

devopsrepositoryprotectedbranchmanagement.DevopsRepositoryProtectedBranchManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositoryprotectedbranchmanagement"

devopsrepositoryprotectedbranchmanagement.DevopsRepositoryProtectedBranchManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositoryprotectedbranchmanagement"

devopsrepositoryprotectedbranchmanagement.DevopsRepositoryProtectedBranchManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DevopsRepositoryProtectedBranchManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DevopsRepositoryProtectedBranchManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DevopsRepositoryProtectedBranchManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DevopsRepositoryProtectedBranchManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference">DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.branchNameInput">BranchNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.protectionLevelsInput">ProtectionLevelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.branchName">BranchName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.protectionLevels">ProtectionLevels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.timeouts"></a>

```go
func Timeouts() DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference">DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference</a>

---

##### `BranchNameInput`<sup>Optional</sup> <a name="BranchNameInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.branchNameInput"></a>

```go
func BranchNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProtectionLevelsInput`<sup>Optional</sup> <a name="ProtectionLevelsInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.protectionLevelsInput"></a>

```go
func ProtectionLevelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.repositoryIdInput"></a>

```go
func RepositoryIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.branchName"></a>

```go
func BranchName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProtectionLevels`<sup>Required</sup> <a name="ProtectionLevels" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.protectionLevels"></a>

```go
func ProtectionLevels() *[]*string
```

- *Type:* *[]*string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.repositoryId"></a>

```go
func RepositoryId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsRepositoryProtectedBranchManagementConfig <a name="DevopsRepositoryProtectedBranchManagementConfig" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositoryprotectedbranchmanagement"

&devopsrepositoryprotectedbranchmanagement.DevopsRepositoryProtectedBranchManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BranchName: *string,
	RepositoryId: *string,
	Id: *string,
	ProtectionLevels: *[]*string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.branchName">BranchName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#branch_name DevopsRepositoryProtectedBranchManagement#branch_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#repository_id DevopsRepositoryProtectedBranchManagement#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#id DevopsRepositoryProtectedBranchManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.protectionLevels">ProtectionLevels</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#protection_levels DevopsRepositoryProtectedBranchManagement#protection_levels}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts">DevopsRepositoryProtectedBranchManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.branchName"></a>

```go
BranchName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#branch_name DevopsRepositoryProtectedBranchManagement#branch_name}.

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.repositoryId"></a>

```go
RepositoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#repository_id DevopsRepositoryProtectedBranchManagement#repository_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#id DevopsRepositoryProtectedBranchManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProtectionLevels`<sup>Optional</sup> <a name="ProtectionLevels" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.protectionLevels"></a>

```go
ProtectionLevels *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#protection_levels DevopsRepositoryProtectedBranchManagement#protection_levels}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementConfig.property.timeouts"></a>

```go
Timeouts DevopsRepositoryProtectedBranchManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts">DevopsRepositoryProtectedBranchManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#timeouts DevopsRepositoryProtectedBranchManagement#timeouts}

---

### DevopsRepositoryProtectedBranchManagementTimeouts <a name="DevopsRepositoryProtectedBranchManagementTimeouts" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositoryprotectedbranchmanagement"

&devopsrepositoryprotectedbranchmanagement.DevopsRepositoryProtectedBranchManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#create DevopsRepositoryProtectedBranchManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#delete DevopsRepositoryProtectedBranchManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#update DevopsRepositoryProtectedBranchManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#create DevopsRepositoryProtectedBranchManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#delete DevopsRepositoryProtectedBranchManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/devops_repository_protected_branch_management#update DevopsRepositoryProtectedBranchManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference <a name="DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/devopsrepositoryprotectedbranchmanagement"

devopsrepositoryprotectedbranchmanagement.NewDevopsRepositoryProtectedBranchManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.devopsRepositoryProtectedBranchManagement.DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



